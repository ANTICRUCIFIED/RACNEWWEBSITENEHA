import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// firebase-admin configuration & initialization for backend/server level operations
let isFirebaseEnabled = false;
let firestoreDb: any = null;

try {
  const fbConfigPath = path.join(process.cwd(), 'firebase-applet-config.json');
  if (fs.existsSync(fbConfigPath)) {
    const configData = JSON.parse(fs.readFileSync(fbConfigPath, 'utf8'));
    if (configData && configData.projectId && configData.projectId !== 'remixed-project-id') {
      if (admin.apps.length === 0) {
        admin.initializeApp({
          projectId: configData.projectId,
        });
      }
      firestoreDb = admin.firestore();
      if (configData.firestoreDatabaseId) {
        firestoreDb.settings({ databaseId: configData.firestoreDatabaseId });
      }
      isFirebaseEnabled = true;
      console.log('Firebase Admin SDK initialized successfully in /api/contact.');
    } else {
      console.log('Firebase Applet Config contains mock project ID. Running with local storage fallback.');
    }
  }
} catch (fbAdminError) {
  console.warn('Firebase Admin SDK initialization failed or bypassed:', fbAdminError);
}

export default async function handler(req: any, res: any) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phoneNumber, subject, message } = req.body || {};

    if (!firstName || !lastName || !email || !phoneNumber || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // 1. Store the inquiry in Firebase Firestore if enabled, or local fallback file
    let storedInFirestore = false;
    let storedLocally = false;
    if (isFirebaseEnabled && firestoreDb) {
      try {
        await firestoreDb.collection('contact_inquiries').add({
          firstName,
          lastName,
          email,
          phoneNumber,
          subject,
          message,
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
        storedInFirestore = true;
        console.log('Successfully saved contact inquiry to Firestore.');
      } catch (firestoreError) {
        console.error('Failed to save contact inquiry to Firestore:', firestoreError);
      }
    } else {
      try {
        // Safe check for read-only Vercel environment - will logging fails but not crash endpoint
        const inquiriesDir = path.join(process.cwd(), 'src', 'data');
        if (!fs.existsSync(inquiriesDir)) {
          fs.mkdirSync(inquiriesDir, { recursive: true });
        }
        const inquiriesFile = path.join(inquiriesDir, 'contactInquiries.json');
        let inquiries: any[] = [];
        if (fs.existsSync(inquiriesFile)) {
          try {
            inquiries = JSON.parse(fs.readFileSync(inquiriesFile, 'utf8'));
          } catch (pErr) {
            inquiries = [];
          }
        }
        inquiries.push({
          firstName,
          lastName,
          email,
          phoneNumber,
          subject,
          message,
          createdAt: new Date().toISOString()
        });
        fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2), 'utf8');
        storedLocally = true;
        console.log('Fallback: Contact inquiry saved to local JSON fallback.');
      } catch (localSaveError: any) {
        console.warn('Firebase is deactivated and local write skipped (Expected inside read-only serverless filesystems):', localSaveError.message || localSaveError);
      }
    }

    // 2. Setup the nodemailer transporter lazily (safe initialization without crashing on lack of credentials)
    const isConfigured = (val: any) => val && typeof val === 'string' && val !== 'undefined' && val !== 'null' && val.trim() !== '';
    let host = isConfigured(process.env.SMTP_HOST) ? process.env.SMTP_HOST.trim() : undefined;
    if (host) {
      host = host.replace(/^(?:[a-zA-Z]+:)?\/\//, '');
    }
    const portVal = isConfigured(process.env.SMTP_PORT) ? process.env.SMTP_PORT.trim() : undefined;
    const user = isConfigured(process.env.SMTP_USER) ? process.env.SMTP_USER.trim() : undefined;
    const pass = isConfigured(process.env.SMTP_PASS) ? process.env.SMTP_PASS.trim() : undefined;

    const emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <div style="background-color: #0c1c38; padding: 25px; text-align: center; color: #fff;">
          <h2 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.5px;">New Consultation Inquiry</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.8; font-size: 14px;">RAC Forge Private Limited</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <p style="font-size: 16px; margin-top: 0; color: #475569;">A new regulatory submission consultation message came in. Please review the details below:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
             <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%; color: #0c1c38;">First Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Last Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Email Address:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;"><a href="mailto:${email}" style="color: #00a896; text-decoration: none; font-weight: 500;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Phone Number:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #334155;"><a href="tel:${phoneNumber}" style="color: #00a896; text-decoration: none; font-weight: 500;">${phoneNumber}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0c1c38;">Subject:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 500; color: #0c1c38;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 30px;">
            <h4 style="margin-bottom: 10px; color: #0c1c38; font-size: 16px;">Inquiry Message:</h4>
            <div style="background-color: #f8fafc; border-left: 4px solid #00a896; padding: 20px; border-radius: 8px; white-space: pre-wrap; color: #334155; font-style: italic; line-height: 1.7; box-sizing: border-box;">${message}</div>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
          This email was automatically generated and sent from the RAC Forge compliance portal.
        </div>
      </div>
    `;

    let emailSent = false;
    let emailError = null;

    if (host && portVal && user && pass) {
      try {
        const port = parseInt(portVal, 10);
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: {
            user,
            pass,
          },
          connectionTimeout: 4000,
          greetingTimeout: 4000,
          socketTimeout: 4000,
          tls: {
            rejectUnauthorized: false,
            minVersion: 'TLSv1.2'
          }
        });

        const mailOptionsAdmin = {
          from: `"RAC Forge Contact Form" <${user}>`,
          to: `support@racforge.com`,
          replyTo: email,
          subject: `[New Inquiry] ${subject} - ${firstName} ${lastName}`,
          html: emailContent,
          text: `New Inquiry details:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\n\nMessage:\n${message}`,
        };

        const mailOptionsUser = {
          from: `"RAC Forge" <${user}>`,
          to: `${email}`,
          subject: `Thanks for contacting RAC Forge - We received your inquiry`,
          html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><p>Dear ${firstName},</p><p>Thank you for reaching out to RAC Forge. We have successfully received your inquiry regarding <b>${subject}</b>.</p><p>Our team will review your message and get back to you shortly.</p><p>Best regards,<br>The RAC Forge Team</p></div>`,
          text: `Dear ${firstName},\n\nThank you for reaching out to RAC Forge. We have successfully received your inquiry regarding "${subject}".\n\nOur team will review your message and get back to you shortly.\n\nBest regards,\nThe RAC Forge Team`,
        };

        await transporter.sendMail(mailOptionsAdmin);
        await transporter.sendMail(mailOptionsUser);
        emailSent = true;
        console.log(`Email successfully sent to support@racforge.com and ${email} for user ${firstName} ${lastName}.`);
      } catch (mailErr: any) {
        console.log(`Notice: SMTP transmission error: ${mailErr.message || String(mailErr)}`);
        emailError = mailErr.message || String(mailErr);
      }
    } else {
      console.warn('--- EMAIL TRANSACTION SIMULATION (SMTP configuration missing or incomplete) ---');
      console.warn('To/Recipient: support@racforge.com');
      console.warn(`Subject: [New Inquiry] ${subject} - ${firstName} ${lastName}`);
      console.warn(`Content:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`);
      console.warn('--------------------------------------------------------------');
    }

    return res.status(200).json({ 
      success: true, 
      storedInFirestore, 
      storedLocally,
      emailSent,
      emailError,
      message: emailSent 
        ? 'Inquiry received and notification email sent successfully.' 
        : 'Inquiry received and captured successfully.'
    });
  } catch (error: any) {
    console.error('Contact API processing error:', error);
    return res.status(500).json({ error: 'Failed to process inquiry submission', details: error.message || String(error) });
  }
}
