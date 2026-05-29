import fs from 'fs';
import path from 'path';

const imagesToDownload = [
  // index.html / SEO
  { url: 'https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png', filename: 'favicon-192.png' },
  { url: 'https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png', filename: 'apple-touch-icon.png' },
  { url: 'https://i.ibb.co/WNtHVDps/Whats-App-Image-2025-08-31-at-21-09-34-54925d9d.jpg', filename: 'logo.jpg' },

  // Banners
  { url: 'https://racforge.com/wp-content/uploads/2025/10/service-banner.png', filename: 'service-banner.png' },
  { url: 'https://racforge.com/wp-content/uploads/2025/10/Expert-Medical-Device-Regulatory-Consulting-for-Global-Market-Access-1.png', filename: 'resources-banner.png' },
  { url: 'https://racforge.com/wp-content/uploads/revslider/slider-3/slider-51.jpg', filename: 'expertise-banner.jpg' },
  { url: 'https://i.postimg.cc/yxYBn7fb/banner.png', filename: 'home-banner.png' },
  { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600', filename: 'about-bg.jpg' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600', filename: 'about-founder.jpg' },
  { url: 'https://picsum.photos/seed/contact-hero/1920/1080', filename: 'contact-hero.jpg' },
  { url: 'https://i.postimg.cc/02kdGh9z/image1.png', filename: 'strategic-consulting.png' },

  // Blog Images
  { url: 'https://i.postimg.cc/ZRDZf113/Sterilization-Validation-for-Medical-Devices.jpg', filename: 'blog-sterilization.jpg' },
  { url: 'https://i.postimg.cc/bwd5gZq9/biocompatibility-testing.png', filename: 'blog-biocompatibility.png' },
  { url: 'https://i.postimg.cc/VsD4hzGx/mastering-eu-mdr1.png', filename: 'blog-eu-mdr.png' },
  { url: 'https://i.postimg.cc/Hs0WmPMN/Navigating-USFDAs-510k-Submission-Process.png', filename: 'blog-usfda-510k.png' },
  { url: 'https://i.postimg.cc/NG9xfZQL/understanding-cdsco-rules.png', filename: 'blog-cdsco-rules.png' },
  
  // Extra Blog Images from constants.ts
  { url: 'https://picsum.photos/seed/anvisa/1920/1080', filename: 'page-service-anvisa.jpg' },
  { url: 'https://picsum.photos/seed/clinical/1920/1080', filename: 'page-service-clinical.jpg' },
  { url: 'https://picsum.photos/seed/import/1920/1080', filename: 'page-service-import.jpg' },
  { url: 'https://picsum.photos/seed/loan/1920/1080', filename: 'page-service-loan.jpg' },
  { url: 'https://picsum.photos/seed/manufacturing/1920/1080', filename: 'page-service-manufacturing.jpg' },
  { url: 'https://picsum.photos/seed/test/1920/1080', filename: 'page-service-test.jpg' },
  { url: 'https://picsum.photos/seed/eumdr/1920/1080', filename: 'page-service-eumdr.jpg' },
  { url: 'https://picsum.photos/seed/samd/1920/1080', filename: 'page-service-samd.jpg' },
  { url: 'https://picsum.photos/seed/usfda510k/1920/1080', filename: 'page-service-usfda510k.jpg' },
  { url: 'https://picsum.photos/seed/usfdadenovo/1920/1080', filename: 'page-service-usfdadenovo.jpg' },
  { url: 'https://picsum.photos/seed/usfdapma/1920/1080', filename: 'page-service-usfdapma.jpg' },

  // Services Logos
  { url: 'https://i.postimg.cc/RCWzCC3c/service1.png', filename: 'service-usfda.png' },
  { url: 'https://i.postimg.cc/vH5kD4GW/service2.png', filename: 'service-eumdr.png' },
  { url: 'https://i.postimg.cc/SNZ86rQC/service3.png', filename: 'service-cdsco.png' },
  { url: 'https://i.postimg.cc/sXtHgrqV/Avisa.png', filename: 'service-anvisa.png' },
  { url: 'https://i.postimg.cc/52hXgKZZ/service4.png', filename: 'service-samd.png' },
];

const dir = path.join(process.cwd(), 'public', 'image_rich_asset');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadAll() {
  const promises = imagesToDownload.map(async (img) => {
    const dest = path.join(dir, img.filename);
    try {
      console.log('Fetching', img.filename);
      const res = await fetch(img.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
        signal: AbortSignal.timeout(10000)
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        if (buffer.byteLength > 100) { 
            fs.writeFileSync(dest, Buffer.from(buffer));
            console.log('Saved', dest, buffer.byteLength);
        } else {
            console.error('File too small, possibly corrupt for', img.filename)
        }
      } else {
        console.error('HTTP', res.status, img.filename);
      }
    } catch (e) {
      console.error('Failed', img.filename, e.message || e);
    }
  });

  await Promise.all(promises);

  // Rewrite URLs in src and index.html
  function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    for (const img of imagesToDownload) {
      if (content.includes(img.url)) {
        content = content.split(img.url).join('/image_rich_asset/' + img.filename);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated references in ' + filePath);
    }
  }

  function walk(directory) {
    if (!fs.existsSync(directory)) return;
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const p = path.join(directory, file);
      if (fs.statSync(p).isDirectory() && file !== 'node_modules' && file !== 'dist') walk(p);
      else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('index.html')) replaceInFile(p);
    }
  }

  walk(path.join(process.cwd(), 'src'));
  replaceInFile(path.join(process.cwd(), 'index.html'));
  console.log('All replacements done!');
}

downloadAll();
