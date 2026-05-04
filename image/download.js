const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const pageUrl = "https://www.shirahamaseitaiin.com/";
const outDir = path.resolve("image");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const imageUrls = new Set();

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1440, height: 2000 },
  });

  const page = await browser.newPage();

  page.on("response", async (response) => {
    const url = response.url();
    const type = response.headers()["content-type"] || "";

    if (
      type.startsWith("image/") ||
      /\.(jpg|jpeg|png|webp|gif|svg)(\?|$)/i.test(url)
    ) {
      imageUrls.add(url);
    }
  });

  await page.goto(pageUrl, { waitUntil: "networkidle2", timeout: 60000 });

  // ページ全体をスクロールして遅延読み込み画像を発火
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("Found:", imageUrls.size);

  let count = 1;

  for (const url of imageUrls) {
    try {
      const res = await fetch(url);
      const contentType = res.headers.get("content-type") || "";
      const buffer = Buffer.from(await res.arrayBuffer());

      let ext = ".jpg";
      if (contentType.includes("png")) ext = ".png";
      if (contentType.includes("webp")) ext = ".webp";
      if (contentType.includes("gif")) ext = ".gif";
      if (contentType.includes("svg")) ext = ".svg";

      const fileName = `${String(count).padStart(2, "0")}${ext}`;
      const filePath = path.join(outDir, fileName);

      fs.writeFileSync(filePath, buffer);
      console.log("Saved:", fileName, url);

      count++;
    } catch (error) {
      console.log("Error:", url, error.message);
    }
  }

  await browser.close();
})();