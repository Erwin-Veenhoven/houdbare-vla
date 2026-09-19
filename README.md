# 🍮 houdbarevla.nl

> Je staat om 23:41 voor de open koelkast met een pak vla in je hand.
> Op het pak staat een datum. De datum is… discutabel.
> Deze website neemt de beslissing voor je.

[![vla](https://img.shields.io/badge/vla-gecontroleerd-f2a63b)](https://houdbarevla.nl)
[![dependencies](https://img.shields.io/badge/dependencies-0-2e9e5b)](#techniek)
[![wetenschap](https://img.shields.io/badge/wetenschap-nee-d94a3d)](#disclaimer)

**[→ houdbarevla.nl](https://houdbarevla.nl)**

## Wat is dit

Eén HTML-bestand dat drie dingen doet:

1. **Je kiest je vla.** 59 soorten, van Campina Vanillevla tot *Vla zonder etiket*. Met plaatjes, want niemand herkent zijn vla aan een tekstlijstje.
2. **Je vult de houdbaarheidsdatum in.** Die kleine lettertjes op de bovenkant van het pak waar je een bril voor nodig hebt.
3. **Je krijgt een oordeel.** Geen genuanceerd advies. Een oordeel.

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

Elke uitslag past in een link. De knop **Uitslag delen** vraagt eerst even je naam — mag leeg — en gebruikt daarna het deelvenster van je telefoon. Op de desktop, waar dat venster meestal niet bestaat, kopieert hij de tekst plus de link.

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

## Kleinigheden

- **Vla van de dag.** Bovenaan staat elke dag een andere vla, vast gekoppeld aan de kalenderdag. Iedereen ziet dus dezelfde. Eén klik en hij staat klaar om door te rekenen.
- **Snelknoppen bij de datum.** *Vorige maand* tot *volgende maand*, want een datumveld op een telefoon is geen pretje en de meeste vla's zitten toch in die marge.
- **Aftelklok.** Is je vla nog goed, dan telt het scherm de seconden af tot de houdbaarheidsdatum. Volstrekt overbodig. Bij een gedeelde uitslag van een andere dag blijft hij weg, want dan zou hij het aantal dagen tegenspreken.

## Een vla toevoegen

Mis je jouw vla? Voeg een regel toe aan de `VLAS`-array in `index.html`. Het pak wordt automatisch getekend in de kleuren die je opgeeft:

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

Pull requests met nieuwe vlasoorten zijn welkom. Yoghurt staat er inmiddels ook in, maar uitsluitend als waarschuwing.

## Techniek

Eén `index.html` van zo'n 57 kB. Alle vlapakken zijn met de hand getekende SVG's, dus er zitten geen afbeeldingen in de repo. Verder: geen JavaScript-dependencies, geen tracking, geen cookies, geen banner die je vraagt of je cookies wilt. Licht en donker thema. Werkt op je telefoon terwijl je voor die koelkast staat, wat eerlijk gezegd de belangrijkste use case is.

## Disclaimer

Dit is een grap. Het is **geen voedselveiligheidsadvies**.

Echte regels, kort: een **THT** ("ten minste houdbaar tot") is een kwaliteitsdatum, geen veiligheidsdatum — een dag eroverheen is meestal prima. Een **TGT** ("te gebruiken tot") is dat wél, en die negeer je niet. En bij alles geldt: bij twijfel ruiken, bij sterke twijfel gootsteen, bij bruisende vla rennen.

## Merken

Alle pakken op deze site zijn zelfgetekend. Er zijn geen logo's, huisstijlen of verpakkingsontwerpen overgenomen — ze lijken alleen op vla omdat vla er nu eenmaal zo uitziet. Merknamen staan er puur om je te helpen jouw vla terug te vinden. Geen enkel zuivelmerk was hierbij betrokken, en dat weten ze zelf waarschijnlijk ook niet.

## Licentie

[MIT](LICENSE) — doe ermee wat je wilt. Bouw je eigen vla-checker, voeg je huismerk toe, maak er een yoghurt-variant van als je dat per se moet. Laat alleen de copyrightregel staan.
