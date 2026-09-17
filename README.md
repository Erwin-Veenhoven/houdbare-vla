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

1. **Je kiest je vla.** 22 soorten, van Campina Vanillevla tot *Vla zonder etiket*. Met plaatjes, want niemand herkent zijn vla aan een tekstlijstje.
2. **Je vult de houdbaarheidsdatum in.** Die kleine lettertjes op de bovenkant van het pak waar je een bril voor nodig hebt.
3. **Je krijgt een oordeel.** Geen genuanceerd advies. Een oordeel.

## Het oordeel

De hele wetenschappelijke onderbouwing, in één tabel:

| Dagen tot de THT | Oordeel |
|---|---|
| 31 of meer | Deze vla overleeft jou |
| 8 t/m 30 | Kraakvers |
| 2 t/m 7 | Nog prima houdbaar |
| 1 | Morgen is het zover |
| 0 | Vandaag. Nu. Meteen. |
| 1 à 2 dagen over | Nét over datum |
| 3 t/m 7 over | Grensgebied |
| 8 t/m 30 over | Over datum |
| meer dan 30 over | Dit is geen vla meer |

Bij die laatste categorie kantelt het pak op je scherm om. Dat leek ons gepast.

### De vla-score

Elke uitslag krijgt een score van 0 tot 100, berekend met deze formule die ik volledig zelf heb verzonnen:

```js
score = dagen >= 0
  ? min(100, 58 + dagen * 1.6)   // nog houdbaar
  : max(1,   58 + dagen * 2.6)   // over datum, en het gaat hard
if (pak_is_open) score -= 22      // want dan telt de THT niet meer
```

Het aftrekpunt voor een geopend pak is het enige onderdeel van deze site dat op waarheid berust: **na openen is zuivel nog 2 à 3 dagen goed**, wat er ook op het pak staat.

## Zelf draaien

```bash
open index.html
```

Dat is het. Geen `npm install`, geen build, geen dev server, geen framework dat over drie jaar niet meer bestaat.

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

Pull requests met nieuwe vlasoorten zijn welkom. Pull requests met yoghurt worden gesloten zonder toelichting.

## Techniek

Eén `index.html` van zo'n 29 kB. Alle vlapakken zijn met de hand getekende SVG's, dus er zitten geen afbeeldingen in de repo. Verder: geen JavaScript-dependencies, geen tracking, geen cookies, geen banner die je vraagt of je cookies wilt. Licht en donker thema. Werkt op je telefoon terwijl je voor die koelkast staat, wat eerlijk gezegd de belangrijkste use case is.

## Disclaimer

Dit is een grap. Het is **geen voedselveiligheidsadvies**.

Echte regels, kort: een **THT** ("ten minste houdbaar tot") is een kwaliteitsdatum, geen veiligheidsdatum — een dag eroverheen is meestal prima. Een **TGT** ("te gebruiken tot") is dat wél, en die negeer je niet. En bij alles geldt: bij twijfel ruiken, bij sterke twijfel gootsteen, bij bruisende vla rennen.

## Merken

Alle pakken op deze site zijn zelfgetekend. Er zijn geen logo's, huisstijlen of verpakkingsontwerpen overgenomen — ze lijken alleen op vla omdat vla er nu eenmaal zo uitziet. Merknamen staan er puur om je te helpen jouw vla terug te vinden. Geen enkel zuivelmerk was hierbij betrokken, en dat weten ze zelf waarschijnlijk ook niet.

## Licentie

[MIT](LICENSE) — doe ermee wat je wilt. Bouw je eigen vla-checker, voeg je huismerk toe, maak er een yoghurt-variant van als je dat per se moet. Laat alleen de copyrightregel staan.
