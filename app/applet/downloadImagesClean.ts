import fs from 'fs';
import path from 'path';

const imagesToDownload = [
  // index.html / SEO
  { url: "https://picsum.photos/seed/racforge-favicon/192/192", filename: "favicon-192.png" },
  { url: "https://picsum.photos/seed/racforge-favicon/180/180", filename: "apple-touch-icon.png" },
  { url: "https://picsum.photos/seed/racforge-logo/400/400", filename: "logo.jpg" },

  // Banners
  { url: "https://picsum.photos/seed/racforge-services/1920/1080", filename: "service-banner.png" },
  { url: "https://picsum.photos/seed/racforge-resources/1920/1080", filename: "resources-banner.png" },
  { url: "https://picsum.photos/seed/racforge-expertise/1920/1080", filename: "expertise-banner.jpg" },
  { url: "https://picsum.photos/seed/homebanner/1920/1080", filename: "home-banner.png" },
  { url: "https://picsum.photos/seed/aboutbg/1920/1080", filename: "about-bg.jpg" },
  { url: "https://picsum.photos/seed/founder/800/800", filename: "founder.jpg" },
  { url: "https://picsum.photos/seed/contacthero/1920/1080", filename: "contact-hero.jpg" },
  { url: "https://picsum.photos/seed/strategic/1200/800", filename: "strategic-consulting.png" },

  // Blog Images
  { url: "https://picsum.photos/seed/blog1/800/600", filename: "blog1.jpg" },
  { url: "https://picsum.photos/seed/blog2/800/600", filename: "blog2.png" },
  { url: "https://picsum.photos/seed/blog3/800/600", filename: "blog3.png" },
  { url: "https://picsum.photos/seed/blog4/800/600", filename: "blog4.png" },
  { url: "https://picsum.photos/seed/blog5/800/600", filename: "blog5.png" },
  
  // Extra Blog Images from constants.ts
  { url: "https://anticrucified.github.io/MyWebP_Images/images/blog-sterilization.webp", filename: "blog-sterilization.jpg" },
  { url: "https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp", filename: "blog-biocompatibility.jpg" },
  { url: "https://picsum.photos/seed/eumdr/800/600", filename: "blog-eumdr.jpg" },
  { url: "https://picsum.photos/seed/usfda/800/600", filename: "blog-usfda.jpg" },
  { url: "https://picsum.photos/seed/cdsco/800/600", filename: "blog-cdsco.jpg" },

  // Services
  { url: "https://picsum.photos/seed/service1/800/600", filename: "service1.png" },
  { url: "https://picsum.photos/seed/service2/800/600", filename: "service2.png" },
  { url: "https://picsum.photos/seed/service3/800/600", filename: "service3.png" },
  { url: "https://picsum.photos/seed/Avisa/800/600", filename: "Avisa.png" },
  { url: "https://picsum.photos/seed/service4/800/600", filename: "service4.png" },

  // Individual Service Pages
  { url: "https://picsum.photos/seed/service-anvisa/1920/1080", filename: "service-anvisa.jpg" },
  { url: "https://picsum.photos/seed/service-clinical/1920/1080", filename: "service-clinical.jpg" },
  { url: "https://picsum.photos/seed/service-import/1920/1080", filename: "service-import.jpg" },
  { url: "https://picsum.photos/seed/service-loan/1920/1080", filename: "service-loan.jpg" },
  { url: "https://picsum.photos/seed/service-manufacturing/1920/1080", filename: "service-manufacturing.jpg" },
  { url: "https://picsum.photos/seed/service-test/1920/1080", filename: "service-test.jpg" },
  { url: "https://picsum.photos/seed/service-eumdr2/1920/1080", filename: "service-eumdr.jpg" },
  { url: "https://picsum.photos/seed/service-samd/1920/1080", filename: "service-samd.jpg" },
  { url: "https://picsum.photos/seed/service-usfda510k/1920/1080", filename: "service-usfda510k.jpg" },
  { url: "https://picsum.photos/seed/service-usfdadenovo/1920/1080", filename: "service-usfdadenovo.jpg" },
  { url: "https://picsum.photos/seed/service-usfdapma/1920/1080", filename: "service-usfdapma.jpg" },
];

const dir = path.join(process.cwd(), 'public', 'rich-image-assets');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function downloadAll() {
  for (const img of imagesToDownload) {
    const dest = path.join(dir, img.filename);
    try {
      console.log('Fetching', img.url);
      const res = await fetch(img.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log('Saved', dest, 'Size:', buffer.byteLength);
    } catch (e) {
      console.error('Failed', img.url, e);
    }
  }

  // Now replace everything in src/ and index.html
  function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Explicit manual mappings
    const mappings = {
      "https://picsum.photos/seed/racforge-favicon/192/192": "/rich-image-assets/favicon-192.png",
      "https://picsum.photos/seed/racforge-favicon/180/180": "/rich-image-assets/apple-touch-icon.png",
      "https://anticrucified.github.io/MyWebP_Images/images/logo.webp": "/rich-image-assets/logo.jpg",
      "https://anticrucified.github.io/MyWebP_Images/images/home-banner.webp": "/rich-image-assets/home-banner.png",
      "https://anticrucified.github.io/MyWebP_Images/images/blog-sterilization.webp": "/rich-image-assets/blog-sterilization.jpg",
      "https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp": "/rich-image-assets/blog-biocompatibility.jpg",
      "https://picsum.photos/seed/eumdr/800/600": "/rich-image-assets/blog-eumdr.jpg",
      "https://picsum.photos/seed/usfda/800/600": "/rich-image-assets/blog-usfda.jpg",
      "https://picsum.photos/seed/cdsco/800/600": "/rich-image-assets/blog-cdsco.jpg",
      "https://anticrucified.github.io/MyWebP_Images/images/service-usfda.webp": "/rich-image-assets/service1.png",
      "https://anticrucified.github.io/MyWebP_Images/images/service-eumdr.webp": "/rich-image-assets/service2.png",
      "https://anticrucified.github.io/MyWebP_Images/images/service-cdsco.webp": "/rich-image-assets/service3.png",
      "https://anticrucified.github.io/MyWebP_Images/images/service-anvisa.webp": "/rich-image-assets/Avisa.png",
      "https://anticrucified.github.io/MyWebP_Images/images/service-samd.webp": "/rich-image-assets/service4.png",
      "https://picsum.photos/seed/racforge-expertise/1920/1080": "/rich-image-assets/expertise-banner.jpg",
      "https://picsum.photos/seed/racforge-resources/1920/1080": "/rich-image-assets/resources-banner.png",
      "https://picsum.photos/seed/racforge-services/1920/1080": "/rich-image-assets/service-banner.png"
    };

    for (const [oldUrl, newUrl] of Object.entries(mappings)) {
      if (content.includes(oldUrl)) {
        content = content.split(oldUrl).join(newUrl);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }

  function walk(directory) {
    if (!fs.existsSync(directory)) return;
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const p = path.join(directory, file);
      if (fs.statSync(p).isDirectory()) {
        walk(p);
      } else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('index.html')) {
        replaceInFile(p);
      }
    }
  }

  walk(path.join(process.cwd(), 'src'));
  replaceInFile(path.join(process.cwd(), 'index.html'));
  console.log('All replacements done!');
}

downloadAll();
