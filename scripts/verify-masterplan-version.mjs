#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'masterplan-current.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const versionSourceRel = manifest.versionSource || 'masterplan-version.ts';
const versionSourcePath = path.join(root, versionSourceRel);
const versionSource = fs.readFileSync(versionSourcePath, 'utf8');

function readConst(name) {
  const match = versionSource.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`));
  if (!match) throw new Error(`Missing ${name} in ${versionSourceRel}`);
  return match[1];
}

const current = readConst('MASTERPLAN_VERSION');
const route = readConst('MASTERPLAN_ROUTE');
const pdfDir = readConst('MASTERPLAN_PDF_DIR');
const digits = current.replace(/^v/, '').split('.').map((part, i) => i === 0 ? part : part.padStart(2, '0')).join('').replace(/^0/, '0');
const compact = `v${digits}`;
const expectedComponent = `app/components/masterplan-${compact}`;
const expectedRoute = route.replace(/^\//, 'app/');
const expectedPdf = `${pdfDir}/masterplan-${current}.pdf`;
const expectedScript = manifest.makeScript || 'make_masterplan_pdf.js';

const failures = [];
function mustEqual(label, actual, expected) {
  if (actual !== expected) failures.push(`${label}: manifest=${actual} expected=${expected}`);
}
function mustExist(label, rel) {
  if (!fs.existsSync(path.join(root, rel))) failures.push(`${label} missing: ${rel}`);
}

mustEqual('route', manifest.route, expectedRoute);
mustEqual('pdfDir', manifest.pdfDir, pdfDir);
mustExist('shared version source', versionSourceRel);
mustExist('component', expectedComponent);
mustExist('route page', path.join(expectedRoute, 'page.tsx'));
mustExist('pdf', expectedPdf);
mustExist('make script', expectedScript);

const versionFile = path.join(root, expectedComponent, 'version.ts');
if (fs.existsSync(versionFile)) {
  const text = fs.readFileSync(versionFile, 'utf8');
  if (!text.includes('MASTERPLAN_VERSION as VERSION')) failures.push('component version.ts does not re-export shared MASTERPLAN_VERSION');
}
const routeFile = path.join(root, expectedRoute, 'page.tsx');
if (fs.existsSync(routeFile)) {
  const text = fs.readFileSync(routeFile, 'utf8');
  if (!text.includes(`masterplan-${compact}`)) failures.push(`route page does not import masterplan-${compact}`);
}
const makeFile = path.join(root, expectedScript);
if (fs.existsSync(makeFile)) {
  const text = fs.readFileSync(makeFile, 'utf8');
  if (!text.includes('masterplan-version.ts')) failures.push('make script does not read shared version source');
  if (text.includes(`masterplan-${current}.pdf`)) failures.push('make script hardcodes current PDF filename instead of deriving from shared version');
  if (text.includes(`http://localhost:3099/mp/v`)) failures.push('make script targets versioned route instead of latest /mp');
}

if (failures.length) {
  console.error('Masterplan version guard failed:');
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}
console.log(`Masterplan current version OK from shared constant: ${current}`);
