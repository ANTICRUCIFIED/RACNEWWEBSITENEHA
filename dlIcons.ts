import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesToDownload = [
  { url: "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png", filename: "favicon-192.png" },
  { url: "https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png", filename: "apple-touch-icon.png" }
];

const dir = path.join(process.cwd(), 'public', 'rich-image-assets');

function download(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
  });
}

async function main() {
  for (const img of imagesToDownload) {
    const dest = path.join(dir, img.filename);
    try {
      await download(img.url, dest);
      console.log(`Downloaded ${img.url}`);
    } catch (e) {
      console.error(e);
    }
  }

  let index = fs.readFileSync('index.html', 'utf8');
  index = index.replace('https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-192x192.png', '/rich-image-assets/favicon-192.png');
  index = index.replace('https://racforge.com/wp-content/uploads/2025/10/cropped-rac-forge-Fav-180x180.png', '/rich-image-assets/apple-touch-icon.png');
  fs.writeFileSync('index.html', index);
}
main();
