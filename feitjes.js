/* =====================================================================
   Vlafeitjes. Vijf per vla, op slug.

   Een vla toevoegen: zet hem in vla.js en plak hier zijn slug met vijf
   regels eronder. Vergeet je dat, dan valt hij terug op ALGEMEEN en blijft
   de scroller gewoon werken. feitjes.html controleert verder niets.

   Een feitje is een gewone regel tekst, of { t: '...', echt: true } voor
   eentje die echt waar is. Die krijgt een etiket op de kaart, dus zet dat
   er alleen bij als het klopt.

   Zet nieuwe feitjes ONDERAAN een lijstje. Wat iemand bewaard heeft staat
   op volgnummer, dus er eentje tussenvoegen verschuift andermans favorieten.
   ===================================================================== */

const FEITJES = {

/* ---------------------------------------------------------- Campina */
'campina-vanillevla': [
  'De meest gekochte vla van Nederland, en de minst besproken. Niemand heeft er ooit ruzie over gehad.',
  'De enige vla die je kan drinken zonder dat iemand vraagt waarom.',
  'In elk huis staat er een. In geen enkel huis staat er genoeg.',
  'Precies de kleur van een woonkamerlamp om half acht ’s avonds.',
  'Wordt zelden bewust gekozen. Ligt wel altijd in de kar.',
  { t: 'In vanillevla zit geen ei. Maïszetmeel maakt hem dik, annatto en kurkuma maken hem geel.', echt: true },
  { t: '‘Vla’ en ‘vlaai’ zijn hetzelfde woord. In het westen viel de d weg en bleef de vulling over; in Limburg bleef de taart.', echt: true },
],
'campina-chocoladevla': [
  'De vla waar het eerst naar gegrepen wordt en het laatst over gepraat.',
  'Laat altijd een randje achter in het glas. Dat randje is het beste deel.',
  'In het donker niet te onderscheiden van koffie. Blijf opletten.',
  'Zwaarder dan vanillevla, en daardoor eerder een toetje dan een drankje.',
  'Is officieel geen chocolademelk, hoe dik je die laatste ook laat worden.',
],
'campina-goudvla': [
  'De duurdere neef van vanillevla. Zelfde familie, betere jas.',
  'Heet goudvla omdat ‘iets gelere vla’ niet op het pak paste.',
  'Wordt gekocht als er visite komt en opgedronken als die weg is.',
  'Er zit meer room in, en dat merk je pas als je terug moet naar gewone vla.',
  'De enige vla met een naam die klinkt als een medaille.',
],
'campina-hopjesvla': [
  'Smaakt naar een snoepje uit de jaszak van iemands opa. Dat is een compliment.',
  'Hopjes zijn Haags. Deze vla is dat eigenlijk ook een beetje.',
  'De vla waar het minst over gezegd wordt en het minst van overblijft.',
  'Koffie, karamel en iets ouderwets. Precies zoals bedoeld.',
  'Mensen onder de dertig die hopjesvla lusten, hebben dat van hun oma.',
  { t: 'Het hopje is vernoemd naar baron Hendrik Hop, die in 1792 een Haagse suikerbakker vroeg om een bonbon met koffiesmaak.', echt: true },
],
'campina-dubbelvla': [
  'Twee smaken, één pak, nul keuzes. Zo hoort het.',
  'Er is geen manier om dubbelvla in te schenken zonder dat iemand roept dat het gestreept is.',
  'De enige vla waarbij het uitmaakt hoe je het pak vasthoudt.',
  'Wie dubbelvla doorroert, heeft de bedoeling niet begrepen.',
  'In elk gezin is er precies één iemand die alleen de chocoladekant wil.',
],
'campina-roomvla': [
  'Roomvla is vanillevla die een keer op vakantie is geweest.',
  'Zo dik dat de lepel er even over nadenkt.',
  'Wordt aangeraden bij verdriet, examens en zondagmiddagen.',
  'De vla die je niet uit het pak drinkt, uit respect.',
  'Er bestaat geen kleine portie roomvla. Alleen een eerste.',
  { t: 'Wat vla dik en glad houdt is vaak carrageen, gewonnen uit rood zeewier. Het staat gewoon op het pak.', echt: true },
],
'campina-aardbeienvla': [
  'De roze vla die iedereen als kind het lekkerst vond en daarna nooit meer kocht.',
  'Het bewijs dat kleur ook een smaak is.',
  'Gaat verrassend goed samen met vanillevla. Gaat verder nergens mee samen.',
  'Wordt in de winkel altijd door een kind uit het schap gepakt.',
  'Bevat ongeveer evenveel aardbei als een aardbeienveter, en dat is genoeg.',
],
'campina-bananenvla': [
  'De meest verdeeldheid zaaiende vla van het schap.',
  'Je lust hem, of je ruikt hem en loopt weg. Iets ertussenin bestaat niet.',
  'Geel, maar dan met een mening.',
  'Wordt zelden gedeeld, meestal omdat niemand meewil.',
  'De enige vla waarvan de geur eerder de kamer in komt dan het pak.',
],
'campina-karamelvla': [
  'Karamelvla is toffeevla die zich netter kleedt.',
  'Zoet, plakkerig en volkomen eerlijk over wat het is.',
  'Twee glazen is precies één te veel, en dat weet je pas bij glas twee.',
  'Gaat goed met slagroom, wat je al vermoedde.',
  'De vla die het meest smaakt naar iets uit een papiertje.',
  { t: 'Suiker begint pas rond de 160 graden te karamelliseren. Daaronder is het alleen maar zoet.', echt: true },
],
'campina-mokkavla': [
  'De enige vla waar je je ’s avonds nog even op bedenkt.',
  'Voor mensen die koffie lusten maar toch een toetje willen.',
  'Wordt door kinderen één keer geprobeerd en daarna nooit meer aangeraakt.',
  'De volwassenste vla in het schap, en dat weet hij.',
  'Smaakt het best uit een klein glas, alsof het ergens over gaat.',
  { t: 'Mokka is vernoemd naar Mocha, een havenstad in Jemen waar eeuwenlang de koffie vandaan kwam.', echt: true },
],
'campina-slagroomvla': [
  'Slagroomvla is roomvla die nog een stap verder is gegaan.',
  'Op het pak staat slagroom. In het glas zie je het niet. Je proeft het wel.',
  'De vla die je koopt als de week zwaar was.',
  'Combineert met alles, inclusief andere vla.',
  'Niemand heeft ooit geklaagd dat er te veel room in zat.',
],
'campina-toffeevla': [
  'Plakt aan je verhemelte op een manier die je niet erg vindt.',
  'Zoeter dan karamel, en eerlijker over zijn bedoelingen.',
  'De vla die je als kind uit het pak dronk terwijl je wist dat het niet mocht.',
  'Bruin, maar geen chocola. Dat verwart ieder jaar opnieuw iemand.',
  'Toffee is karamel die langer op het vuur heeft gestaan. In vla proef je daar net genoeg van.',
],
'campina-griesmeelvla': [
  'Heeft korreltjes, en die korreltjes zijn het hele punt.',
  'De enige vla met textuur als verkoopargument.',
  'Wie griesmeelvla lust, lust ook rijstepap. Dat is geen toeval.',
  'Wordt vaak verward met pudding en is daar niet van gediend.',
  'Smaakt naar een schoolkantine in 1994, en dat is voor sommigen precies goed.',
  { t: 'Griesmeel is grof gemalen tarwe. Het woord komt van het Duitse Grießmehl: grofkorrelig meel. De korrels zijn dus het uitgangspunt.', echt: true },
],
'campina-advocaatvla': [
  'De enige vla met een naam waar je even bij nadenkt voor je hem aan een kind geeft.',
  'Er zit geen alcohol in. Dat vraagt iedereen, elk jaar, opnieuw.',
  'Wordt gekocht rond de feestdagen en daarna vergeten tot volgend jaar.',
  'Kleur: eierlikeur. Smaak: eierlikeur. Effect: geen.',
  'Komt met slagroom en een lepeltje verrassend ver.',
  { t: 'Advocaat is vernoemd naar de avocado. Overzee maakten Nederlanders er een drank van; thuis was avocado onbetaalbaar, dus werd het eierdooier.', echt: true },
  { t: 'Echte advocaat moet van de EU minstens 140 gram eigeel per liter bevatten. Voor vla met advocaatsmaak geldt dat niet.', echt: true },
],
'campina-stroopwafelvla': [
  'Een stroopwafel is geen vla. Dit pak vindt van wel.',
  'De stukjes zakken naar de bodem, dus het laatste glas is het beste glas.',
  'Bedacht door iemand die dacht: waarom niet. Terecht.',
  'De enige vla die knispert, tenminste op dag één.',
  'Wordt door toeristen gekocht als souvenir. Dat gaat zelden goed.',
  { t: 'De stroopwafel komt uit Gouda, rond 1810, en is bedacht om deegresten en kruimels op te maken. Het oudste recept is van 1840.', echt: true },
],

/* ---------------------------------------------------------- Optimel */
'optimel-vanille': [
  'Vanillevla die aan zichzelf werkt.',
  'Dunner, lichter, en ergens ook een beetje verdrietiger.',
  'Op het pak staat vooral wat er niet in zit. Dat zegt genoeg.',
  'Wordt gekocht in januari en opgedronken in maart.',
  'Je drinkt er twee glazen van in plaats van één, dus reken zelf maar uit.',
],
'optimel-chocolade': [
  'Chocoladevla op dieet. Het is te doen.',
  'De kleur klopt, de dikte niet.',
  'Wordt aangeraden door dezelfde mensen die zeggen dat wandelen sporten is.',
  'Smaakt beter als je de gewone niet net op hebt gehad.',
  'Verdwijnt sneller dan verwacht, precies zoals het idee erachter.',
],
'optimel-aardbei': [
  'Roze, maar dan voorzichtig.',
  'Aardbeienvla met een sportschoolabonnement.',
  'Lichter dan het origineel en daardoor drinkbaar per pak.',
  'Op het pak staan mensen die lachen. In de koelkast staat de waarheid.',
  'Wordt vooral gekocht náást de gewone, voor de zekerheid.',
],
'optimel-karamel': [
  'Mager karamel is een tegenspraak die verrassend goed uitpakt.',
  'Zoet genoeg om te vergeten waarom je hem koos.',
  'De enige magere vla die je een tweede keer koopt.',
  'Karamel doet hier het werk dat vet normaal doet.',
  'De enige magere vla waarbij je de smaak eerder proeft dan het woord mager.',
],

/* --------------------------------------------------------- Huismerk */
'1-de-beste-chocoladevla': [
  'Het huismerk met de meest zelfverzekerde naam van het hele schap.',
  'Kost minder dan de bekende en verdwijnt even snel.',
  'Niemand zet 1 de Beste op tafel bij visite. Iedereen drinkt hem wel.',
  'Rood pak, bruine vla, verder geen poespas.',
  'Bewijst dat een merknaam ook gewoon een bewering mag zijn.',
],
'albert-heijn-vanillevla': [
  'De vla die het vaakst per ongeluk twee keer in de kar ligt.',
  'Blauw pak, gele inhoud, nul verrassingen.',
  'Staat in elke studentenkoelkast van Nederland, meestal half.',
  'Gaat regelmatig in de bonus, en dan koop je er drie.',
  'Smaakt naar precies wat je verwachtte, wat het hele idee is.',
],
'albert-heijn-chocoladevla': [
  'Koop je zonder nadenken, drink je zonder commentaar.',
  'Iets dunner dan de merkvla, iets goedkoper, precies genoeg.',
  'Wordt het vaakst gedronken uit een beker die eigenlijk voor thee is.',
  'Het laatste restje blijft in het pak achter. Dat weet je, en je doet het toch.',
  'Gaat prima op een boterham. Dat mag, maar je moet het niet rondvertellen.',
],
'albert-heijn-roomvla': [
  'Het huismerk dat het dichtst bij de dure komt.',
  'Dikker dan de gewone en daardoor gevaarlijker.',
  'Wordt gekocht als de roomvla van het merk op is.',
  'Blijft na een dag open nog net zo dik. Dat is het hele idee van roomvla.',
  'Niemand proeft het verschil. Iedereen zegt dat ze het proeven.',
],
'de-zaanse-hoeve-vanillevla': [
  'Klinkt als een boerderij, komt uit een fabriek, smaakt prima.',
  'Het huismerk met het meest landelijke plaatje op het pak.',
  'Groen, geel en volstrekt betrouwbaar.',
  'Wordt gekocht door mensen die het merk niet belangrijk vinden en dat ook zeggen.',
  'Stelt nooit teleur, omdat er niets beloofd is.',
],
'ekoplaza-volle-vla': [
  'Biologische vla, waarbij het woord ‘volle’ de belangrijkste informatie is.',
  'Kost meer, is dikker, en daar valt iets voor te zeggen.',
  'Wordt uit een glas gedronken, nooit uit het pak. Dat past niet bij de winkel.',
  'De ingrediëntenlijst is kort genoeg om hardop voor te lezen.',
  'Smaakt naar vla van vroeger, wat precies de bedoeling is.',
],
'gwoon-vanillevla': [
  'Een merk dat meteen zegt wat je ervan mag verwachten.',
  'Het goedkoopste pak dat nog echt vla is.',
  'Wordt gekocht als de rest van de boodschappen al duur genoeg was.',
  'Doet niets bijzonders en heeft dat ook nooit beweerd.',
  'De meest Nederlandse merknaam die ooit is bedacht.',
],
'gwoon-chocoladevla': [
  'Bruin, zoet, goedkoop. Een sluitende redenering.',
  'Het pak is oranje. De vla is dat niet. Dat went.',
  'Wordt in grote hoeveelheden gekocht door mensen met veel kinderen.',
  'Even lekker als de dure, mits je hem koud genoeg drinkt.',
  'Bewijst dat je voor chocoladevla eigenlijk niet veel hoeft te betalen.',
],
'jumbo-vanillevla': [
  'Geel pak, gele vla. Daar is over nagedacht.',
  'Het huismerk dat het minst op een huismerk probeert te lijken.',
  'Wordt gepakt in dezelfde beweging als het pak koffie.',
  'Wordt nauwelijks gekocht door mensen zonder Jumbo in de buurt. Zo werkt een huismerk.',
  'De vla die je koopt omdat je er toch al bent.',
  { t: 'Ruim negentig procent van alle vanillesmaak ter wereld komt niet uit een vanillestokje. Er groeit domweg te weinig vanille.', echt: true },
],
'jumbo-chocoladevla': [
  'Valt het hardst op in het schap en verdwijnt het snelst uit de koelkast.',
  'Geel pak om bruine vla. Dat blijft een opvallende keuze.',
  'Gaat goed bij alles wat je eigenlijk niet meer had moeten eten.',
  'Drinkt makkelijk weg, dus neem er twee.',
  'Het verschil met het merk zit in de prijs en verder eigenlijk nergens.',
],
'melkan-vanillevla': [
  'Geen reclame, geen slogan, geen bekende Nederlander. Alleen een pak vla.',
  'Duikt op in winkels waar je verder nooit komt, en dat is jammer.',
  'Geel, zoet, degelijk, klaar.',
  'Niemand onthoudt het merk, iedereen herkent de smaak.',
  'Wordt vooral gekozen waar de keuze beperkt is, en dan valt het mee.',
],
'milbona-vanillevla': [
  'Het zuivelmerk van de Lidl, en daarmee het bewijs dat Duitsland vla begrijpt.',
  'Blauw pak, gele vla, verrassend weinig op aan te merken.',
  'Wordt gekocht bij de grote weekboodschap en is voor het weekend op.',
  'De naam klinkt Italiaans. Dat is hij niet.',
  'Staat zelden lang in het schap, en dat zegt genoeg.',
],
'milbona-chocoladevla': [
  'Donkerder dan je van een huismerk verwacht.',
  'Prijs: laag. Dikte: prima. Verwachting: overtroffen.',
  'Wordt per meerdere pakken tegelijk gekocht door wekelijkse Lidl-gangers.',
  'Bruin pak om bruine vla, zodat er geen misverstand kan ontstaan.',
  'Hij is er niet altijd, en dat maakt het extra fijn als hij er wel is.',
],
'milsani-vanillevla': [
  'Het zuivelmerk van de Aldi, dat verder nergens bestaat.',
  'Blauw, geel en zonder enige franje.',
  'Wordt gekocht door mensen die precies weten wat ze halen.',
  'De vla die je niet zoekt maar wel meeneemt.',
  'Doet exact wat vanillevla hoort te doen en geen stap meer.',
],
'plus-vanillevla': [
  'Groen pak, gewone vla, prettige winkel.',
  'Wordt gekocht op zaterdagochtend, samen met te veel brood.',
  'Het huismerk dat het minst goedkoop aanvoelt.',
  'Staat in de koelkast alsof hij er hoort, en dat doet hij.',
  'Niemand heeft ooit spijt gehad van deze vla.',
],

/* ----------------------------------------------------------- Merken */
'melkunie-boerenvla': [
  'Boerenvla is dikker, en het woord ‘boeren’ doet daarbij het meeste werk.',
  'Wordt gegeten met een lepel, niet gedronken. Dat is een regel.',
  'Smaakt naar vla zoals mensen dénken dat vla vroeger smaakte.',
  'Er zit meer room in dan je van een gewoon pak verwacht.',
  'Op het pak staat een boerderij. De vla komt uit een fabriek. Dat is bij bijna alles zo.',
  { t: 'FrieslandCampina, waar Melkunie onder valt, is eigendom van ruim veertienduizend melkveehouders. Er is dus wél een boer bij betrokken.', echt: true },
],
'melkunie-vanillevla': [
  'Het merk dat er al was toen jij nog geen vla dronk.',
  'Geel, klassiek en volkomen onbesproken.',
  'Wordt gekocht door mensen die hun merk kozen in 1987 en daarbij bleven.',
  'Smaakt nauwelijks anders dan de grote concurrent. Zeg dat niet te hard.',
  'De vla die het meest verdient dat je hem nog eens probeert.',
  { t: 'Melkunie en Campina gingen in 1989 samen verder als Campina Melkunie. In 2001 verdween Melkunie uit de bedrijfsnaam, maar het merk bleef.', echt: true },
],
'noordertrots-vanillevla': [
  'De naam alleen al maakt het pak tien procent noordelijker.',
  'Wordt vooral boven de rivieren gevonden, en daar is men er trots op.',
  'Groen pak, gele vla, weinig woorden.',
  'Regionale zuivel drinkt precies als landelijke zuivel, maar met meer eer.',
  'Buiten de provincie zelden gezien en vaak gemist.',
],
'weerribben-volle-vla': [
  'Vernoemd naar een nationaal park, wat voor een pak vla nogal veel eer is.',
  'Volle vla betekent hier ook echt vol.',
  'Ligt in winkels waar ze de herkomst er hardop bij vertellen.',
  'Staat het mooist op tafel en het kortst in de koelkast.',
  'De vla waarbij je het pak omdraait om het verhaal te lezen.',
],
'zuivelhoeve-roomvla': [
  'Het merk dat toetjes maakt alsof het nagerechten zijn.',
  'Dikker dan nodig, en dat is precies het verkoopargument.',
  'Wordt gekocht voor de zondag en opgegeten op zaterdag.',
  'Komt uit Twente en drinkt als een compliment.',
  'Deze vla schep je. Schenken is hier geen optie.',
],

/* ------------------------------------------------------ Plantaardig */
'alpro-vanille': [
  'Sojavla die verrassend ver komt met vanille alleen.',
  'Het pak zegt plantaardig, de koelkast zegt vla, en allebei hebben ze gelijk.',
  'Smaakt naar vanille en heel licht naar boon. Dat went binnen twee glazen.',
  'Wordt gekocht door mensen met een reden, en ook door mensen zonder.',
  'De enige vla waarbij het woord ‘toetje’ op het pak echt nodig is.',
  { t: 'Alpro mag dit geen vla noemen. Zuivelnamen zijn in de EU voorbehouden aan zuivel, dus heet het een vla-variatie.', echt: true },
],
'alpro-chocolade': [
  'Chocola doet hier wat het altijd doet: alles goedmaken.',
  'De plantaardige vla die het minst plantaardig smaakt.',
  'Dikker dan de vanille, en daarmee de betere keuze.',
  'Wordt zonder discussie leeggedronken door mensen die er niets van moesten hebben.',
  'Op het pak staat soja. In het glas staat gewoon chocoladevla.',
],
'my-vay-vanillevla': [
  'De naam is een woordgrapje met vla, en dat mag.',
  'Plantaardig, geel, en niet van plan zich te verontschuldigen.',
  'Staat in het koelvak waar ook de havermelk staat.',
  'Bewijst dat vla geen koe nodig heeft, alleen een pak.',
  'De jongste vla in het schap en de meest uitgesproken.',
],
'provamel-vanille': [
  'De biologische neef van Alpro, uit precies dezelfde familie.',
  'Korter ingrediëntenlijstje, langer verhaal op het pak.',
  'Wordt gekocht in winkels met houten schappen.',
  'Zoet met mate, wat sommigen precies goed vinden.',
  'De rustigste vla van de hele plantaardige hoek.',
  { t: 'Alpro en Provamel komen uit dezelfde fabriek in Gent. Sinds de overname van moederbedrijf WhiteWave hoort die bij Danone.', echt: true },
],

/* -------------------------------------------------------- Bijzonder */
'zelfgemaakt-vla-van-oma': [
  'De enige vla zonder datum, omdat oma geen datums nodig heeft.',
  'Er zit een vel op. Dat hoort. Dat is juist het bewijs.',
  'Het recept staat nergens en iedereen weet het.',
  'Smaakt anders dan elke andere vla, en beter dan bijna alle.',
  'Wordt meegegeven in een bakje dat je moet terugbrengen. Dat is het echte doel.',
],
'vlaflip-vla-met-limonade': [
  'Vla, limonadesiroop en yoghurt. Drie dingen die alleen in Nederland samenkomen.',
  'De rode laag hoort bovenop te blijven. Bij jou is dat één keer gelukt.',
  'Officieel een toetje, in de praktijk een bouwwerk.',
  'Wordt vooral gemaakt door kinderen, en door volwassenen die dat waren.',
  'De enige vla die je moet samenstellen in plaats van inschenken.',
],
'met-vel-vla-met-een-vel': [
  'Het vel is geen bederf maar verdamping. Dat maakt het niet lekkerder.',
  'Sommige mensen eten het vel expres. Zij weten van zichzelf wie ze zijn.',
  'Ontstaat als een pak te lang open staat en niemand zich verantwoordelijk voelt.',
  'Een vel is de manier waarop vla laat zien dat hij heeft staan wachten.',
  'Roer je het erdoor, dan is het weg. Vertel dat aan niemand.',
  { t: 'Een vel is ingedroogde vla: aan de oppervlakte verdampt water en wat achterblijft is eiwit en zetmeel. Het zegt niets over bederf.', echt: true },
],
'eigen-pan-restjes-vla': [
  'Vla in een pan is vla die ergens gewoond heeft.',
  'De pan staat nog op het fornuis. Dat telt niet als koelen.',
  'Restjes zijn het lekkerst en het kortst houdbaar. Dat is oneerlijk.',
  'Er zit altijd een randje aangekoekt. Dat randje eet niemand.',
  'Wordt meestal staand opgegeten, rechtstreeks uit de pan, na elven.',
  { t: 'Bederfelijk eten hoort binnen twee uur terug de koeling in. De zone tussen 5 en 60 graden heet niet voor niets de gevarenzone.', echt: true },
],
'custard-engelse-vla': [
  'De Engelsen noemen dit custard en gieten het warm over taart.',
  'Dikker dan vla, geler dan vla, en volgens ons net géén vla.',
  'Wordt hier vooral gekocht door mensen die ooit een jaar in Engeland woonden.',
  'Warm is het een saus, koud is het een toetje. Kies zelf maar.',
  'Er zit meer ei in dan je zou willen weten.',
  { t: 'Custardpoeder is in 1837 bedacht door Alfred Bird, omdat zijn vrouw allergisch was voor ei. Hij verving de dooier door maizena.', echt: true },
],
'kantine-vla-van-het-werk': [
  'Niemand heeft deze vla gekocht. Hij was er gewoon.',
  'Staat achter iemands lunchtrommel sinds een dinsdag die niemand kan plaatsen.',
  'Er staat geen naam op, dus formeel is hij van iedereen.',
  'De enige vla die je opdrinkt terwijl je kijkt of er iemand aankomt.',
  'Verdwijnt bij de grote koelkastschoonmaak, samen met drie yoghurts.',
],
'camping-vla-uit-de-koelbox': [
  'Koud is hier een mening, geen temperatuur.',
  'Het koelelement was vanochtend nog hard. Dat is lang geleden.',
  'Smaakt op een camping beter dan thuis. Daar is geen verklaring voor.',
  'Wordt gedronken uit een plastic beker die naar afwasmiddel smaakt.',
  'Ligt onder de blikjes en is dus warmer dan de rest van de koelbox.',
  { t: 'Vla bestaat vrijwel alleen in Nederland. Neem je een pak mee over de grens, dan moet je gaan uitleggen wat het is.', echt: true },
],
'ziekenhuis-vla-op-een-dienblad': [
  'Komt in een kuipje met een dekseltje dat nooit in één keer opengaat.',
  'De portie is nauwkeurig berekend en daarmee te klein.',
  'Staat op het blad naast iets waarvan je hoopt dat het soep was.',
  'Wordt geserveerd om half zes. Daar is een reden voor die niemand kent.',
  'Voor veel mensen de enige vla die ze zich jaren later nog herinneren.',
],
'griesmeel-pudding': [
  'Dit is pudding. Pudding is geen vla. Dat blijft een gevoelig punt.',
  'Wordt gegeten met bessensap, wat de zaak er niet duidelijker op maakt.',
  'Staat in hetzelfde schap als vla en doet alsof er niets aan de hand is.',
  'Je kan hem niet inschenken. Daaraan herken je pudding.',
  'Wie dit vla noemt, krijgt het aan de stok met iemand uit Brabant.',
],
'yoghurt-echt-geen-vla': [
  'Zuur, wit en volstrekt op de verkeerde pagina beland.',
  'Yoghurt hoort bij muesli, niet bij dit gesprek.',
  'Mag mee in een vlaflip, en dat is zijn enige verdediging.',
  'Staat naast de vla in de koelkast en doet mee alsof dat afgesproken is.',
  'Bederft anders dan vla: luider, en met meer bewijsmateriaal.',
  { t: 'Yoghurt bestaat dankzij twee bacteriën: Lactobacillus bulgaricus en Streptococcus thermophilus. Vla heeft alleen zetmeel nodig.', echt: true },
],
'kwark-zeker-geen-vla': [
  'Kwark is yoghurt die naar de sportschool is geweest.',
  'Zo dik dat de lepel rechtop blijft staan. Dat is geen vla-eigenschap.',
  'Wordt gegeten met een reden, nooit zomaar.',
  'Op het pak staat hoeveel eiwit erin zit. Vla doet daar niet aan.',
  'Hoort hier niet, maar we hebben hem toch maar meegenomen.',
  { t: 'Kwark is verse kaas: melk met stremsel erin, waarna de wei uit de wrongel lekt. Dat stremsel is het verschil met yoghurt.', echt: true },
],
'chocomel-geen-vla': [
  'Dit is drinken, geen toetje. Het verschil zit in de dikte en in de bedoeling.',
  'Warm of koud altijd goed, en in geen van beide gevallen vla.',
  'Wordt door kinderen als vla beschouwd en door niemand tegengesproken.',
  'Hoe lang je hem ook laat staan, hij wordt geen vla.',
  'Het bruine pak dat in elk koelvak naast de vla staat, en daar niet hoort.',
  { t: 'Campina, Optimel, Mona, Chocomel en Fristi zijn sinds eind 2008 allemaal van hetzelfde bedrijf: FrieslandCampina.', echt: true },
  { t: 'Chocomel is in 1932 als merk vastgelegd door Martien Breij uit Baarn. Het gele pak kwam er pas in 1961.', echt: true },
],
'fristi-ook-geen-vla': [
  'Roze, zoet en afkomstig uit een ander deel van je jeugd.',
  'Rode vruchten en melk, wat in theorie niet zou moeten werken.',
  'Wordt in de kantine altijd samen met een broodje kroket verkocht.',
  'Dunner dan vla en daar volstrekt eerlijk over.',
  'Staat hier alleen omdat iemand hem naast de vla had gezet.',
  { t: 'Fristi kwam in 1955 op de markt, werd begin jaren zestig stilletjes geschrapt en is in 1986 opnieuw geïntroduceerd.', echt: true },
],
'mona-toetje': [
  'Mona is een toetje met een laagje, en dat laagje is de reden.',
  'Wordt in tweeën gedeeld terwijl er maar één kuipje is.',
  'Te dik om te schenken, dus formeel geen vla.',
  'Staat altijd naast de vla en heeft altijd meer gekost.',
  'De slagroomlaag gaat er eerst af. Daar is geen discussie over.',
],
'koelkast-achterin-gevonden': [
  'Achterin de koelkast staat de tijd stil, maar niet op de manier die je hoopt.',
  'Je weet niet meer wanneer je hem gekocht hebt. Dat is op zichzelf al informatie.',
  'Het pak is koud. Dat is het enige positieve dat we erover kunnen zeggen.',
  'Er staat iets achter de melk. Er staat altijd iets achter de melk.',
  'De enige vla die je eerst optilt en dan pas bekijkt.',
  { t: 'De deur is de warmste plek van je koelkast, achterin onderin de koudste. Dat scheelt echt dagen.', echt: true },
],
'leeg-pak-puzzel-erop': [
  'Het pak is leeg. Je hebt hem nog omdat de puzzel niet af is.',
  'Zeven verticaal is nog steeds niet ingevuld.',
  'Een leeg pak bederft niet, wat een prettige eigenschap is.',
  'Er ligt een pen naast de koelkast. Dat is geen toeval.',
  'Ooit gooit iemand dit pak weg, en dan is er ruzie.',
],
'uitgeknepen-laatste-restje': [
  'Er zit nog een halve slok in. Dat weet je, want je hebt geknepen.',
  'Het pak is bij de hoeken opengescheurd. Dat is de laatste fase.',
  'Niemand zet een uitgeknepen pak terug in de koelkast. Jij dus wel.',
  'De laatste druppel valt na drie seconden. Wacht die af.',
  'Formeel leeg, praktisch nog één keer de moeite.',
],
'onbekend-vla-zonder-etiket': [
  'Het etiket is losgeweekt in de koelkast. Dat gebeurt vaker dan je denkt.',
  'Zonder etiket is elke vla in principe elke vla.',
  'De kleur zegt vanille. De geur zegt iets anders.',
  'Je kan eraan ruiken, maar dat lost zelden iets op.',
  'Er is precies één manier om erachter te komen, en die raden we af.',
  { t: '‘Ten minste houdbaar tot’ is een kwaliteitsdatum, ‘te gebruiken tot’ een veiligheidsdatum. Op vla staat bijna altijd de eerste.', echt: true },
],

};

/* Vangnet voor een vla die nog geen eigen feitjes heeft. */
const ALGEMEEN = [
  'Over deze vla is nog niets bekend. Dat maakt hem niet minder vla.',
  'Staat koud het langst goed, staat warm het kortst goed. Zo werkt het bij allemaal.',
  'Eenmaal open telt de datum op het pak nog maar half.',
  'In de koelkastdeur is het warmer dan achterin. Dat scheelt dagen.',
  'Elke vla is ooit een pak melk geweest dat iets te veel wilde.',
];

/* Levert altijd objecten op, of er nu een tekstregel of een { t, echt } staat. */
function feitjesVan(v){
  return (FEITJES[slug(v)] || ALGEMEEN).map(f => typeof f === 'string' ? { t: f } : f);
}

/* Alle feitjes op een rij, in de volgorde van VLAS. */
function alleFeitjes(){
  return VLAS.flatMap(v => feitjesVan(v).map((f, i) => ({ v, i, t: f.t, echt: f.echt })));
}

/* Net als de vla van de dag: vast aan de kalenderdag, dus iedereen ziet
   hetzelfde en morgen is het weer wat anders. */
function feitjeVanDeDag(datum){
  const lijst = alleFeitjes();
  const d = datum || new Date();
  const dag = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  return lijst[((dag % lijst.length) + lijst.length) % lijst.length];
}
