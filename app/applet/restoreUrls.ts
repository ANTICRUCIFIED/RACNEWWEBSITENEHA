import fs from 'fs';
import path from 'path';

// Mapping from current local or wrong urls back to original urls
const replacements = {
  "/rich-image-assets/favicon-192.png": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png",
  "/rich-image-assets/apple-touch-icon.png": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png",
  "https://picsum.photos/seed/racforge-favicon/192/192": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png",
  "https://picsum.photos/seed/racforge-favicon/180/180": "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png",
  
  "/rich-image-assets/logo.jpg": "https://i.ibb.co/WNtHVDps/Whats-App-Image-2025-08-31-at-21-09-34-54925d9d.jpg",
  
  "/rich-image-assets/service-banner.png": "https://racforge.com/wp-content/uploads/2025/10/service-banner.png",
  "https://picsum.photos/seed/racforge-services/1920/1080": "https://racforge.com/wp-content/uploads/2025/10/service-banner.png",
  
  "/rich-image-assets/resources-banner.png": "https://racforge.com/wp-content/uploads/2025/10/Expert-Medical-Device-Regulatory-Consulting-for-Global-Market-Access-1.png",
  "https://picsum.photos/seed/racforge-resources/1920/1080": "https://racforge.com/wp-content/uploads/2025/10/Expert-Medical-Device-Regulatory-Consulting-for-Global-Market-Access-1.png",
  
  "/rich-image-assets/about-bg.jpg": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
  "/rich-image-assets/founder.jpg": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600",
  
  "/rich-image-assets/expertise-banner.jpg": "https://racforge.com/wp-content/uploads/revslider/slider-3/slider-51.jpg",
  "https://picsum.photos/seed/racforge-expertise/1920/1080": "https://racforge.com/wp-content/uploads/revslider/slider-3/slider-51.jpg",
  
  "/rich-image-assets/home-banner.png": "https://i.postimg.cc/yxYBn7fb/banner.png",
  "/rich-image-assets/strategic-consulting.png": "https://i.postimg.cc/02kdGh9z/image1.png",
  
  "/rich-image-assets/contact-hero.jpg": "https://picsum.photos/seed/contact-hero/1920/1080",
  
  "/rich-image-assets/blog1.jpg": "https://i.postimg.cc/ZRDZf113/Sterilization-Validation-for-Medical-Devices.jpg",
  "/rich-image-assets/blog2.png": "https://i.postimg.cc/bwd5gZq9/biocompatibility-testing.png",
  "/rich-image-assets/blog3.png": "https://i.postimg.cc/VsD4hzGx/mastering-eu-mdr1.png",
  "/rich-image-assets/blog4.png": "https://i.postimg.cc/Hs0WmPMN/Navigating-USFDAs-510k-Submission-Process.png",
  "/rich-image-assets/blog5.png": "https://i.postimg.cc/NG9xfZQL/understanding-cdsco-rules.png",
  
  "/rich-image-assets/service-anvisa.jpg": "https://ibm.co/logo", // we don't know original, assume picsum
  "/rich-image-assets/service-clinical.jpg": "https://picsum.photos/seed/clinical/1920/1080",
  "/rich-image-assets/service-import.jpg": "https://picsum.photos/seed/import/1920/1080",
  "/rich-image-assets/service-loan.jpg": "https://picsum.photos/seed/loan/1920/1080",
  "/rich-image-assets/service-manufacturing.jpg": "https://picsum.photos/seed/manufacturing/1920/1080",
  "/rich-image-assets/service-test.jpg": "https://picsum.photos/seed/test/1920/1080",
  "/rich-image-assets/service-eumdr.jpg": "https://picsum.photos/seed/eumdr/1920/1080",
  "/rich-image-assets/service-samd.jpg": "https://picsum.photos/seed/samd/1920/1080",
  "/rich-image-assets/service-usfda510k.jpg": "https://picsum.photos/seed/usfda510k/1920/1080",
  "/rich-image-assets/service-usfdadenovo.jpg": "https://picsum.photos/seed/usfdadenovo/1920/1080",
  "/rich-image-assets/service-usfdapma.jpg": "https://picsum.photos/seed/usfdapma/1920/1080",

  "/rich-image-assets/blog-sterilization.jpg": "https://picsum.photos/seed/sterilization/800/600",
  "/rich-image-assets/blog-biocompatibility.jpg": "https://picsum.photos/seed/biocompatibility/800/600",
  "/rich-image-assets/blog-eumdr.jpg": "https://picsum.photos/seed/eumdr/800/600",
  "/rich-image-assets/blog-usfda.jpg": "https://picsum.photos/seed/usfda/800/600",
  "/rich-image-assets/blog-cdsco.jpg": "https://picsum.photos/seed/cdsco/800/600",

  "/rich-image-assets/service1.png": "https://i.postimg.cc/RCWzCC3c/service1.png",
  "/rich-image-assets/service2.png": "https://i.postimg.cc/vH5kD4GW/service2.png",
  "/rich-image-assets/service3.png": "https://i.postimg.cc/SNZ86rQC/service3.png",
  "/rich-image-assets/Avisa.png": "https://i.postimg.cc/sXtHgrqV/Avisa.png",
  "/rich-image-assets/service4.png": "https://i.postimg.cc/52hXgKZZ/service4.png",
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
  content = content.replaceAll('https://ibm.co/logo', 'https://picsum.photos/seed/anvisa/1920/1080');

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
