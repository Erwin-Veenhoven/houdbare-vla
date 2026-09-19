/* =====================================================================
   Gedeeld tussen index.html en quiz.html: de vlalijst en de paktekening.
   Eén vla toevoegen is één regel in VLAS, en hij verschijnt overal.
   ===================================================================== */

const VLAS = [
  /* --- Campina --- */
  {merk:'Campina', soort:'Vanillevla',        groep:'Campina',  c1:'#ffe9a8', c2:'#efc043'},
  {merk:'Campina', soort:'Chocoladevla',      groep:'Campina',  c1:'#8f5c34', c2:'#4b2b17'},
  {merk:'Campina', soort:'Goudvla',           groep:'Campina',  c1:'#ffd583', c2:'#dd8f0e'},
  {merk:'Campina', soort:'Hopjesvla',         groep:'Campina',  c1:'#d9a86c', c2:'#8a5c25'},
  {merk:'Campina', soort:'Dubbelvla',         groep:'Campina',  c1:'#efc043', c2:'#5a3520', split:true},
  {merk:'Campina', soort:'Roomvla',           groep:'Campina',  c1:'#fff6e2', c2:'#f0dcb4'},
  {merk:'Campina', soort:'Aardbeienvla',      groep:'Campina',  c1:'#ffb3c0', c2:'#e0556f'},
  {merk:'Campina', soort:'Bananenvla',        groep:'Campina',  c1:'#fdefa0', c2:'#eccd35'},
  {merk:'Campina', soort:'Karamelvla',        groep:'Campina',  c1:'#f0bd77', c2:'#c1732a'},
  {merk:'Campina', soort:'Mokkavla',          groep:'Campina',  c1:'#a07a57', c2:'#5b3d28'},
  {merk:'Campina', soort:'Slagroomvla',       groep:'Campina',  c1:'#fff9ef', c2:'#e9d6b5'},
  {merk:'Campina', soort:'Toffeevla',         groep:'Campina',  c1:'#e8b97f', c2:'#9a5719'},
  {merk:'Campina', soort:'Griesmeelvla',      groep:'Campina',  c1:'#f8f1e3', c2:'#d6c6a0'},
  {merk:'Campina', soort:'Advocaatvla',       groep:'Campina',  c1:'#ffe483', c2:'#dda512'},
  {merk:'Campina', soort:'Stroopwafelvla',    groep:'Campina',  c1:'#e0a25c', c2:'#874a14', split:true},

  /* --- Optimel --- */
  {merk:'Optimel', soort:'Vanille (mager)',   groep:'Optimel',  c1:'#e6f2f7', c2:'#9fd0e4'},
  {merk:'Optimel', soort:'Chocolade (mager)', groep:'Optimel',  c1:'#cbd9de', c2:'#7c6250'},
  {merk:'Optimel', soort:'Aardbei (mager)',   groep:'Optimel',  c1:'#f7dfe4', c2:'#d98fa3'},
  {merk:'Optimel', soort:'Karamel (mager)',   groep:'Optimel',  c1:'#ead9c4', c2:'#b98c52'},

  /* --- Huismerk --- */
  {merk:'1 de Beste', soort:'Chocoladevla',   groep:'Huismerk', c1:'#7e5334', c2:'#c8102e'},
  {merk:'Albert Heijn', soort:'Vanillevla',   groep:'Huismerk', c1:'#ffeeb0', c2:'#2f6fc4'},
  {merk:'Albert Heijn', soort:'Chocoladevla', groep:'Huismerk', c1:'#7b5335', c2:'#1f4d8f'},
  {merk:'Albert Heijn', soort:'Roomvla',      groep:'Huismerk', c1:'#fff6e6', c2:'#2f6fc4'},
  {merk:'De Zaanse Hoeve', soort:'Vanillevla',groep:'Huismerk', c1:'#ffeeb0', c2:'#1a7a3c'},
  {merk:'Ekoplaza', soort:'Volle vla',        groep:'Huismerk', c1:'#f3ecd4', c2:'#6f9c3f'},
  {merk:"G'woon", soort:'Vanillevla',         groep:'Huismerk', c1:'#ffeeb0', c2:'#e8a33d'},
  {merk:"G'woon", soort:'Chocoladevla',       groep:'Huismerk', c1:'#7b5335', c2:'#c07a22'},
  {merk:'Jumbo',   soort:'Vanillevla',        groep:'Huismerk', c1:'#ffe9a0', c2:'#d9b428'},
  {merk:'Jumbo',   soort:'Chocoladevla',      groep:'Huismerk', c1:'#7b5335', c2:'#d9b428'},
  {merk:'Melkan',  soort:'Vanillevla',        groep:'Huismerk', c1:'#fff0bd', c2:'#e2b83c'},
  {merk:'Milbona', soort:'Vanillevla',        groep:'Huismerk', c1:'#ffeeb0', c2:'#0a4a9e'},
  {merk:'Milbona', soort:'Chocoladevla',      groep:'Huismerk', c1:'#8b5b38', c2:'#3a2214'},
  {merk:'Milsani', soort:'Vanillevla',        groep:'Huismerk', c1:'#ffeab4', c2:'#0d4c9b'},
  {merk:'Plus',    soort:'Vanillevla',        groep:'Huismerk', c1:'#ffeeb0', c2:'#1f8a4c'},

  /* --- Merken --- */
  {merk:'Melkunie', soort:'Boerenvla',        groep:'Merken',   c1:'#fff2cf', c2:'#c99a2e'},
  {merk:'Melkunie', soort:'Vanillevla',       groep:'Merken',   c1:'#ffeeb0', c2:'#d3a52b'},
  {merk:'Noordertrots', soort:'Vanillevla',   groep:'Merken',   c1:'#f6ecd6', c2:'#2a6b4f'},
  {merk:'Weerribben', soort:'Volle vla',      groep:'Merken',   c1:'#f5efdc', c2:'#7d8f4a'},
  {merk:'Zuivelhoeve', soort:'Roomvla',       groep:'Merken',   c1:'#fff6e6', c2:'#8a6b3f'},

  /* --- Plantaardig --- */
  {merk:'Alpro',   soort:'Vanille (soja)',    groep:'Plantaardig', c1:'#f4ecd8', c2:'#7aa93c'},
  {merk:'Alpro',   soort:'Chocolade (soja)',  groep:'Plantaardig', c1:'#cdbfa8', c2:'#5a7a2c'},
  {merk:'My Vay',  soort:'Vanillevla',        groep:'Plantaardig', c1:'#f4ecd8', c2:'#6ba43c'},
  {merk:'Provamel',soort:'Vanille (soja)',    groep:'Plantaardig', c1:'#f2ead6', c2:'#3f7d4a'},

  /* --- Bijzonder --- */
  {merk:'Zelfgemaakt', soort:'Vla van oma',   groep:'Bijzonder',c1:'#ffeec2', c2:'#e0a94e', alOpen:true, zelf:{vraag:'Wanneer heeft oma deze vla gemaakt?', hint:'Zelfgemaakte vla heeft geen etiket, dus rekenen we vanaf de pan. Wij houden drie dagen aan.', dagen:3}},
  {merk:'Vlaflip', soort:'Vla met limonade',  groep:'Bijzonder',c1:'#ffd85e', c2:'#e8467f', split:true, alOpen:true, zelf:{vraag:'Wanneer heb je de vlaflip gemaakt?', hint:'Een vlaflip erft de houdbaarheid van de vla eronder, maar niet de datum. Wij rekenen één dag.', dagen:1}},
  {merk:'Met vel', soort:'Vla met een vel',   groep:'Bijzonder',c1:'#ffeec2', c2:'#c99a4e', alOpen:true, zelf:{vraag:'Wanneer heb je dit pak opengemaakt?', hint:'Dat vel verraadt dat hij al even staat. Na openen rekenen we drie dagen.', dagen:3}},
  {merk:'Eigen pan', soort:'Restjes vla',     groep:'Bijzonder',c1:'#f7e3b8', c2:'#c08a3a', alOpen:true, zelf:{vraag:'Wanneer heb je gekookt?', hint:'Restjes in een pan houden het korter vol dan je hoopt. Wij rekenen twee dagen.', dagen:2}},
  {merk:'Custard', soort:'Engelse vla',       groep:'Bijzonder',c1:'#ffe9b0', c2:'#c0392b'},
  {merk:'Kantine', soort:'Vla van het werk',  groep:'Bijzonder',c1:'#efe6d2', c2:'#9a8f78', zelf:{vraag:'Wanneer stond hij er al?', hint:'Niemand weet wie deze vla heeft neergezet. Wij rekenen vanaf het moment dat jij hem zag.', dagen:2}},
  {merk:'Camping', soort:'Vla uit de koelbox',groep:'Bijzonder',c1:'#fdf0cf', c2:'#3f8f5f'},
  {merk:'Ziekenhuis', soort:'Vla op een dienblad',groep:'Bijzonder',c1:'#eef2f4', c2:'#9db6c2', zelf:{vraag:'Wanneer kreeg je dit dienblad?', hint:'Ziekenhuisvla komt zonder etiket maar met een strak schema. Wij rekenen één dag.', dagen:1}},
  {merk:'Griesmeel', soort:'Pudding (geen vla)',groep:'Bijzonder',c1:'#f6f0e2',c2:'#c9b98f', nietVla:true},
  {merk:'Yoghurt', soort:'Echt geen vla',     groep:'Bijzonder',c1:'#fbfbf7', c2:'#bcc6cc', nietVla:true},
  {merk:'Kwark',   soort:'Zeker geen vla',    groep:'Bijzonder',c1:'#fbfbf7', c2:'#cfd6da', nietVla:true},
  {merk:'Chocomel',soort:'Geen vla (drinken)',groep:'Bijzonder',c1:'#6b4326', c2:'#2e1a0e', nietVla:true},
  {merk:'Fristi',  soort:'Ook geen vla',      groep:'Bijzonder',c1:'#f2b8cf', c2:'#c0326b', nietVla:true},
  {merk:'Mona',    soort:'Toetje (geen vla)', groep:'Bijzonder',c1:'#f6e7d2', c2:'#b98a5e', nietVla:true},
  {merk:'Koelkast',soort:'Achterin gevonden', groep:'Bijzonder',c1:'#cfd6cd', c2:'#6f7a6b', mysterie:true, zelf:{vraag:'Wanneer zag je hem voor het eerst?', hint:'Achterin de koelkast bestaat geen tijd. Gok gerust, wij rekenen er twee dagen bij.', dagen:2}},
  {merk:'Leeg pak', soort:'Puzzel erop',      groep:'Bijzonder',c1:'#f4f1e8', c2:'#cfc7b4', puzzel:true, alOpen:true},
  {merk:'Uitgeknepen', soort:'Laatste restje', groep:'Bijzonder',c1:'#f6e9cd', c2:'#c9a961', geknepen:true, alOpen:true},
  {merk:'Onbekend',soort:'Vla zonder etiket', groep:'Bijzonder',c1:'#d8d2c8', c2:'#8d8478', mysterie:true, zelf:{vraag:'Wanneer kwam dit pak in huis?', hint:'Zonder etiket is elke datum een schatting. Wij rekenen er vier dagen bij en hopen er het beste van.', dagen:4}},
];

/* ============ PAK TEKENEN ============ */
let uid = 0;
function wrap(t, max){
  const w = t.split(' '); const lines = []; let cur = '';
  for (const word of w){
    if ((cur + ' ' + word).trim().length > max && cur){ lines.push(cur); cur = word; }
    else cur = (cur ? cur + ' ' : '') + word;
  }
  if (cur) lines.push(cur);
  return lines.slice(0,2);
}
/* De drie teksten op het etiket, los berekend. Ze worden op twee manieren
   gebruikt: normaal als <text> in de SVG, en bij het deelplaatje als losse
   regels die op het canvas gezet worden. Dat laatste moet, want een SVG die je
   als <img> inlaadt mag geen webfont ophalen; het etiket zou daar dus in een
   systeemletter komen te staan in plaats van in Fredoka.

   De maten zijn in de eenheden van de viewBox (120 bij 152). */
function pakTekst(v){
  const dy = v.geknepen ? -15 : 0;
  const lines = wrap(v.soort.replace(/\s*\(.*\)/, ''), 12);
  const fs = lines.some(l => l.length > 10) ? 7.6 : 8.6;
  const mLen = v.merk.length;
  const mfs = mLen > 13 ? 4.6 : mLen > 10 ? 5.3 : 6;
  const mls = mLen > 13 ? .2 : mLen > 10 ? .5 : .9;
  return [
    { t: v.merk.toUpperCase(), y: 80 + dy, fam: 'Inter', dik: 700, fs: mfs, sp: mls, kleur: '#9d8d78' },
    ...lines.map((l, i) => ({
      t: l, y: 99 + dy + i * 10.5 - (lines.length - 1) * 5,
      fam: 'Fredoka', dik: 600, fs, sp: 0, kleur: '#33261b',
    })),
    { t: v.geknepen ? 'BIJNA LEEG' : v.puzzel ? 'LEEG' : '1 LITER',
      y: (lines.length > 1 ? 112.5 : 109) + dy,
      fam: 'Inter', dik: 600, fs: 5, sp: .7, kleur: '#b7a894' },
  ];
}
/* `opties.zonderTekst` laat het etiket leeg, voor wie de letters zelf zet. */
function pack(v, opties){
  const id = 'g' + (uid++);
  const stops = v.split
    ? `<stop offset="50%" stop-color="${v.c1}"/><stop offset="50%" stop-color="${v.c2}"/>`
    : `<stop offset="0%" stop-color="${v.c1}"/><stop offset="100%" stop-color="${v.c2}"/>`;
  /* Een uitgeknepen pak is smaller in het midden, dus het etiket schuift
     omhoog en de onderkant krijgt kreukels in plaats van een rechte rand. */
  const kn = !!v.geknepen;
  const dy = kn ? -15 : 0;
  const lines = wrap(v.soort.replace(/\s*\(.*\)/, ''), 12);
  const etiket = (opties && opties.zonderTekst) ? '' : pakTekst(v).map(r =>
    `<text x="60" y="${r.y}" text-anchor="middle" font-family="${r.fam},sans-serif" font-weight="${r.dik}" font-size="${r.fs}"` +
    (r.sp ? ` letter-spacing="${r.sp}"` : '') + ` fill="${r.kleur}">${esc(r.t)}</text>`
  ).join('');
  /* Een leeg pak dat je bewaart om de puzzel op de zijkant. */
  const zwart = (x, y) => `<rect x="${x}" y="${y}" width="5" height="5" fill="rgba(51,38,27,.6)"/>`;
  const puzzel = `<rect x="47.5" y="37" width="25" height="20" rx="1" fill="rgba(255,255,255,.85)"/>`
    + zwart(47.5, 37) + zwart(62.5, 37) + zwart(57.5, 42) + zwart(67.5, 47) + zwart(52.5, 52)
    + `<path d="M52.5 37v20M57.5 37v20M62.5 37v20M67.5 37v20M47.5 42h25M47.5 47h25M47.5 52h25"
         stroke="rgba(51,38,27,.32)" stroke-width=".5" fill="none"/>`;

  const mark = v.puzzel ? puzzel : v.mysterie
    ? `<text x="60" y="53" text-anchor="middle" font-family="Fredoka,sans-serif" font-weight="700" font-size="22" fill="rgba(255,255,255,.75)">?</text>`
    : kn
    ? `<ellipse cx="60" cy="46" rx="8" ry="3" fill="rgba(255,255,255,.28)"/>`
    : `<ellipse cx="60" cy="52" rx="17" ry="7" fill="rgba(255,255,255,.3)"/><ellipse cx="60" cy="50" rx="11" ry="4.5" fill="rgba(255,255,255,.45)"/>`;

  /* Links en rechts deuken verschillend in: een uitgeknepen pak is gekreukt,
     niet op een draaibank gemaakt. */
  const lijf = kn
    ? 'M22 37 h76 v64 C98 110 80 112 82 120 C84 128 74 132 78 140 L76 146 L40 146 L36 138 C32 130 44 126 42 118 C40 110 22 109 22 101 Z'
    : 'M22 37 h76 v100 a7 7 0 0 1 -7 7 h-62 a7 7 0 0 1 -7 -7 Z';
  const schaduw = kn
    ? 'M84 37 h14 v64 C98 110 80 112 82 120 C84 128 74 132 78 140 L76 146 L64 146 L66 138 C62 130 70 126 68 118 C66 110 84 109 84 101 Z'
    : 'M84 37 h14 v100 a7 7 0 0 1 -7 7 h-7 Z';
  const glans = kn
    ? '<path d="M27 37 h6 v64 C33 108 47 110 45 118 C43 126 33 130 37 138 L39 146 L40 146 L36 138 C32 130 44 126 42 118 C40 110 22 109 22 101 Z" fill="rgba(255,255,255,.18)"/>'
    : '<path d="M26 37 h6 v107 h-1 a6 6 0 0 1 -5 -6 Z" fill="rgba(255,255,255,.22)"/>';
  const kreuk = kn
    ? `<path d="M26 103 L44 111 M94 103 L80 111 M45 122 L79 119 M42 133 L77 136"
         stroke="rgba(0,0,0,.15)" stroke-width="1.4" fill="none" stroke-linecap="round"/>`
    : `<rect x="29" y="122" width="62" height="3" rx="1.5" fill="rgba(255,255,255,.4)"/>`;
  return `<svg viewBox="0 0 120 152" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(v.merk)} ${esc(v.soort)}">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient></defs>
  <path d="M22 38 L60 12 L98 38 Z" fill="url(#${id})"/>
  <path d="M60 12 L98 38 L60 38 Z" fill="rgba(0,0,0,.14)"/>
  <rect x="52" y="8" width="16" height="7" rx="3" fill="rgba(0,0,0,.22)"/>
  <path d="${lijf}" fill="url(#${id})"/>
  <path d="${schaduw}" fill="rgba(0,0,0,.13)"/>
  ${glans}
  ${mark}
  <rect x="29" y="${68 + dy}" width="62" height="46" rx="7" fill="#fffaf0" opacity=".94"/>
  ${etiket}
  ${kreuk}
</svg>`;
}
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function slug(v){
  return (v.merk + ' ' + v.soort)
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/['\u2019]/g, '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
