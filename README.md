# 🍮 houdbarevla.nl

> Je staat om 23:41 voor de open koelkast met een pak vla in je hand.
> Op het pak staat een datum. De datum is… discutabel.
> Deze website neemt de beslissing voor je.

[![vla](https://img.shields.io/badge/vla-gecontroleerd-f2a63b)](https://houdbarevla.nl)
[![dependencies](https://img.shields.io/badge/dependencies-0-2e9e5b)](#techniek)
[![wetenschap](https://img.shields.io/badge/wetenschap-nee-d94a3d)](#disclaimer)

**[→ houdbarevla.nl](https://houdbarevla.nl)**

## Wat is dit

Een website die drie dingen doet:

1. **Je kiest je vla.** 61 soorten, van Campina Vanillevla tot *Vla zonder etiket*. Met plaatjes, want niemand herkent zijn vla aan een tekstlijstje.
2. **Je vult de houdbaarheidsdatum in.** Die kleine lettertjes op de bovenkant van het pak waar je een bril voor nodig hebt.
3. **Je krijgt een oordeel.** Geen genuanceerd advies. Een oordeel.

En daarnaast: [welke vla ben jij](#de-quiz), en [331 vlafeitjes](#de-feitjes) om doorheen te scrollen.

## Het oordeel

De hele wetenschappelijke onderbouwing, in één tabel:

| Dagen tot de THT | Oordeel |
|---|---|
| meer dan 365 | Deze vla komt uit de toekomst |
| 181 t/m 365 | Deze vla overleeft je plannen |
| 91 t/m 180 | Deze vla overleeft jou |
| 31 t/m 90 | Ruim binnen de tijd |
| 15 t/m 30 | Kraakvers |
| 8 t/m 14 | Helemaal goed |
| 4 t/m 7 | Nog prima houdbaar |
| 2 t/m 3 | Deze week nog |
| 1 | Morgen is het zover |
| 0 | Vandaag. Nu. Meteen. |
| 1 dag over | Sinds gisteren |
| 2 t/m 3 over | Nét over datum |
| 4 t/m 7 over | Grensgebied |
| 8 t/m 14 over | Twijfelgeval |
| 15 t/m 30 over | Over datum |
| 31 t/m 90 over | Dit is geen vla meer |
| 91 t/m 365 over | Vla-archeologie |
| meer dan 365 over | Historisch materiaal |

Vanaf *Over datum* kantelt het pak op je scherm om. Dat leek ons gepast.

Er is nog een tweede vraag: **heeft de vla buiten de koelkast gestaan, en hoe lang?** Een THT geldt namelijk alleen voor vla die netjes koud heeft gestaan.

| Hoe lang buiten de koelkast | Aftrek | Gevolg voor het oordeel |
|---|---|---|
| korter dan 2 uur | 0 | niets, dit is binnen de regels |
| 2 tot 4 uur | −20 | één trede omlaag |
| een halve dag | −35 | één trede omlaag |
| de hele nacht | −50 | twee treden omlaag |
| langer, of geen idee | −60 | twee treden omlaag |

Een kraakverse vla die een nacht op het aanrecht stond komt zo alsnog uit op *Te lang warm geweest*.

### De vla-score

Elke uitslag krijgt een score van 0 tot 100, berekend met deze formule die ik volledig zelf heb verzonnen:

```js
score = dagen >= 0
  ? min(100, 58 + dagen * 1.6)   // nog houdbaar
  : max(1,   58 + dagen * 2.6)   // over datum, en het gaat hard
if (pak_is_open)      score -= 22  // want dan telt de THT niet meer
score -= aftrek_buiten_koelkast   // 0 tot 60, zie de tabel hierboven
```

De twee aftrekpunten zijn het enige onderdeel van deze site dat op waarheid berust: **na openen is zuivel nog 2 à 3 dagen goed**, wat er ook op het pak staat, en **zuivel hoort niet langer dan twee uur op kamertemperatuur te staan**.

## Je uitslag delen

Elke uitslag past in een link. De knop **Uitslag delen** vraagt eerst even je naam — mag leeg — en gebruikt daarna het deelvenster van je telefoon. Op de desktop, waar dat venster meestal niet bestaat, kopieert hij de tekst plus de link:

```
De vla van Erwin
😎 Melkunie Boerenvla
KRAAKVERS

Nog 16 dagen te gaan.
Het pak was al open.
Vla-score: 84/100

https://houdbarevla.nl/?vla=melkunie-boerenvla&tht=2026-10-05&op=2026-09-19&naam=Erwin
```

De link zit bewust niet in de tekst zelf, want het deelvenster van je telefoon plakt die er al onder.

```
houdbarevla.nl/?vla=campina-dubbelvla&tht=2026-09-06&op=2026-09-19&uit=nacht&naam=Erwin
```

| Parameter | Betekenis |
|---|---|
| `vla` | welke vla, als leesbare naam |
| `tht` | de houdbaarheidsdatum van het pak |
| `op` | de dag waarop het is doorgerekend |
| `open` | `1` als het pak al open was |
| `uit` | hoe lang hij buiten de koelkast stond |
| `naam` | van wie de vla is |
| `dier` | hoe je huisdier heet, als de vla dat geworden is |

Die `op` is belangrijker dan hij lijkt. Zonder die datum zou een gedeelde link elke dag een ander antwoord geven: stuur je vandaag "nog 7 dagen te gaan", dan leest je vriend volgende week "over datum" en snapt hij niet waar je het over had. Nu ziet hij de uitslag zoals jij hem zag, met een regel erboven — *doorgerekend op 19 september* — en een knop om alsnog de stand van nu te bekijken.

De adresbalk wordt meteen bijgewerkt zodra je een vla doorrekent, dus kopiëren wat daar staat werkt net zo goed.

## Zelf draaien

```bash
open index.html
```

Dat is het. Geen `npm install`, geen build, geen dev server, geen framework dat over drie jaar niet meer bestaat.

## Vla's zonder etiket

Op acht vla's staat helemaal geen houdbaarheidsdatum — oma's vla, restjes uit de pan, dat pak achterin de koelkast. Daar draait de tweede stap de vraag om: niet *wat staat er op het pak*, maar *wanneer is hij gemaakt*. De site telt er zelf een houdbaarheid bij op.

| Vla | Vraag | Rekent erbij |
|---|---|---|
| Vla van oma | Wanneer heeft oma deze vla gemaakt? | 3 dagen |
| Vla met limonade | Wanneer heb je de vlaflip gemaakt? | 1 dag |
| Vla met een vel | Wanneer heb je dit pak opengemaakt? | 3 dagen |
| Restjes vla | Wanneer heb je gekookt? | 2 dagen |
| Vla van het werk | Wanneer stond hij er al? | 2 dagen |
| Vla op een dienblad | Wanneer kreeg je dit dienblad? | 1 dag |
| Achterin gevonden | Wanneer zag je hem voor het eerst? | 2 dagen |
| Vla zonder etiket | Wanneer kwam dit pak in huis? | 4 dagen |

Bij die vla's verdwijnen de snelknoppen naar de toekomst en accepteert het datumveld geen datum van later dan vandaag, want oma kan geen vla maken die nog moet komen. In de link blijft de parameter gewoon `tht` heten; daar staat dan de ingevulde datum in, en welke vla het is bepaalt hoe die gelezen wordt.

Wil je zelf zo'n vla toevoegen, geef hem dan een `zelf`-veld:

```js
zelf: { vraag: 'Wanneer heb je hem gemaakt?', hint: '…', dagen: 3 }
```

## Jouw koelkast

Onder een uitslag staat *bewaar in mijn koelkast*. Wat je bewaart verschijnt bovenaan de eerste stap, op volgorde van urgentie, met rood, oranje en groen. Klik op een rij en hij rekent 'm opnieuw door, inclusief het open pak en de koelkasttijd die je destijds invulde.

Het slaat de **datum** op en niet het oordeel, zodat de lijst vanzelf meeloopt met de tijd: wat vandaag "nog 1 dag" is, staat er morgen als "vandaag". Alles blijft in je eigen browser. Is de lijst leeg, dan is hij onzichtbaar.

Daarnaast staat er *zet in mijn agenda*: een `.ics` met een hele dag op de vervaldatum en een herinnering een dag van tevoren.

## De quiz

`quiz.html` beantwoordt de enige vraag die deze site nog niet beantwoordde: welke vla ben jij. Vier vragen van vier antwoorden, en alle 61 vla's zijn te worden.

Het werkt niet met losse punten per vla — dat is geprobeerd en het viel om. Hoe scherper je scoort, hoe vaker dezelfde paar vla's winnen: van de 59 waren er eerst 55 bereikbaar, en na *betere* eigenschappen nog maar 48. Volledigheid en scherpte vechten met elkaar.

Wat wel werkt: zowel de vla's als de antwoorden krijgen een plek op dezelfde drie assen — karakter, temperament en bekendheid. Beide kanten worden in dezelfde volgorde gelegd, en elke vla krijgt een even groot stuk van de antwoordruimte. Naast elkaar liggende antwoorden geven dus naast elkaar liggende vla's, en elke vla is gegarandeerd bereikbaar. Alle 256 combinaties samen dekken alle 61, elk 3 à 5 keer.

Deel je je uitslag, dan krijgt de link jouw vla en je naam mee: `quiz.html?vla=campina-stroopwafelvla&naam=Erwin`. Wie hem opent ziet jouw pak met jouw naam op het etiket, en een knop om zelf te beginnen. De omschrijving eronder blijft dan weg, want die spreekt jou aan en niet de kijker.

Vragen staan bovenaan `quiz.html` in een lijst die je kunt herschrijven zonder de rest aan te raken. De eigenschappen worden afgeleid uit de vla zelf, dus een nieuwe vla in `vla.js` doet automatisch mee.

## De feitjes

`feitjes.html` is een eindeloze scroller: één feitje per scherm, een pak erbij, en scrollen geeft de volgende. Er zijn er **331** — vijf verzonnen per vla, plus zesentwintig die echt waar zijn — en ze staan in `feitjes.js`, gescheiden van de pagina zodat je ze kunt bijschrijven zonder aan de scroller te komen.

Ze komen niet los-random voorbij. Alle feitjes gaan één keer geschud in een bak, en je krijgt ze in die volgorde: je ziet dus niets dubbel tot je alle 331 gehad hebt. Daarna wordt er opnieuw geschud. Ligt hetzelfde pak twee keer achter elkaar, dan ruilt hij die twee om, want dat voelt als een fout.

Bij het eerste feitje staat onderaan *scroll voor het volgende feitje* met een pijltje. Dat vervaagt zodra je voor het eerst scrolt en komt niet terug, ook niet als je weer naar boven gaat. Bij elk bezoek staat hij er opnieuw.

Onder elk feitje staan drie knopjes: **bewaren**, **delen** en **checken** (die laatste zet de vla klaar in de checker). Dubbeltikken op de kaart bewaart ook, met een hartje dat opbloeit. Dat haalt nooit iets wég: een tik te veel zou anders ongemerkt een favoriet wissen. Op een telefoon tellen we de tikken zelf, want dubbeltikken is daar ook het zoomgebaar; de `preventDefault` op de tweede tik houdt zowel de zoom als de nagebootste `dblclick` tegen. Met een toetsenbord scroll je met de pijltjes, spatie of page up/down, kaart voor kaart.

Delen geeft een link naar dat ene feitje: `feitjes.html?vla=campina-hopjesvla&f=5`. Wie hem opent krijgt dat feitje als eerste kaart en scrollt daarna gewoon door. Staat er geen geldige `vla`/`f` in, dan begin je bij een willekeurige.

Wat je bewaart staat in je eigen browser (`vlafeitjes`) en is terug te vinden achter de teller bovenin. Elk bewaard feitje krijgt daar zijn eigen kaartje met het pak erbij, zodat het lijstje er net zo uitziet als de rest van de site, met een regel eronder die telt hoeveel er echt waar zijn. Klik je op zo'n kaartje, dan wordt dat feitje als volgende kaart in de scroller gezet en schuift hij ernaartoe — je ziet hem dus gewoon in het grote scherm en scrollt van daaraf verder. Is er niets bewaard, dan staat er het lege pak.

De scroller houdt hooguit zestig kaarten in het document: hij vult vijf nieuwe bij zodra het einde in zicht komt, en ruimt de oudste tien op als je ver genoeg bent. Opruimen gebeurt pas als je even stilstaat, want het verzetten van de scrollpositie breekt anders een uitrollend veegje of een vloeiende pijltjes-scroll af. Die scrollpositie zetten we zelf terug, dus `overflow-anchor` staat uit — anders corrigeren de browser en de pagina allebei en spring je tien kaarten terug.

Een vla zonder eigen feitjes valt terug op `ALGEMEEN` en blijft gewoon meedoen.

### Echt waar

Een feitje is een gewone regel tekst, of `{ t: '...', echt: true }`. Die tweede krijgt een oranje **echt waar** op de kaart, en dat is precies de grap: op een pagina waar verder alles verzonnen is, valt een nagetrokken feitje op.

Dus alleen zetten als het klopt. De zesentwintig die er nu staan zijn stuk voor stuk nagezocht — zie [bronnen](#bronnen-van-de-echte-feitjes). Zesentwintig op 331 is ongeveer één op de 13, verdeeld over 23 van de 61 vla's.

De andere 305 zijn verzonnen, maar niet willekeurig: ze hangen elk aan iets herkenbaars aan die vla — de kleur van het pak, de prijs, wie hem koopt, hoe hij smaakt, wat ermee gebeurt. Een grap die nergens op slaat hoort hier niet, want dan is het ruis tussen de feitjes door.

Zet nieuwe feitjes **onderaan** een lijstje. Wat iemand bewaard heeft staat op volgnummer, dus er eentje tussenvoegen verschuift andermans favorieten naar een ander feitje.

### Bronnen van de echte feitjes

| Feitje | Bron |
|---|---|
| `vla` en `vlaai` zijn hetzelfde woord | [etymologiebank.nl](https://www.etymologiebank.nl/trefwoord/vlade) |
| Vanillevla bevat geen ei; kleur uit annatto en kurkuma | [campina.nl](https://www.campina.nl/producten/vla-vanille-smaak) |
| Carrageen komt uit rood zeewier | [Quest](https://www.quest.nl/mens/voeding/a70255180/e407-carrageen/) |
| Ruim 90% van alle vanillesmaak is niet uit een stokje | [Verbraucherzentrale](https://www.verbraucherzentrale.de/wissen/lebensmittel/lebensmittelproduktion/vanille-vanilla-und-vanillearoma-was-sind-die-unterschiede-17708) |
| Suiker karamelliseert vanaf ~160 °C | [Wikipedia](https://nl.wikipedia.org/wiki/Karamellisatie) |
| Hopje vernoemd naar baron Hendrik Hop (1792) | [Haags Historisch Museum](https://haagshistorischmuseum.nl/ontdek/verhalen-over-den-haag/haagse-hopjes/) |
| Mokka vernoemd naar de havenstad in Jemen | [Wikipedia](https://nl.wikipedia.org/wiki/Mokka_(koffiesoort)) |
| Griesmeel = grof gemalen tarwe, van *Grießmehl* | [Wikipedia](https://nl.wikipedia.org/wiki/Griesmeel) |
| Advocaat vernoemd naar de avocado | [Wikipedia](https://nl.wikipedia.org/wiki/Advocaat_(drank)) |
| Advocaat: min. 140 g eigeel per liter | [Verordening (EU) 2019/787](https://eur-lex.europa.eu/legal-content/NL/TXT/PDF/?uri=CELEX:32019R0787) |
| Stroopwafel uit Gouda, rond 1810 | [GoudaFM](https://goudafm.nl/het-ontstaan-van-de-beroemde-goudse-stroopwafel/) |
| Melkunie + Campina 1989, naam weg in 2001 | [Wikipedia](https://nl.wikipedia.org/wiki/Campina_(zuivelco%C3%B6peratie)) |
| FrieslandCampina is van ruim 14.000 melkveehouders | [FrieslandCampina](https://www.frieslandcampina.com/nl/onze-boeren/eigendom-van-leden-melkveehouders/) |
| FrieslandCampina sinds eind 2008 | [Wikipedia](https://en.wikipedia.org/wiki/FrieslandCampina) |
| Plantaardig mag geen zuivelnaam dragen | [NZO](https://www.nzo.nl/nl/nieuws/zuivelbenamingen-en-plantaardige-producten), [Alpro](https://www.alpro.com/benl/pers/gerechtshof-s-hertogenbosch-oordeelt) |
| Alpro en Provamel uit Gent, nu Danone | [Alpro](https://www.alpro.com/nl/news/danone-en-whitewavealpro-ronden-fusie-af/) |
| Custardpoeder, Alfred Bird, 1837 | [Wikipedia](https://en.wikipedia.org/wiki/Bird%27s_Custard) |
| Chocomel als merk vastgelegd in 1932 | [Chocomel](https://www.chocomel.com/nl-nl/geschiedenis) |
| Fristi 1955, geschrapt, terug in 1986 | [Peter Zwaal](https://peterzwaal.nl/fristi/) |
| Yoghurt: *L. bulgaricus* en *S. thermophilus* | [Wikipedia](https://en.wikipedia.org/wiki/Yogurt) |
| Kwark is verse kaas, met stremsel | [KRO-NCRV](https://kro-ncrv.nl/programmas/best-bites/het-verschil-tussen-bekende-zuur-smakende-zuivelproducten) |
| Twee uur, en de gevarenzone 5–60 °C | [Voedingscentrum](https://www.voedingscentrum.nl/nl/veilig-eten-voedselinfectie-voorkomen/hoe-snel-groeien-bacterien.aspx) |

De overige drie — het vel, de koelkastdeur en THT versus TGT — staan in de [disclaimer](#disclaimer) en zijn algemeen bekende voedselkennis.

## Kleinigheden

- **Vla van de dag.** Bovenaan staat elke dag een andere vla, vast gekoppeld aan de kalenderdag. Iedereen ziet dus dezelfde. Eén klik en hij staat klaar om door te rekenen.
- **Feitje van de dag.** Staat bovenin naast de vla van de dag, in hetzelfde kaartje, op dezelfde manier aan de kalenderdag gekoppeld. Het linkt naar precies dat feitje in de scroller. Daarvoor laadt `index.html` ook `feitjes.js`.
- **Snelknoppen bij de datum.** *Vorige maand* tot *volgende maand*, want een datumveld op een telefoon is geen pretje en de meeste vla's zitten toch in die marge.
- **Aftelklok.** Is je vla nog goed, dan telt het scherm de seconden af tot de houdbaarheidsdatum. Volstrekt overbodig. Bij een gedeelde uitslag van een andere dag blijft hij weg, want dan zou hij het aantal dagen tegenspreken.

## Een vla toevoegen

Mis je jouw vla? Voeg een regel toe aan de `VLAS`-array in `vla.js`. Dat bestand wordt door zowel de checker als de quiz gebruikt, dus één regel is genoeg — het pak wordt automatisch getekend in de kleuren die je opgeeft, en hij doet meteen mee in de quiz:

```js
{ merk: 'Campina', soort: 'Kaneelvla', groep: 'Campina', c1: '#e8c89a', c2: '#a8763c' },
```

| Veld | Betekenis |
|---|---|
| `merk`, `soort` | wat er op het etiket komt |
| `groep` | de filterknop waar 'ie onder valt |
| `c1`, `c2` | boven- en onderkleur van het pak |
| `split: true` | harde kleurscheiding in plaats van verloop (voor dubbelvla) |
| `nietVla: true` | levert een snuivende opmerking op in de uitslag |
| `mysterie: true` | zet een `?` op het pak in plaats van een scheut vla |

Wil je er ook een eigen sneer bij in de uitslag, voeg dan een regel toe aan `OPMERKINGEN`. De eerste twee regels die matchen worden getoond, dus zet specifieke vla's boven algemene:

```js
[v => v.soort === 'Kaneelvla', '🌰', 'Kaneel maskeert veel. Ruik twee keer.'],
```

Geef hem ook vijf feitjes in `feitjes.js`, op zijn slug. Vergeet je dat, dan valt hij terug op de algemene feitjes en blijft de scroller werken.

Pull requests met nieuwe vlasoorten zijn welkom. Yoghurt staat er inmiddels ook in, maar uitsluitend als waarschuwing.

## Techniek

Vijf bestanden: `index.html` (de checker), `quiz.html`, `feitjes.html`, `vla.js` met de gedeelde vlalijst en de paktekening, en `feitjes.js` met de feitjes. Samen zo'n 150 kB. Alle vlapakken zijn met de hand getekende SVG's, dus er zitten geen afbeeldingen in de repo. Verder: geen JavaScript-dependencies, geen tracking, geen cookies, geen banner die je vraagt of je cookies wilt. Licht en donker thema. Werkt op je telefoon terwijl je voor die koelkast staat, wat eerlijk gezegd de belangrijkste use case is.

## Disclaimer

Dit is een grap. Het is **geen voedselveiligheidsadvies**.

Echte regels, kort: een **THT** ("ten minste houdbaar tot") is een kwaliteitsdatum, geen veiligheidsdatum — een dag eroverheen is meestal prima. Een **TGT** ("te gebruiken tot") is dat wél, en die negeer je niet. En bij alles geldt: bij twijfel ruiken, bij sterke twijfel gootsteen, bij bruisende vla rennen.

## Merken

Alle pakken op deze site zijn zelfgetekend. Er zijn geen logo's, huisstijlen of verpakkingsontwerpen overgenomen — ze lijken alleen op vla omdat vla er nu eenmaal zo uitziet. Merknamen staan er puur om je te helpen jouw vla terug te vinden. Geen enkel zuivelmerk was hierbij betrokken, en dat weten ze zelf waarschijnlijk ook niet.

## Licentie

[MIT](LICENSE) — doe ermee wat je wilt. Bouw je eigen vla-checker, voeg je huismerk toe, maak er een yoghurt-variant van als je dat per se moet. Laat alleen de copyrightregel staan.
