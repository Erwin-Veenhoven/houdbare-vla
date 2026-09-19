/* ============================================================
   HET DEELKAARTJE
   ------------------------------------------------------------
   Gereedschap om een uitslag als plaatje te delen: 1080 bij 1350,
   met het pak erop en het adres eronder. Elke pagina maakt hier
   zijn eigen ontwerp mee, want een uitslag, een quizvla en een
   feitje willen alle drie iets anders laten zien.

   Waarom een plaatje en geen plaatje met een link erbij: op papier
   mag je `files`, `text` en `url` samen aan navigator.share geven,
   maar in Safari op iOS werkt het delen van een bestand alleen
   betrouwbaar als `files` het enige is dat erin zit. Daarom staat
   het adres op de kaart zelf, en kiest de bezoeker per keer of hij
   het plaatje of de link deelt.

   Gebruikt vla.js: pack(), pakTekst() en slug().
   ============================================================ */

const KAART_B = 1080, KAART_H = 1350;
const KAART_KLEUR = { ok: '#2e9e5b', warn: '#e08a1e', bad: '#d94a3d' };
const KAART_INKT = '#2b2119', KAART_GRIJS = '#8b7a66', KAART_LICHT = '#b3a38e';

/* Een canvas met de achtergrond er al op. */
function kaartCanvas(){
  const c = document.createElement('canvas');
  c.width = KAART_B; c.height = KAART_H;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, KAART_H);
  g.addColorStop(0, '#ffeccd'); g.addColorStop(.5, '#fff7e9'); g.addColorStop(1, '#fff7e9');
  x.fillStyle = g; x.fillRect(0, 0, KAART_B, KAART_H);
  x.textAlign = 'center';
  return { c, x };
}

/* De letters moeten binnen zijn voordat er getekend wordt, anders valt het
   canvas stilletjes terug op Arial. */
function lettersKlaar(){
  if (!document.fonts) return Promise.resolve();
  return Promise.all(['600 74px Fredoka', '600 32px Fredoka', '700 25px Inter', '400 30px Inter']
    .map(f => document.fonts.load(f).catch(() => {})));
}

/* Het pak komt als SVG binnen, maar zonder de etiketteksten: een SVG die je
   als <img> inlaadt mag geen webfont ophalen, en dan zou het etiket in een
   systeemletter komen te staan. Die regels zetten we zelf, met de maten die
   pakTekst() teruggeeft.

   Decoderen duurt even, dus dat gebeurt ruim voordat er getekend wordt:
   navigator.share wil in dezelfde tik als de klik aangeroepen worden en daar
   past geen wachten tussen. */
let _pakBeeld = null, _pakBeeldVan = '';
function laadPakBeeld(v){
  const sleutel = slug(v) + '|' + v.merk;   /* de quiz zet jouw naam op het etiket */
  if (_pakBeeld && _pakBeeldVan === sleutel) return Promise.resolve(_pakBeeld);
  return new Promise((klaar, mis) => {
    const img = new Image();
    img.onload = () => { _pakBeeld = img; _pakBeeldVan = sleutel; klaar(img); };
    img.onerror = mis;
    img.src = 'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(pack(v, { zonderTekst: true }));
  });
}

/* Met de ruimte die canvas tussen letters zet loopt gecentreerde tekst een
   halve spatie naar rechts. Die halen we er weer af. */
function zetTekst(x, tekst, mx, y, sp){
  x.letterSpacing = sp ? sp.toFixed(2) + 'px' : '0px';
  x.fillText(tekst, mx - (sp || 0) / 2, y);
  x.letterSpacing = '0px';
}

/* Een tekst die niet past over meerdere regels verdelen. */
function kaartRegels(x, tekst, max){
  const woorden = String(tekst).split(' '), uit = [];
  let r = '';
  for (const w of woorden){
    const poging = r ? r + ' ' + w : w;
    if (x.measureText(poging).width > max && r){ uit.push(r); r = w; } else r = poging;
  }
  if (r) uit.push(r);
  return uit;
}

/* Kies het grootste lettertype waarop de tekst nog binnen `maxRegels` past. */
function pasTekst(x, tekst, breedte, maten, maxRegels, letter){
  for (const fs of maten){
    x.font = `${letter.dik} ${fs}px ${letter.fam}, sans-serif`;
    const r = kaartRegels(x, tekst, breedte);
    if (r.length <= maxRegels) return { fs, regels: r };
  }
  const fs = maten[maten.length - 1];
  x.font = `${letter.dik} ${fs}px ${letter.fam}, sans-serif`;
  return { fs, regels: kaartRegels(x, tekst, breedte) };
}

/* Het pak, met zijn etiket, op het midden van de kaart.
   `mid` is het midden van het pak, `hoogte` de hoogte in pixels, en met
   `kantel` ligt hij op zijn kant zoals op de site bij een afgekeurde vla. */
function tekenPak(x, v, mid, hoogte, kantel){
  const pw = hoogte * (120 / 152), schaal = hoogte / 152;
  x.save();
  x.translate(KAART_B / 2, mid);
  if (kantel) x.rotate(Math.PI / 2);
  x.shadowColor = 'rgba(43,33,25,.24)'; x.shadowBlur = 44; x.shadowOffsetY = 20;
  x.drawImage(_pakBeeld, -pw / 2, -hoogte / 2, pw, hoogte);
  x.shadowColor = 'transparent';
  for (const r of pakTekst(v)){
    x.fillStyle = r.kleur;
    x.font = `${r.dik} ${(r.fs * schaal).toFixed(1)}px ${r.fam}, sans-serif`;
    zetTekst(x, r.t, 0, -hoogte / 2 + r.y * schaal, r.sp * schaal);
  }
  x.restore();
}

/* Merk en soort, klein en in kapitaal. */
function tekenMerkregel(x, v, y){
  x.fillStyle = KAART_GRIJS;
  x.font = '700 25px Inter, sans-serif';
  zetTekst(x, v.merk.toUpperCase() + '   ·   ' + v.soort.toUpperCase(), KAART_B / 2, y, 2);
}

/* Het adres, helemaal onderaan. Dit is het enige spoor terug, want een plaatje
   kan de link niet meenemen. */
function tekenAdres(x){
  x.fillStyle = KAART_LICHT;
  x.font = '700 23px Inter, sans-serif';
  zetTekst(x, 'HOUDBAREVLA.NL', KAART_B / 2, 1306, 7);
}

/* Een pilletje zoals het etiket "echt waar" bij de feitjes. */
function tekenPil(x, tekst, y){
  x.font = '700 22px Inter, sans-serif';
  const sp = 5, b = x.measureText(tekst).width + sp * tekst.length + 46;
  x.fillStyle = '#f2a63b';
  x.beginPath(); x.roundRect((KAART_B - b) / 2, y - 26, b, 40, 99); x.fill();
  x.fillStyle = KAART_INKT;
  zetTekst(x, tekst, KAART_B / 2, y, sp);
}

/* toDataURL is synchroon, toBlob niet. Dat scheelt hier: zo blijft de klik
   waarmee je op delen drukte geldig, en accepteert iOS het deelvenster. */
function kaartBestand(c, naam){
  const bytes = atob(c.toDataURL('image/png').split(',')[1]);
  const arr = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
  return new File([arr], naam + '.png', { type: 'image/png' });
}

/* Delen als het kan, anders downloaden. Alleen `files` en verder niets: zet je
   er een titel of een link bij, dan laat iOS het bestand soms vallen. */
async function deelKaartBestand(bestand, melding){
  if (navigator.canShare && navigator.canShare({ files: [bestand] })){
    try { await navigator.share({ files: [bestand] }); return 'gedeeld'; }
    catch (e) { if (e && e.name === 'AbortError') return 'afgebroken'; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(bestand);
  a.download = bestand.name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  if (melding) melding();
  return 'gedownload';
}
