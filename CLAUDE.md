# Werken aan houdbarevla.nl

Een grapwebsite die uitrekent of jouw vla nog kan. Statisch, op GitHub Pages.
De `README.md` legt uit hoe de site werkt. Dit bestand legt uit hoe eraan
gewerkt wordt.

## Toon

De site is de grap, de schrijfstijl niet. Droog en puntig, met een strak
gezicht gebracht. Nooit uitleggen dat er een grapje gemaakt wordt, nooit een
knipoog erbij.

- Nederlands, je-vorm.
- **Geen em dashes.** Niet in de teksten, niet in het commentaar, niet in
  commits. Een komma, een punt of een dubbele punt doet hetzelfde werk.
- Liever een regel minder dan een regel meer.
- De disclaimer is wel serieus bedoeld. THT, TGT en "bij twijfel gootsteen"
  blijven kloppen, hoe droog de rest ook is.

## De vlalijst

`VLAS` in `vla.js` bevat **echte merken en echte soorten**. Verzin er geen bij.
Alleen de groep Bijzonder mag verzonnen zijn, want die gaat over vla uit een
pan, vla met vel en het laatste restje.

Komt er een vla bij, geef hem dan ook vijf feitjes in `feitjes.js` op zijn slug.

## Code

Geen dependencies, geen build, geen framework. `open index.html` moet genoeg
blijven om de site te draaien.

- Zes bestanden. Wat twee pagina's delen hoort in `vla.js` (de lijst en de
  paktekening), `feitjes.js` of `kaart.js` (het deelplaatje), niet in allebei.
- Namen van variabelen en functies in het Nederlands: `bereken`, `openKeuze`,
  `tekenPak`.
- Commentaar in het Nederlands, en het legt uit **waarom** iets zo staat. Wat
  de regel doet staat er al.
- Twee spaties inspringen, enkele aanhalingstekens in JS.
- Kleuren komen uit de CSS-variabelen op `:root`, ook de themakleuren.
- Emoji in JS als `\u{1F4E6}`-escape, niet als los teken in de bron.
- De pakken zijn met de hand getekende SVG. Er komen geen afbeeldingen in de
  repo.

## Eenvoud

De kern is: berekenen of jouw vla nog kan. Alles wat daar niet aan meedoet
moet zich verantwoorden. Er komt niets bij dat de startpagina langer maakt
zonder dat het iets oplevert.

## Delen

Drie dingen die al een keer misgegaan zijn:

- `navigator.share` krijgt **alleen** `files` mee, nooit ook `url` of `text`.
  In Safari op iOS laat hij anders het bestand of de link vallen.
- Delen moet in dezelfde tik als de klik. Geen `await` ertussen: pak en
  letters vooraf laden, en `toDataURL` gebruiken in plaats van `toBlob`.
- Een SVG die je als `<img>` inlaadt mag geen webfont ophalen. De etiketteksten
  komen daarom uit `pakTekst()` en worden op het canvas gezet.

## Testen

Mobiel betekent hier een iPhone met Chrome voor iOS, en dat is WebKit. Voor
gewone layout- en gedragscontroles is een desktopbrowser op 375 px breed
genoeg. Dat is de standaard.

De iOS-simulator kost een halve minuut opstarten en daarna nog een paar
schermafdrukken, dus die is alleen voor dingen die **echt** van de engine
afhangen: canvas- en lettermaten, `env(safe-area-inset-*)`, delen via
`navigator.share`, en gedrag dat in Blink anders werkt.

Moet het dan toch: `xcrun simctl openurl` en `xcrun simctl io … screenshot`
werken, Simulator.app ontbreekt op deze Mac. Zet er voor een meting tijdelijk
een pagina naast die zichzelf meet en het antwoord groot op het scherm zet,
lees dat af op de screenshot, en gooi de pagina daarna meteen weg.

Reken door in plaats van te steekproeven waar dat kan. De 61 vla's, de 331
feitjes en de uitslagen zijn allemaal in een lus na te lopen.

## Werkwijze

- **Niet uit jezelf committen of pushen.** Wijzigingen lokaal maken,
  nakijken, en melden dat het klaarstaat. Een "je mag dit pushen" geldt voor
  die ene keer, niet voor de rest van het gesprek.
- Werkt de site na een wijziging anders, dan gaat de `README.md` mee in
  dezelfde commit.
- Commits: korte Nederlandse onderwerpregel zonder punt, daaronder in gewone
  zinnen waarom het zo opgelost is. Sluit af met:

  ```
  Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
  ```
