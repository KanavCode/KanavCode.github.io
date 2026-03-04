// OG Image Generator — run with: node scripts/generate-og.js
// Generates public/og-image.png (1200×630) for social sharing cards
// Re-run this script whenever you want to update the OG image design

const { createCanvas } = require("@napi-rs/canvas");
const fs = require("fs");
const path = require("path");

const WIDTH = 1200;
const HEIGHT = 630;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

// ── Background ──
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// ── Subtle grid lines (very faint) ──
ctx.strokeStyle = "rgba(26, 26, 26, 0.8)";
ctx.lineWidth = 1;
for (let x = 0; x <= WIDTH; x += 60) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, HEIGHT);
  ctx.stroke();
}
for (let y = 0; y <= HEIGHT; y += 60) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(WIDTH, y);
  ctx.stroke();
}

// ── Amber accent line (left edge) ──
ctx.fillStyle = "#FFA500";
ctx.fillRect(0, 0, 4, HEIGHT);

// ── Top label: > Hello, World_ ──
ctx.font = "bold 22px monospace";
ctx.fillStyle = "#FFA500";
ctx.fillText("> Hello, World_", 80, 100);

// ── Name: Kanav ──
// EDIT: Change the name here if needed
ctx.font = "bold 120px monospace";
ctx.fillStyle = "#E5E5E5";
ctx.fillText("Kanav", 80, 270);

// ── Amber underscore cursor ──
ctx.fillStyle = "#FFA500";
ctx.fillRect(80, 285, 8, 12);

// ── Separator line ──
ctx.strokeStyle = "#1A1A1A";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(80, 320);
ctx.lineTo(WIDTH - 80, 320);
ctx.stroke();

// ── Tagline ──
// EDIT: Update this tagline to match your Hero tagline
const tagline = "Software Developer · CSE Student · Building things that work";
ctx.font = "26px monospace";
ctx.fillStyle = "#666666";
ctx.fillText(tagline, 80, 380);

// ── Tech stack tags ──
// EDIT: Update these tags to match your stack
const tags = ["React", "TypeScript", "Laravel", "Next.js", "Python"];
let tagX = 80;
const tagY = 450;
ctx.font = "18px monospace";

tags.forEach((tag) => {
  const metrics = ctx.measureText(tag);
  const tagW = metrics.width + 24;
  const tagH = 36;

  // tag border
  ctx.strokeStyle = "#1A1A1A";
  ctx.lineWidth = 1;
  ctx.strokeRect(tagX, tagY - 24, tagW, tagH);

  // tag text
  ctx.fillStyle = "#666666";
  ctx.fillText(tag, tagX + 12, tagY - 2);

  tagX += tagW + 12;
});

// ── Domain watermark (bottom right) ──
// EDIT: Update this domain if it changes
ctx.font = "20px monospace";
ctx.fillStyle = "#333333";
const domain = "kanavmodi.me";
const domainMetrics = ctx.measureText(domain);
ctx.fillText(domain, WIDTH - domainMetrics.width - 80, HEIGHT - 50);

// ── Bottom amber line ──
ctx.fillStyle = "#FFA500";
ctx.fillRect(0, HEIGHT - 4, WIDTH, 4);

// ── Write file ──
const outputPath = path.join(__dirname, "..", "public", "og-image.png");
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync(outputPath, buffer);

console.log(`✓ OG image generated: ${outputPath}`);
console.log(`  Size: ${(buffer.length / 1024).toFixed(1)} KB`);
console.log(`  Dimensions: ${WIDTH}×${HEIGHT}px`);
