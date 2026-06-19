import puppeteer from "puppeteer";

const url = process.argv[2] || "http://localhost:3099/mp4";
const out = process.argv[3] || "/Users/taejae-agent/workspace/taedi-masterplan/archive/pdf/masterplan-v0.11.4.pdf";

const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1200));
await page.pdf({
  path: out,
  width: "297mm",
  height: "420mm",
  printBackground: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
});
await browser.close();
console.log("PDF written:", out);
