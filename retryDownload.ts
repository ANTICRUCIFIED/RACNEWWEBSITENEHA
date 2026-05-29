import fs from 'fs';
import path from 'path';

const remaining = [
  { url: 'https://i.postimg.cc/yxYBn7fb/banner.png', filename: 'home-banner.png' },
  { url: 'https://i.postimg.cc/bwd5gZq9/biocompatibility-testing.png', filename: 'blog-biocompatibility.png' },
  { url: 'https://i.postimg.cc/RCWzCC3c/service1.png', filename: 'service-usfda.png' },
  { url: 'https://i.postimg.cc/vH5kD4GW/service2.png', filename: 'service-eumdr.png' },
  { url: 'https://i.postimg.cc/SNZ86rQC/service3.png', filename: 'service-cdsco.png' },
  { url: 'https://i.postimg.cc/sXtHgrqV/Avisa.png', filename: 'service-anvisa.png' },
  { url: 'https://i.postimg.cc/52hXgKZZ/service4.png', filename: 'service-samd.png' },
  { url: 'https://racforge.com/wp-content/uploads/2025/10/service-banner.png', filename: 'service-banner.png' },
  { url: 'https://racforge.com/wp-content/uploads/2025/10/Expert-Medical-Device-Regulatory-Consulting-for-Global-Market-Access-1.png', filename: 'resources-banner.png' },
  { url: 'https://racforge.com/wp-content/uploads/revslider/slider-3/slider-51.jpg', filename: 'expertise-banner.jpg' },
  { url: 'https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png', filename: 'favicon-192.png' },
  { url: 'https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png', filename: 'apple-touch-icon.png' }
];

const dir = path.join(process.cwd(), 'public', 'image_rich_asset');

async function downloadRemaining() {
  for (const img of remaining) {
    const dest = path.join(dir, img.filename);
    try {
      console.log('Fetching', img.filename);
      // use standard https to bypass fetch complexities
      const res = await fetch(img.url, {
        headers: { 
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'image/avif,image/webp,*/*'
        },
        signal: AbortSignal.timeout(30000)
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
      console.error('Failed', img.filename, e.message);
    }
  }
}

downloadRemaining();
