import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const imagesToDownload = [
  // Logos / branding
  { url: "https://i.ibb.co/WNtHVDps/Whats-App-Image-2025-08-31-at-21-09-34-54925d9d.jpg", filename: "logo.jpg" },
  
  // Page banners
  { url: "https://racforge.com/wp-content/uploads/2025/10/service-banner.png", filename: "service-banner.png" },
  { url: "https://racforge.com/wp-content/uploads/2025/10/Expert-Medical-Device-Regulatory-Consulting-for-Global-Market-Access-1.png", filename: "resources-banner.png" },
  { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600", filename: "about-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600", filename: "founder.jpg" },
  { url: "https://racforge.com/wp-content/uploads/revslider/slider-3/slider-51.jpg", filename: "expertise-banner.jpg" },
  { url: "https://i.postimg.cc/yxYBn7fb/banner.png", filename: "home-banner.png" },
  { url: "https://i.postimg.cc/02kdGh9z/image1.png", filename: "strategic-consulting.png" },
  { url: "https://picsum.photos/seed/contact-hero/1920/1080", filename: "contact-hero.jpg" },

  // Blog Images
  { url: "https://i.postimg.cc/ZRDZf113/Sterilization-Validation-for-Medical-Devices.jpg", filename: "blog1.jpg" },
  { url: "https://i.postimg.cc/bwd5gZq9/biocompatibility-testing.png", filename: "blog2.png" },
  { url: "https://i.postimg.cc/VsD4hzGx/mastering-eu-mdr1.png", filename: "blog3.png" },
  { url: "https://i.postimg.cc/Hs0WmPMN/Navigating-USFDAs-510k-Submission-Process.png", filename: "blog4.png" },
  { url: "https://i.postimg.cc/NG9xfZQL/understanding-cdsco-rules.png", filename: "blog5.png" },
];

// Service page picsums
const servicePicsums = [
  "usfda510k", "test", "clinical", "anvisa", "usfdapma", "manufacturing", 
  "eumdr", "loan", "import", "samd", "usfdadenovo"
];

for (const p of servicePicsums) {
  imagesToDownload.push({
    url: `https://picsum.photos/seed/${p}/1920/1080`,
    filename: `service-${p}.jpg`
  });
}

const dir = path.join(process.cwd(), 'public', 'rich-image-assets');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        if (response.headers.location) {
          download(response.headers.location, dest).then(resolve).catch(reject);
          return;
        }
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log('Downloading images...');
  for (const img of imagesToDownload) {
    const dest = path.join(dir, img.filename);
    try {
      await download(img.url, dest);
      console.log(`Downloaded ${img.filename}`);
    } catch (e) {
      console.error(`Error downloading ${img.url}:`, e);
    }
  }

  // Update files
  console.log('Updating files...');

  function replaceInFile(filePath: string, replacements: {old: string, new: string}[]) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const r of replacements) {
      if (content.includes(r.old)) {
        // Handle regex replacement with global flag if needed, but since urls are exact, split/join will do string replacement properly
        content = content.split(r.old).join(r.new);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }

  function processDirectory(directory: string, replacements: {old: string, new: string}[]) {
    if (!fs.existsSync(directory)) return;
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const fullPath = path.join(directory, file);
      if (fs.statSync(fullPath).isDirectory()) {
        processDirectory(fullPath, replacements);
      } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
        replaceInFile(fullPath, replacements);
      }
    }
  }

  const replacements = imagesToDownload.map(img => ({
    old: img.url,
    new: `/rich-image-assets/${img.filename}`
  }));

  processDirectory(path.join(process.cwd(), 'src'), replacements);
  console.log('Done.');
}

main().catch(console.error);
