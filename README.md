# 🍮 houdbarevla.nl

> Je staat om 23:41 voor de open koelkast met een pak vla in je hand.
> Op het pak staat een datum. De datum is… discutabel.
> Deze website neemt de beslissing voor je.

[![vla](https://img.shields.io/badge/vla-gecontroleerd-f2a63b)](https://houdbarevla.nl)
[![dependencies](https://img.shields.io/badge/dependencies-0-2e9e5b)](#techniek)
[![wetenschap](https://img.shields.io/badge/wetenschap-nee-d94a3d)](#disclaimer)

**[→ houdbarevla.nl](https://houdbarevla.nl)**

## Wat is dit

Een website die vier dingen doet:

1. **Je kiest je vla.** 61 soorten, van Campina Vanillevla tot *Vla zonder etiket*. Met plaatjes, want niemand herkent zijn vla aan een tekstlijstje.
2. **Je vult de houdbaarheidsdatum in.** Die kleine lettertjes op de bovenkant van het pak waar je een bril voor nodig hebt. En of het pak al open is, en sinds wanneer.
3. **Je krijgt een oordeel.** Geen genuanceerd advies. Een oordeel.
4. **Twijfel je nog, dan doe je de [ruiktest](#de-ruiktest).** Vier vragen over hoe het pak eruitziet en ruikt. Die mogen de datum overrulen, allebei de kanten op.

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

Er zijn nog twee vragen. De eerste: **is het pak al open, en sinds wanneer?** Na openen zegt de THT niets meer: dan telt de dag dat je hem opendeed.

| Wanneer geopend | Aftrek | Gevolg voor het oordeel |
|---|---|---|
| vandaag | −8 | niets, je hebt nog twee dagen |
| gisteren | −15 | niets, je zit in de marge |
| 2 tot 3 dagen geleden | −22 | één trede omlaag |
| ruim een week geleden | −45 | twee treden omlaag |
| geen idee meer | −50 | twee treden omlaag |

Bij sommige vla's hoeven we dat niet te vragen, want dan weten we het al. Een uitgeknepen pak is open, anders was er geen laatste restje; een pan met restjes heeft nooit een dop gehad. Die staan in `vla.js` met `alOpen: true` en krijgen alleen nog de vraag *sinds wanneer*.

En een deel krijgt de vraag helemaal niet. Bij vla van oma, een vlaflip, restjes uit de pan en een vla met een vel vul je namelijk al een moment in (wanneer oma kookte, wanneer jij het pak opendeed), en die telling ís het openen; nog eens aftrekken zou dubbelop zijn. En bij het lege pak met de puzzel erop is het antwoord voor iedereen duidelijk, maar verandert het niets: aan een leeg pak valt niets te bederven.

De tweede: **heeft de vla buiten de koelkast gestaan, en hoe lang?** Een THT geldt namelijk alleen voor vla die netjes koud heeft gestaan.

| Hoe lang buiten de koelkast | Aftrek | Gevolg voor het oordeel |
|---|---|---|
| korter dan 2 uur | 0 | niets, dit is binnen de regels |
| 2 tot 4 uur | −20 | één trede omlaag |
| een halve dag | −35 | één trede omlaag |
| de hele nacht | −50 | twee treden omlaag |
| langer, of geen idee | −60 | twee treden omlaag |

Een kraakverse vla die een nacht op het aanrecht stond komt zo alsnog uit op *Te lang warm geweest*. Open én warm tellen bij elkaar op, maar samen komen ze nooit verder dan de onderste trede: twee keer nee is nog steeds nee.

## De ruiktest

De datum weet alleen wat er op het pak gedrukt staat, en dat wist jij al toen je het pak uit de koelkast pakte. Onder elke uitslag staat daarom *twijfel je nog? doe de ruiktest*: vier vragen die je alleen kunt beantwoorden met het pak in je hand.

| Vraag | Zwaarte | Aftrek |
|---|---|---|
| Staat de bovenkant van het pak bol? | 3 | −60 |
| Ruikt het zuur, gistig of gewoon vreemd? | 3 | −55 |
| Zitten er klontjes in, of is het geschift? | 1 | −22 |
| Is de kleur anders dan je gewend bent? | 1 | −20 |

Een bol pak is gas, en gas komt van iets dat leeft; dat wint altijd van de kalender. Vandaar de drie.

Het probleem met zo'n zwaarste-signaal-wint: zodra je één keer ja hebt gezegd op een zware vraag, doen de andere antwoorden er niet meer toe. Het oordeel kán niet lager, dus alles eronder verdwijnt. Daarom telt de ruiktest de zwaartes bij elkaar op en loopt de **kop** door waar de trede ophoudt:

| Som | Wat er staat |
|---|---|
| 1 | de kop van dat ene signaal: *Klontjes* |
| 2 | *Twee dingen kloppen niet* |
| 3 | de kop van het zware signaal: *Bolle verpakking* |
| 4–5 | *Een bol pak, en dat is niet alles* |
| 6–7 | *Bol én een vreemde lucht* |
| 8 | *Vier van de vier* |

Alle vijftien combinaties leveren zo een andere kop of een andere tekst op, en de tekst somt op wat je gevonden hebt. Op het bonnetje staat elk antwoord apart, ook als de score allang op 1 ligt: dan zie je wat een aftrek werkelijk kostte in plaats van wat hij op papier had moeten kosten.

Het werkt ook de andere kant op. Vier keer nee tilt het oordeel één trede omhoog en levert 12 punten op, zodat een vla van vijf dagen over datum die er onberispelijk uitziet alsnog *Goedgekeurd door je eigen neus* kan worden. Met twee uitzonderingen, allebei waar:

- **meer dan 30 dagen over datum**: dan is je neus niet meer het juiste meetinstrument;
- **een nacht of langer buiten de koelkast**: wat je ruikt is bederf, en waar je na een nacht op het aanrecht bang voor moet zijn, ruikt nergens naar.

Elk antwoord rekent meteen opnieuw door; het oordeel bovenaan verandert onder je handen mee, en onder de vragen staat dezelfde uitkomst nog eens kort herhaald. Nog eens op hetzelfde antwoord tikken neemt het terug.

### De vla-score

Elke uitslag krijgt een score van 0 tot 100, berekend met deze formule die ik volledig zelf heb verzonnen:

```js
score = dagen >= 0
  ? min(100, 58 + dagen * 1.6)   // nog houdbaar
  : max(1,   58 + dagen * 2.6)   // over datum, en het gaat hard
score -= aftrek_open              // 0 tot 50, zie de tabel hierboven
score -= aftrek_buiten_koelkast   // 0 tot 60, zie de tabel hierboven
score -= aftrek_ruiktest          // per rood vlaggetje, 20 tot 60
if (ruiktest_helemaal_schoon) score += 12
```

De aftrekpunten zijn het enige onderdeel van deze site dat op waarheid berust: **na openen is zuivel nog 2 à 3 dagen goed**, wat er ook op het pak staat, en **zuivel hoort niet langer dan twee uur op kamertemperatuur te staan**.

## Je uitslag delen

De knop **Uitslag delen** vraagt eerst even je naam (mag leeg) en laat je daarna kiezen: als plaatje of als link.

### Waarom je moet kiezen

Op papier mag je `files`, `text` en `url` in één keer meegeven aan de Web Share API. In Safari op iOS werkt het delen van een bestand alleen betrouwbaar als `files` het enige is dat erin zit. Zet je er een link bij, dan wordt die genegeerd, of belandt je tekst op het klembord in plaats van de link, of mislukt het delen helemaal. Dus: één van de twee, en de gebruiker kiest welke.

Omdat een plaatje de link niet kan meenemen, staat het adres op de kaart zelf.

### Als plaatje

Een canvas van 1080 bij 1350, met het pak, het oordeel, de vla-score en `houdbarevla.nl` eronder. Ligt je vla op de site om, dan ligt hij op het plaatje ook om.

Alle drie de pagina's kunnen dit, elk met een eigen ontwerp: een uitslag met de meter erop, een quizvla met jouw naam op het etiket, en een feitje waarbij de tekst de hoofdzaak is en zichzelf kleiner maakt tot hij past. Het gereedschap staat in `kaart.js`, de indeling staat per pagina.

Het pak komt als SVG binnen, maar zonder de etiketteksten. Een SVG die je als `<img>` inlaadt mag namelijk geen webfont ophalen, en dan zou *Vanillevla* op het etiket in een systeemletter staan in plaats van in Fredoka. `pack(v, { zonderTekst: true })` laat het etiket dus leeg, en `pakTekst(v)` geeft dezelfde drie regels terug met hun maten en posities, die daarna op het canvas worden gezet. Beide komen uit dezelfde berekening, dus ze kunnen niet uit elkaar gaan lopen.

Het tekenen gebeurt zonder `await`. `navigator.share` wil in dezelfde tik als je klik aangeroepen worden en een wachtmoment ertussen breekt dat op iOS, dus het pak en de letters worden al geladen op het moment dat het deelvenster opengaat, en `toDataURL` (synchroon) doet het werk dat `toBlob` (niet synchroon) niet mag doen.

Heeft je toestel geen deelvenster voor bestanden, dan wordt het een download.

### Als link

Elke uitslag past ook gewoon in een link. Op de desktop, waar het deelvenster meestal niet bestaat, kopieert hij de tekst plus de link:

```
De vla van Erwin
😎 Melkunie Boerenvla
KRAAKVERS

Nog 16 dagen te gaan.
Het pak is gisteren opengemaakt.
Ruiktest: niets aan te merken.
Vla-score: 81/100

https://houdbarevla.nl/?vla=melkunie-boerenvla&tht=2026-10-05&o=2&op=2026-09-19&naam=Erwin
```

De link zit bewust niet in de tekst zelf, want het deelvenster van je telefoon plakt die er al onder.

```
houdbarevla.nl/?vla=campina-dubbelvla&tht=2026-09-06&u=4&op=2026-09-19&naam=Erwin
```

| Parameter | Betekenis |
|---|---|
| `vla` | welke vla, als leesbare naam |
| `tht` | de houdbaarheidsdatum van het pak |
| `op` | de dag waarop het is doorgerekend |
| `o` | sinds wanneer het pak open is: `1` t/m `5` |
| `u` | hoe lang hij buiten de koelkast stond: `1` t/m `5` |
| `z` | de ruiktest in vier tekens: `j`, `n` of `.` per vraag |
| `naam` | van wie de vla is |
| `dier` | hoe je huisdier heet, als de vla dat geworden is |

De twee keuzelijsten gaan als **nummer** de link in: `1` is de bovenste optie, `2` de tweede, enzovoort. Staat het vinkje uit, dan blijft de parameter gewoon weg, dat is korter dan een nul, en `0` wordt trouwens ook gelezen als "uit". De volgorde komt uit het keuzemenu zelf (`select.options`) en niet uit een tweede lijstje in de code, zodat de nummers niet kunnen gaan afwijken van wat je op het scherm ziet staan.

Die `op` is belangrijker dan hij lijkt. Zonder die datum zou een gedeelde link elke dag een ander antwoord geven: stuur je vandaag "nog 7 dagen te gaan", dan leest je vriend volgende week "over datum" en snapt hij niet waar je het over had. Nu ziet hij de uitslag zoals jij hem zag, met een regel erboven (*doorgerekend op 19 september*) en een knop om alsnog de stand van nu te bekijken.

De adresbalk wordt meteen bijgewerkt zodra je een vla doorrekent, dus kopiëren wat daar staat werkt net zo goed.

Oudere links blijven gewoon werken. Er zijn er drie generaties:

| Vorm | Wordt gelezen als |
|---|---|
| `o=4&u=4` | de huidige vorm |
| `open=week&uit=nacht` | dezelfde keuzes, voluit geschreven |
| `open=1` | *2 tot 3 dagen geleden*, want toen zei de link alleen dát het pak open was |

Die laatste krijgt precies de aftrek die hij destijds ook kreeg, dus een link van voor de openingsdatum levert nog dezelfde score op. Open je zo'n oude link, dan staat in je adresbalk meteen de korte vorm: kopiëren wat daar staat geeft je de nieuwe link.

## Zelf draaien

```bash
open index.html
```

Dat is het. Geen `npm install`, geen build, geen dev server, geen framework dat over drie jaar niet meer bestaat.

## Vla's zonder etiket

Op acht vla's staat helemaal geen houdbaarheidsdatum: oma's vla, restjes uit de pan, dat pak achterin de koelkast. Daar draait de tweede stap de vraag om: niet *wat staat er op het pak*, maar *wanneer is hij gemaakt*. De site telt er zelf een houdbaarheid bij op.

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

Een open pak veroudert mee. "Gisteren geopend" is een week later niet meer waar, dus naast de keuze bewaart hij ook de dag waarop je hem invulde en schuift hij de keuze op als de tijd verstrijkt. De antwoorden van de ruiktest gaan juist **niet** mee: die gaan over hoe het pak er op dat moment uitzag, en dat zegt volgende week niets meer.

Daarnaast staat er *zet in mijn agenda*, en die geeft je twee routes. Een website mag namelijk niet zelf in je agenda schrijven, geen enkele; dat bestaat niet als browserfunctie. Het enige wat kan is het agendapunt helemaal invullen en aan je agenda-app geven.

- **Google Agenda** krijgt een `render?action=TEMPLATE`-link: het agendapunt opent ingevuld en jij tikt op opslaan. Een herinnering vooraf past niet in zo'n link, dus daar gelden je eigen standaardinstellingen. Er gaat niets naar Google tot je die knop indrukt.
- **De rest** krijgt een `.ics` met een hele dag op de vervaldatum en een herinnering een dag van tevoren, die je op de avond ervoor laat weten: *"Morgen verloopt je vla. Nu nog niets doen."* Kan je telefoon bestanden delen (`navigator.canShare({files})`), dan gaat het bestand naar het deelvenster en staat Agenda gewoon tussen de opties. Anders wordt het een download die je zelf moet openen, en dat is waar het eerder op vastliep, en de melding beweerde bovendien dat er een agendapunt gemaakt was.

## De quiz

`quiz.html` beantwoordt de enige vraag die deze site nog niet beantwoordde: welke vla ben jij. Vier vragen van vier antwoorden, en alle 61 vla's zijn te worden.

Het werkt niet met losse punten per vla; dat is geprobeerd en het viel om. Hoe scherper je scoort, hoe vaker dezelfde paar vla's winnen: van de 59 waren er eerst 55 bereikbaar, en na *betere* eigenschappen nog maar 48. Volledigheid en scherpte vechten met elkaar.

Wat wel werkt: zowel de vla's als de antwoorden krijgen een plek op dezelfde drie assen: karakter, temperament en bekendheid. Beide kanten worden in dezelfde volgorde gelegd, en elke vla krijgt een even groot stuk van de antwoordruimte. Naast elkaar liggende antwoorden geven dus naast elkaar liggende vla's, en elke vla is gegarandeerd bereikbaar. Alle 256 combinaties samen dekken alle 61, elk 3 à 5 keer.

Deel je je uitslag, dan krijgt de link jouw vla en je naam mee: `quiz.html?vla=campina-stroopwafelvla&naam=Erwin`. Wie hem opent ziet jouw pak met jouw naam op het etiket, en een knop om zelf te beginnen. De omschrijving eronder blijft dan weg, want die spreekt jou aan en niet de kijker.

Na de vierde vraag staat de uitslag al vast, maar hij komt niet meteen: er loopt eerst twee seconden een balkje, met een lijstje eronder dat zichzelf afvinkt. Die vier stappen zijn geen toneel, het is precies wat `bepaal()` doet (antwoorden inlezen, alle 61 vla's langslopen, de drie assen wegen, uitslag vaststellen), en eronder staat in kleine letters: *dit had ook meteen gekund*.

Ze stonden eerst om de beurt op dezelfde regel, maar dan wisselen ze sneller dan je kunt lezen. Nu staan alle vier er vanaf het begin en worden ze alleen afgevinkt, zodat de snelheid niet meer bepaalt of je het meekrijgt. Wie `prefers-reduced-motion` aan heeft staan krijgt de uitslag zonder omweg.

Vragen staan bovenaan `quiz.html` in een lijst die je kunt herschrijven zonder de rest aan te raken. De eigenschappen worden afgeleid uit de vla zelf, dus een nieuwe vla in `vla.js` doet automatisch mee.

## De feitjes

`feitjes.html` is een eindeloze scroller: één feitje per scherm, een pak erbij, en scrollen geeft de volgende. Er zijn er **331**: vijf verzonnen per vla, plus zesentwintig die echt waar zijn. Ze staan in `feitjes.js`, gescheiden van de pagina zodat je ze kunt bijschrijven zonder aan de scroller te komen.

Ze komen niet los-random voorbij. Alle feitjes gaan één keer geschud in een bak, en je krijgt ze in die volgorde: je ziet dus niets dubbel tot je alle 331 gehad hebt. Daarna wordt er opnieuw geschud. Ligt hetzelfde pak twee keer achter elkaar, dan ruilt hij die twee om, want dat voelt als een fout.

Bij het eerste feitje staat onderaan *scroll voor het volgende feitje* met een pijltje. Dat vervaagt zodra je voor het eerst scrolt en komt niet terug, ook niet als je weer naar boven gaat. Bij elk bezoek staat hij er opnieuw.

Onder elk feitje staan drie knopjes: **bewaren**, **delen** en **checken** (die laatste zet de vla klaar in de checker). Dubbeltikken op de kaart bewaart ook, met een hartje dat opbloeit. Dat haalt nooit iets wég: een tik te veel zou anders ongemerkt een favoriet wissen. Op een telefoon tellen we de tikken zelf, want dubbeltikken is daar ook het zoomgebaar; de `preventDefault` op de tweede tik houdt zowel de zoom als de nagebootste `dblclick` tegen. Met een toetsenbord scroll je met de pijltjes, spatie of page up/down, kaart voor kaart.

Delen geeft een link naar dat ene feitje: `feitjes.html?vla=campina-hopjesvla&f=5`. Wie hem opent krijgt dat feitje als eerste kaart en scrollt daarna gewoon door. Staat er geen geldige `vla`/`f` in, dan begin je bij een willekeurige.

Wat je bewaart staat in je eigen browser (`vlafeitjes`) en is terug te vinden achter de teller bovenin. Elk bewaard feitje krijgt daar zijn eigen kaartje met het pak erbij, zodat het lijstje er net zo uitziet als de rest van de site, met een regel eronder die telt hoeveel er echt waar zijn. Klik je op zo'n kaartje, dan wordt dat feitje als volgende kaart in de scroller gezet en schuift hij ernaartoe, zodat je hem gewoon in het grote scherm en scrollt van daaraf verder. Is er niets bewaard, dan staat er het lege pak.

De scroller houdt hooguit twaalf kaarten in het document: hij vult er drie bij zodra het einde in zicht komt, en ruimt de oudste vier op als je ver genoeg bent. Met `scroll-snap-stop: always` schuif je toch maar één kaart per veeg op, dus meer dan een paar vooruit heeft geen zin. Opruimen gebeurt pas als je even stilstaat, want het verzetten van de scrollpositie breekt anders een uitrollend veegje of een vloeiende pijltjes-scroll af. Die scrollpositie zetten we zelf terug, dus `overflow-anchor` staat uit, want anders corrigeren de browser en de pagina allebei en spring je tien kaarten terug.

Een vla zonder eigen feitjes valt terug op `ALGEMEEN` en blijft gewoon meedoen.

### Soepel scrollen

Op een telefoon vulde een binnenkomende kaart zich zichtbaar van boven naar beneden: eerst het pak, dan de tekst en de knoppen, en soms een horizontale snee dwars door het pak. Dat zijn geen missende elementen maar rastertegels die te laat komen.

Te meten viel dat niet: het paneel van de simulator ontbreekt in deze Xcode, en zelfs mét paneel draait die op de GPU van een Mac en zegt hij niets over een telefoon. Wat via `simctl openurl` plus een meetpagina wél te controleren viel, op echte WebKit, is dat elke snap exact landt, dat een kaart altijd precies één plek opschuift en dat de reel niet uit zichzelf doorscrolt.

- **De reel scrollt zelf, niet de pagina.** Dat is een keer omgedraaid, op de gedachte dat iOS een geneste scroller minder vooruit schildert. Het hielp niet en het kostte twee dingen: de browser haalde zijn onderste balk weg zodra het document scrollde, waardoor een kaart niet meer gecentreerd stond, en de reel begon soms uit zichzelf door te scrollen. Teruggedraaid. `baan` en `kaartHoogte()` zijn de twee plekken die weten wie er scrollt, dus omdraaien is een kleine ingreep als iemand het nog eens wil proberen.
- **Geen `drop-shadow`-filter meer.** Zo'n filter laat de browser het pak eerst apart uittekenen en dan vervagen, elke kaart opnieuw. De schaduw is nu een `radial-gradient` in een `::after`.
- **Elk blok inhoud is een eigen compositielaag** (`will-change: transform` op `.binnen`). Die wordt één keer getekend en daarna alleen nog verschoven, dus WebKit hoeft er niets meer aan te rasteren op het moment dat de kaart in beeld schuift. Bewust alleen dat blok en niet de hele kaart: een laag ter grootte van het scherm kost per kaart te veel geheugen.
- **Het venster is klein.** Van zestig kaarten naar hooguit tien, mede om het aantal lagen te beperken; er staan er altijd minstens twee voor je klaar.
- **`-webkit-overflow-scrolling: touch` is eruit**, en het verloop op de achtergrond is een vaste laag (`body::before` met `position: fixed`).
- **`contain: layout`** op elke kaart, bewust zonder `paint`: dat laatste geeft de browser juist toestemming om buiten beeld niets te schilderen.
- **Geen scrollbalk.** Een kaart vult het hele scherm en een streepje langs de rand hoort daar niet bij, zeker niet op Windows, waar hij permanent staat en ook nog breedte inneemt. Drie regels, want elke browserfamilie doet het anders: `scrollbar-width: none` is nieuw (Chrome 121+, Safari 18.2+), `::-webkit-scrollbar { display: none }` vangt alles wat ouder is, en `-ms-overflow-style` is voor de oude Edge. De lijst met bewaarde feitjes houdt zijn balk wél: daar vertelt hij je dat er meer onder staat.


### Echt waar

Een feitje is een gewone regel tekst, of `{ t: '...', echt: true }`. Die tweede krijgt een oranje **echt waar** op de kaart, en dat is precies de grap: op een pagina waar verder alles verzonnen is, valt een nagetrokken feitje op.

Dus alleen zetten als het klopt. De zesentwintig die er nu staan zijn stuk voor stuk nagezocht, zie [bronnen](#bronnen-van-de-echte-feitjes). Zesentwintig op 331 is ongeveer één op de 13, verdeeld over 23 van de 61 vla's.

De andere 305 zijn verzonnen, maar niet willekeurig: ze hangen elk aan iets herkenbaars aan die vla: de kleur van het pak, de prijs, wie hem koopt, hoe hij smaakt, wat ermee gebeurt. Een grap die nergens op slaat hoort hier niet, want dan is het ruis tussen de feitjes door.

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

De overige drie (het vel, de koelkastdeur en THT versus TGT) staan in de [disclaimer](#disclaimer) en zijn algemeen bekende voedselkennis.

## Kleinigheden

- **Vla van de dag.** Bovenaan staat elke dag een andere vla, vast gekoppeld aan de kalenderdag. Iedereen ziet dus dezelfde. Eén klik en hij staat klaar om door te rekenen.
- **Feitje van de dag.** Staat bovenin naast de vla van de dag, in hetzelfde kaartje, op dezelfde manier aan de kalenderdag gekoppeld. Het linkt naar precies dat feitje in de scroller. Daarvoor laadt `index.html` ook `feitjes.js`.
- **Snelknoppen bij de datum.** *Vorige maand* tot *volgende maand*, want een datumveld op een telefoon is geen pretje en de meeste vla's zitten toch in die marge.
- **Aftelklok.** Is je vla nog goed, dan telt het scherm de seconden af tot de houdbaarheidsdatum. Volstrekt overbodig. Bij een gedeelde uitslag van een andere dag blijft hij weg, want dan zou hij het aantal dagen tegenspreken.

## Een vla toevoegen

Mis je jouw vla? Voeg een regel toe aan de `VLAS`-array in `vla.js`. Dat bestand wordt door zowel de checker als de quiz gebruikt, dus één regel is genoeg: het pak wordt automatisch getekend in de kleuren die je opgeeft, en hij doet meteen mee in de quiz:

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
| `alOpen: true` | dit pak is per definitie al open, dus die vraag wordt niet gesteld |
| `zelf: {…}` | geen THT: je vult een moment in en wij tellen er `dagen` bij op |

Wil je er ook een eigen sneer bij in de uitslag, voeg dan een regel toe aan `OPMERKINGEN`. De eerste twee regels die matchen worden getoond, dus zet specifieke vla's boven algemene:

```js
[v => v.soort === 'Kaneelvla', '🌰', 'Kaneel maskeert veel. Ruik twee keer.'],
```

Geef hem ook vijf feitjes in `feitjes.js`, op zijn slug. Vergeet je dat, dan valt hij terug op de algemene feitjes en blijft de scroller werken.

Pull requests met nieuwe vlasoorten zijn welkom. Yoghurt staat er inmiddels ook in, maar uitsluitend als waarschuwing.

## Vindbaarheid

`sitemap.xml` noemt de drie pagina's die er echt zijn (de voorpagina, de quiz en de feitjes), en `robots.txt` wijst ernaar. Dat is alles wat Google Search Console nodig heeft.

Wat er bewust **niet** in staat: de deellinks met parameters (`?vla=…`, `?naam=…`, `?f=…`). Daar zijn er duizenden van en ze zijn allemaal dezelfde pagina met andere inhoud. Elke pagina heeft daarom een `<link rel="canonical">` naar zijn eigen adres zonder parameters, zodat een gedeelde uitslag geen tweede zoekresultaat wordt. `404.html` staat op `noindex`.

## Techniek

Zes bestanden: `index.html` (de checker), `quiz.html`, `feitjes.html`, `vla.js` met de gedeelde vlalijst en de paktekening, `feitjes.js` met de feitjes, en `kaart.js` dat van een uitslag een deelbaar plaatje maakt. Samen zo'n 165 kB. Alle vlapakken zijn met de hand getekende SVG's, dus er zitten geen afbeeldingen in de repo. Verder: geen JavaScript-dependencies, geen tracking, geen cookies, geen banner die je vraagt of je cookies wilt. Licht en donker thema. Werkt op je telefoon terwijl je voor die koelkast staat, wat eerlijk gezegd de belangrijkste use case is.

## Disclaimer

Dit is een grap. Het is **geen voedselveiligheidsadvies**.

Echte regels, kort: een **THT** ("ten minste houdbaar tot") is een kwaliteitsdatum, geen veiligheidsdatum: een dag eroverheen is meestal prima. Een **TGT** ("te gebruiken tot") is dat wél, en die negeer je niet. En bij alles geldt: bij twijfel ruiken, bij sterke twijfel gootsteen, bij bruisende vla rennen.

## Merken

Alle pakken op deze site zijn zelfgetekend. Er zijn geen logo's, huisstijlen of verpakkingsontwerpen overgenomen; ze lijken alleen op vla omdat vla er nu eenmaal zo uitziet. Merknamen staan er puur om je te helpen jouw vla terug te vinden. Geen enkel zuivelmerk was hierbij betrokken, en dat weten ze zelf waarschijnlijk ook niet.

## Licentie

[MIT](LICENSE). Doe ermee wat je wilt. Bouw je eigen vla-checker, voeg je huismerk toe, maak er een yoghurt-variant van als je dat per se moet. Laat alleen de copyrightregel staan.
