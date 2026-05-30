import fs from 'fs';
import path from 'path';

// Mapping from current local or wrong urls back to original urls
const replacements = {
  "/rich-image-assets/favicon-192.png": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png",
  "/rich-image-assets/apple-touch-icon.png": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png",
  "https://picsum.photos/seed/racforge-favicon/192/192": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png",
  "https://picsum.photos/seed/racforge-favicon/180/180": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png",
  
  "/rich-image-assets/logo.jpg": "https://anticrucified.github.io/MyWebP_Images/images/logo.webp",
  
  "/rich-image-assets/service-banner.png": "https://anticrucified.github.io/MyWebP_Images/images/service-banner.png",
  "https://picsum.photos/seed/racforge-services/1920/1080": "https://anticrucified.github.io/MyWebP_Images/images/service-banner.png",
  
  "/rich-image-assets/resources-banner.png": "https://anticrucified.github.io/MyWebP_Images/images/resources-banner.png",
  "https://picsum.photos/seed/racforge-resources/1920/1080": "https://anticrucified.github.io/MyWebP_Images/images/resources-banner.png",
  
  "/rich-image-assets/about-bg.jpg": "https://anticrucified.github.io/MyWebP_Images/images/about-bg.webp",
  "/rich-image-assets/founder.jpg": "https://anticrucified.github.io/MyWebP_Images/images/about-founder.webp",
  
  "/rich-image-assets/expertise-banner.jpg": "https://anticrucified.github.io/MyWebP_Images/images/expertise-banner.jpg",
  "https://picsum.photos/seed/racforge-expertise/1920/1080": "https://anticrucified.github.io/MyWebP_Images/images/expertise-banner.jpg",
  
  "/rich-image-assets/home-banner.png": "https://anticrucified.github.io/MyWebP_Images/images/home-banner.webp",
  "/rich-image-assets/strategic-consulting.png": "https://anticrucified.github.io/MyWebP_Images/images/strategic-consulting.webp",
  
  "/rich-image-assets/contact-hero.jpg": "https://anticrucified.github.io/MyWebP_Images/images/contact-hero.webp",
  
  "/rich-image-assets/blog1.jpg": "https://i.postimg.cc/ZRDZf113/Sterilization-Validation-for-Medical-Devices.jpg",
  "/rich-image-assets/blog2.png": "https://i.postimg.cc/bwd5gZq9/biocompatibility-testing.png",
  "/rich-image-assets/blog3.png": "https://anticrucified.github.io/MyWebP_Images/images/blog-eu-mdr.webp",
  "/rich-image-assets/blog4.png": "https://anticrucified.github.io/MyWebP_Images/images/blog-usfda-510k.webp",
  "/rich-image-assets/blog5.png": "https://anticrucified.github.io/MyWebP_Images/images/blog-cdsco-rules.webp",
  
  "/rich-image-assets/service-anvisa.jpg": "https://anticrucified.github.io/MyWebP_Images/images/service-anvisa.webp", // we don't know original, assume picsum
  "/rich-image-assets/service-clinical.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-clinical.webp",
  "/rich-image-assets/service-import.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-import.webp",
  "/rich-image-assets/service-loan.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-loan.webp",
  "/rich-image-assets/service-manufacturing.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-manufacturing.webp",
  "/rich-image-assets/service-test.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-test.webp",
  "/rich-image-assets/service-eumdr.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-eumdr.webp",
  "/rich-image-assets/service-samd.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-samd.webp",
  "/rich-image-assets/service-usfda510k.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-usfda510k.webp",
  "/rich-image-assets/service-usfdadenovo.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-usfdadenovo.webp",
  "/rich-image-assets/service-usfdapma.jpg": "https://anticrucified.github.io/MyWebP_Images/images/page-service-usfdapma.webp",

  "/rich-image-assets/blog-sterilization.jpg": "https://anticrucified.github.io/MyWebP_Images/images/blog-sterilization.webp",
  "/rich-image-assets/blog-biocompatibility.jpg": "https://anticrucified.github.io/MyWebP_Images/images/blog-biocompatibility.webp",
  "/rich-image-assets/blog-eumdr.jpg": "https://picsum.photos/seed/eumdr/800/600",
  "/rich-image-assets/blog-usfda.jpg": "https://picsum.photos/seed/usfda/800/600",
  "/rich-image-assets/blog-cdsco.jpg": "https://picsum.photos/seed/cdsco/800/600",

  "/rich-image-assets/service1.png": "https://anticrucified.github.io/MyWebP_Images/images/service-usfda.webp",
  "/rich-image-assets/service2.png": "https://anticrucified.github.io/MyWebP_Images/images/service-eumdr.webp",
  "/rich-image-assets/service3.png": "https://anticrucified.github.io/MyWebP_Images/images/service-cdsco.webp",
  "/rich-image-assets/Avisa.png": "https://anticrucified.github.io/MyWebP_Images/images/service-anvisa.webp",
  "/rich-image-assets/service4.png": "https://anticrucified.github.io/MyWebP_Images/images/service-samd.webp",
};


function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldStr, newStr] of Object.entries(replacements)) {
    if (content.includes(oldStr)) {
      content = content.replaceAll(oldStr, newStr);
      changed = true;
    }
  }

  // Also catch generic picsums we might have replaced?
  // We'll leave the ones we just restored since they work (except maybe the anvisa one. let's fix it)
  content = content.replaceAll('https://anticrucified.github.io/MyWebP_Images/images/service-anvisa.webp', 'https://anticrucified.github.io/MyWebP_Images/images/page-service-anvisa.webp');

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Restored URLs in ' + filePath);
  }
}

function processDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const p = path.join(dirPath, file);
    if (fs.statSync(p).isDirectory()) {
      processDir(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.html')) {
      replaceInFile(p);
    }
  }
}

processDir(path.join(process.cwd(), 'src'));
replaceInFile(path.join(process.cwd(), 'index.html'));
