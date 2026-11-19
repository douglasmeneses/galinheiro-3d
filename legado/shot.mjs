import { chromium } from '/home/douglas.andrade/.nvm/versions/node/v24.18.0/lib/node_modules/@playwright/cli/node_modules/playwright/index.mjs';
const b = await chromium.launch({executablePath:process.env.HOME+'/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
const p = await b.newPage({viewport:{width:1400,height:900}});
const errs=[]; p.on('console',m=>{if(m.type()==='error')errs.push(m.text())}); p.on('pageerror',e=>errs.push(e.message));
for (const v of ['persp','front','side','top']) {
  await p.goto('http://localhost:8765/?view='+v); await p.waitForFunction(()=>window.__ready,{timeout:20000}); await p.waitForTimeout(1500);
  await p.screenshot({path:`shots/${v}.png`});
}
await p.click('[data-view=persp]'); await p.click('#tUnder'); await p.click('#tLabels'); await p.waitForTimeout(800); await p.screenshot({path:'shots/under.png'});
await p.click('#tUnder'); await p.click('#tFlood'); await p.waitForTimeout(800); await p.screenshot({path:'shots/flood.png'});
console.log('errors:', JSON.stringify(errs)); await b.close();
