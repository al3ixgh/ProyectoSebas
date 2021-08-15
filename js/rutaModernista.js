var map = L.map('map').
    setView([41.154831576354546, 1.1085769172452447],
        15);


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


L.Routing.control({
    waypoints: [
        L.latLng(41.16611, 1.08544),
        L.latLng(41.16546, 1.09494),
        L.latLng(41.16562, 1.10188),
        L.latLng(41.15704, 1.10205),
        L.latLng(41.15627, 1.10410),
        L.latLng(41.15627, 1.10410),
        L.latLng(41.15477, 1.10843),
    ]
}).addTo(map);


L.marker([41.15477, 1.10843], { icon: redIcon }).addTo(map)
    .bindPopup('<strong>CASA NAVÀS</strong> <br> <p> <u>  Localització:</u>  Plaça del Mercadal, núm. 7 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>És una construcció de dos pisos, planta baixa i de soterrani que ofereix una façana de pedra amb una estructura que continua amb l´estètica porxada de la resta de la plaça. Destaca l´adaptació de l´ornamentació floral com a llenguatge bàsic de l´estètica exterior, l´accés i a l´interior, tot representant un jardí artificial. Un edifici on predomina l´ús de la llum zenital o lateral, matisada a través dels vitralls decorats, els elements ornamentals i el mobiliari únic. L´edifici a acabat convertint-se en un símbol de la ciutat i el modernisme així com un viu testimoni de la concepció holística pròpia dels grans arquitectes del moment. <p> <u>Construcció:</u>1901-1908 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar i baixos comercials </p> <p><u>Història:</u> Joaquim Navàs, comerciant de teixits de Reus i polític republicà reformista va encarregar a Lluís Domènech i Montaner el projecte de construcció d´un edifici que agrupés la botiga i l´habitatge. El 26 de gener de 1938, durant la guerra civil, un bombardeig va destruir parcialment l´edifici, sent reconstruïda una part el 1945. L´any 1990 va ser declarat Bé Cultural d´Interès Nacional. L´edifici fa anys que és visitable de cara el públic però amb un horari força limitat. Amb l´últim canvi de propietari l´any 2017 l´edifici va reobrir el 2018 com a museu amb una nova predisposició. L´any 2019 la Casa Navàs va ser visitada per aproximadament 32.000 persones. Avui en dia és un símbol icònic i un reclam turístic de la ciutat. <p><u> Ús actual:</u> Centre cultural i museu</p> <p> <u> Documentació històrica:</u></p><p>')
    .openPopup();


L.marker([41.16611, 1.08544], { icon: redIcon }).addTo(map)
    .bindPopup('<strong>INSTITUT PERE MATA </strong><br> <p> <u>  Localització:</u>  Ctra. de  l´Institut Pere Mata, núm. 1 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>Aquest complex arquitectònic format pels diversos pavellons, l´antic habitatge del sotsdirector del centre i del capellà i la tanca, conté un llenguatge constructiu comú que fan del conjunt un espai insòlit. Les construccions han estat bastides amb façanes d´obra vista sobre un sòcol de pedra. De forma majoritària les cobertes són de doble vessant amb teules àrabs. A les façanes predomina la utilització de ceràmica esmaltada blava i blanca i en els emmarcats de finestres i portes s´empra l´ús pedra calcària. La bellesa immesurable que representa aquest conjunt ha fet que esdevingui un símbol del modernisme i un reclam per milers de visitants.<p> <u>Construcció:</u>1897-1912 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Hospital psiquiàtric </p> <p><u>Història:</u> A finals del segle XIX, el doctor reusenc Emili Briansó Planes, va proposar la construcció d´un nou centre psiquiàtric que dones assistència als malalts mentals de la ciutat. Va aconseguir convèncer a 35 comerciants, professionals liberals, propietaris i industrials i es va constituir la Sociedad Manicomio de Reus. El projecte va ser confiat a Lluís Domènech i Montaner, el qual va seguir les últimes línies de tractament de malalts mentals a l´hora de dissenyar l´edifici. Des de l´any 1983 la institució va començar a desenvolupar activitats de docència, formació i investigació convertint-se en un hospital universitari de referència. <p><u> Ús actual: Hospital psiquiàtric</u> </p> <p> <u> Documentació històrica:</u></p> ')
    .openPopup();


L.marker([41.16546, 1.09494], { icon: redIcon }).addTo(map)
    .bindPopup('<strong> MAS GASULL </strong><br> <p> <u>  Localització:</u>Carrer Barranc de la Mina, 7I  </p> <p><u>Estil arquitectònic:  </u> Modernista</p> <p> <u>  Descripció:</u>És una edificació aïllada estructurada mitjançant planta baixa, pis i golfes. Està conformat per una planta rectangular amb l´eix de simetria orientat en sentit sud-est nord-oest. Destaca per tenir una torre de planta quadrada a l´angle sud que concorda amb la caixa de l´escala. Conté una coberta inclinada conformada per un pendent a la part central, la torre i la part nord-est recoberta per teula plana de ceràmica vidriada. A l´exterior domina la presència d´uns acabats en forma d´estucats tot alternant faixes horitzontals d´obra vista amb faixes llises a la planta baixa i imitant obra vista al primer pis. A l´interior podem observar elaborats frescos i sanefes que decoren les estances amb motius florals i paisatgístics. A tocar del mas hi ha una petita capella bastida de forma simultània amb el mas que segueix la mateixa configuració arquitectònica.<p> <u>Construcció:</u>Darreries del segle XIX. <p> <u>Arquitecte:</u> Pere Caselles i Tarrats </p> </p> <p> <u> Ús original</u>: Habitatge unifamaliar d´estiueg família Gasull</p> <p><u>Història:</u> El mas va ser construït pel comerciant d´olis Fèlix Gasull i Roig sota la projecció de l´arquitecte Pere Caselles. Amb l´assassinat de Fèlix Gasull Roig durant els anys vint (pistolerisme) el mas va entrar en declivi. Durant la postguerra el mas passat a mans de la família Vernís (antics masovers) fins a la creació del Col·legi Mowgli durant la dècada dels setanta, quan va ser remodelat per satisfer les necessitats educatives. A finals de la dècada dels anys noranta es posa a la venda sent comprat per la família Gomis. Després de deu anys d´inversió i dedicació van retornar l´esplendor el mas, recuperant gran part del seu estat original, tot convertint-lo en un habitatge unifamiliar únic. <p><u> Ús actual:</u> Habitatge unifamiliar</p> <p> <u> Documentació històrica:</u></p> ')
    .openPopup();



L.marker([41.15704, 1.10205], { icon: redIcon }).addTo(map)
    .bindPopup('  <strong> ESCOLA PRAT DE LA RIBA</strong><p> <u>  Localització:</u>  Avinguda de Prat de la Riba, núm. 36 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>Es tracta d´un edifici aïllat, fonamentat en un sol nivell i que es caracteritza per tenir una planta en forma de T. La distribució dels espais és simètrica a causa de la separació original per gènere dels alumnes. Les façanes estan bastides amb materials de fàcil manteniment, obra vista i pedra. Les cobertes de dos vessants contenen teules vidriades de color groc i verd, tot formant imatges geomètriques. La decoració exterior es fonamenta en l´ús de plafons ceràmics amb dibuixos blaus sobre un fons blanc es plasmen episodis del Nou Testament i representacions florals geomètriques de tipus seriat. Aquesta configuració arquitectònica és un exemple de la necessitat de donar resposta als requeriments pedagògiques del moment i d´edifici modernista públic.<p> <u>Construcció:</u>1909-1917 <p> <u>Arquitecte:</u> Pere Casellex i Tarrats </p> </p> <p> <u> Ús original</u>: Centre escolar </p> <p><u>Història:</u> El projecte sota direcció i disseny de l´arquitecte municipal Pere Caselles del centre educatiu va ser redactat el 1908 tot aprofitant una convocatòria de subvencions estatals. L´any següent l´obra va ser adjudicada, però la lenta evolució de la construcció va provocar que la Direcció general de Primera Enseñanza presentes l´any 1913 una queixa a l´Ajuntament de Reus pel retard. No va ser fins al juny de 1917 que l´escola es va inaugurar. <p><u> Ús actual:</u> Centre d´educació infantil i primària </p> <p> <u> Documentació històrica:</u></p><p><u> ')
    .openPopup();


L.marker([41.16562, 1.10188], { icon: redIcon }).addTo(map)
    .bindPopup(' <strong> XALET SERRA</strong><p> <u>  Localització:</u>  	Ctra. de Castellvell, núm. 20. </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>L´edifici va ser bastit com un complex, dividit en laboratori farmacèutic i la resta com a zona residencial. El Xalet Serra que és la part conserva actualment destaca per la torre de planta quadrada fonamentada en tres nivells d´alçada, coberta per una teulada piràmide i que incorpora mansardes, penell i un voladís reforçat amb tirants de fusta. L´exterior de la torre barreja la utilització del mur de maó, l´estucat, la ceràmica vidriada i la fusta. A mitjana alçada també hi ha finestres d´arc de ferradura que donen un caràcter exòtic al conjunt. A l´espai inferior trobem una gran sala de planta centralitzada amb una coberta de tipus cúpula emprada com a menjador. En aquesta estança i trobem unes pintures de Tomas Bergadà de temàtica floral que recorren tot el sostre. El disseny i l´ornamentació que modela aquesta construcció li concedeixen un encant únic.<p> <u>Construcció:</u>1912 <p> <u>Arquitecte:</u> Joan Rubió i Bellver </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar famíla Serra</p> <p><u>Història:</u> El farmacèutic Antonio Serra va adquirir l´any 1910 uns terrenys a la carretera de Castellvell sortint de Reus on va establir un laboratori on hi havia un antic habitatge annex a unes instal·lacions industrials. Va encomanar a Joan Rubió i Bellver el projecte de reforma integral de l´antiga casa. De l´estructura original avui en dia només ha perdurat la torre-mirador i el primer cos de l´edifici. La part que conformava el jardí i els espais industrials es troben ocupats per blocs de pisos en l´actualitat. <p><u> Ús actual:</u> Residència privada</p> <p> <u> Documentació històrica:</u></p><p><u> ')
    .openPopup();



L.marker([41.15627, 1.10410], { icon: redIcon }).addTo(map)
    .bindPopup('<strong> CASA RULL</strong><p> <u>  Localització:</u>   Carrer Sant Joan, núm. 27 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripició:</u>Edificació de planta rectangular i que consta de planta baixa i dos pisos. Les façanes estan bastides amb pedra i es troben exemptes tres d´elles mentre que una actua com a paret amb la Casa Gasull. Destaca pel grau de decoració de les façanes on podem veure una balconada única amb decoració floral, portes i finestres d´inspiració gòtica i els merlets que coronen l´edifici donant-li un aire d´opulència. També incorpora un jardí i una columna exempta que recorre l´angle format per la façana principia i lateral, tot unint el terrat amb el jardí. La seva coberta resta composta per un terrat pla en la part anterior i un cobert inclina en dos vessant en el par posterior. El grau d´ornamentació que actua com a llenguatge descriptiu de l´excepcional construcció fa que sigui un dels exponents més representatius del moviment modernista de Reus. </p> </u> Construcció:</u>1900 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar família Rull/p> <p><u>Història:</u> El conegut notari Pere Rull i Trilla va confiar a l´arquitecte Lluís Domènech i Muntaner la creació del seu habitatge particular. Com herència va llegar a l´Ajuntament de Reus l´edifici conjuntament amb les seves col·leccions sota condicions que fos utilitzat com a museu. L´habitatge ha estat reutilitzat com a museu municipal, arxiu històric i actualment seu de la regidoria de cultura. La construcció va ser restaurada l´any 1996 sota la direcció de l´arquitecte Joan Figuerola. <p><u> Ús actual:</u> Seu de l’Àrea de cultura i de l’Institut Municipal Reus Cultura.</p> <p> <u> Documentació històrica:</u></p><p> ')
    .openPopup();



var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);



var control = L.Routing.control({
    waypoints: [
        L.latLng(41.66, -4.74),
        L.latLng(41.642, -4.6982)
    ],
    routeWhileDragging: true,
    reverseWaypoints: true,
    showAlternatives: true,
    altLineOptions: {
        styles: [
            { color: 'black', opacity: 0.15, weight: 9 },
            { color: 'white', opacity: 0.8, weight: 6 },
            { color: 'blue', opacity: 0.5, weight: 2 }
        ]
    }
}).addTo(map);

L.Routing.errorControl(control).addTo(map);

L.Routing.Formatter = L.Class.extend({
    options: {
        language: 'sp'
    }
});