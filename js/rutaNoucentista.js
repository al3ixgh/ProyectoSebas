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
        L.latLng(41.15497, 1.10649),
        L.latLng(41.15779, 1.10499),
        L.latLng(41.16250, 1.11253),
        L.latLng(41.15656, 1.11064),
        L.latLng(41.15429, 1.10908),
    ],
    language: 'es',
}).addTo(map);

var estiloPopup =
      {
      'maxWidth': '300',
      'overflow' : 'auto',
      'maxHeight' : '500'
      };

L.marker([41.16250, 1.11253]).addTo(map)
    .bindPopup('<strong>MAS LLEVAT</strong> <br> <p> <u>  Localització:</u>  Avinguda Onze de Setembre, núm. 124. </p> <p><u>Estil arquitectònic:</u> Noucentista </p> <p> <u>  Descripció:</u>Construcció aïllada de planta baixa i dos pisos. Compost per una estructura de volum cúbic, un petit rafal d´obra vista que protegeix l´accés principal i envoltat per un esplèndid jardí. Íntegra una coberta de quatre vessant amb teules vidriades recolzades sobre àmplies barcanes. Les façanes destaquen per incorporar impressionats esgrafiats que representen garlandes i pèrgoles sobre columnes salomòniques. A l´interior de l´edifici ressalta la presència d´elements ornamentals com les pintures dels sostres, el mobiliari original i les cobertes de volta estrellada. L´edifici és un viu vestigi de la introducció del noucentisme a la ciutat.</p> <u>Construcció:</u>1924-1925 <p> <u>Arquitecte:</u>  Domènec Sugrañes Gras </p> </p> <p> <u> Ús original</u>: Habitatge unifamaliar d´estiueg família Llevat </p> <p><u>Història:</u>L´empresari Josep Llevat Sotorra va encarregar a Domènec Sugranyes la projecció d´un mas a la zona de la Munta i Baixa. Les famílies benestants de la ciutat construïren un seguit de masos concebuts com a residències d´estiueig properes a la ciutat i el mas és un exemple viu exemple que ha perdurat fins avui en dia en un bon estat de conservació. L´edifici va passar de casa d´estiueig a ser una segona residència de gent gran de caràcter privat.   <p><u> Ús actual:</u> Residència privada per a la gent gran</p> <p> <u> Documentació històrica:</u></p><p><u> ', estiloPopup)
    .openPopup();

L.marker([41.15429, 1.10908]).addTo(map)
    .bindPopup(' <strong> CENTRE LECTURA</strong> <p> <u>  Localització:</u>  Carrer Major, núm. 15 </p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u>Conjunt arquitectònic format per diverses construccions de les quals cal ressaltar la principal. L´edifici principal es compon de planta Baixa i tres pisos, però els més interessants són el vestíbul i la primera planta. La façana manté una composició a través de tres eixos verticals on destaquen els paràmetres neoclàssics com les columnes jòniques, els balcons laterals corbats, els balustres i una cornisa amb mènsules sostinguda per quatre parelles de cartel·les amb decoració vegetal. A la planta baixa hi ha un gran vestíbul on predomini la presencia a columnes amb capitell jònic, una esplèndida escala de tipus imperial de graons de marbre amb barana de ferro forjat i un paviment ceràmic de color blanc i negre. Al final de l´esquerra del vestíbul trobem l´accés a l´entrada al Teatre Bartrina. Al primer pis format per una planta rectangular s´hi troba la biblioteca la qual abasta un espai hàbil de 300 m² i 125 places de lectura. Aquesta construcció converteix l´entitat del centre lectura com un centre de referència cultural del país tant per la seva tasca com la per l´atractiu singular del seu centre.<p> <u>Construcció:</u>1920 <p> <u>Arquitecte:</u> FALTA CERCAR </p> </p> <p> <u> Ús original</u>: Entitat destinada al foment i a la difusió de la cultura "Centre Lectura"  </p> <p><u>Història:</u>L´any 1916, el polític i empresari va reusenc Evarist Fàbregues va comprar l´antic palau dels marquesos de Tamarit, situat al carrer Major i el va donar cedir a l´entitat del Centre de Lectura com a nova seu del centre. A més, va finançar les obres de remodelació, projectades per l´arquitecte reusenc, Josep Simó i Bofarull. El nou edifici s´inaugurà el 1921 per un seguit d´actes presidits per Josep Puig i Cadafalch, president de la Mancomunitat. Des de l´establiment del centre a les noves instal·lacions la seva activitat ha anat creixent convertint-se en una entitat de referència de tot Catalunya.  <p><u> Ús actual:</u>  Entitat destinada al foment i a la difusió de la cultura "Centre Lectura" </p> <p> <u> Documentació històrica:</u></p><p> ', estiloPopup)
    .openPopup();

L.marker([41.15779, 1.10499]).addTo(map)
    .bindPopup(' <strong> </strong>EDIFICI DE LA CAIXA DE PENSIONS</strong><p> <u>  Localització:</u>  Plaça del Pintor Fortuny, núm. 1</p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u>Construcció composta per dos cossos disposats en angle recte annexats per un cos central que té una façana de perfil convex. Cada cos s´accentua per una cúpula. Respecte a la façana principal la trobem estructurada verticalment en tres sectors, la planta baixa, amb un tractament de pedra distintiu, un sector mitjà, conformat per la primera i segona planta, i un tercer pis rematat per cúpules i les baranes de balustres del terrat. Ressalten les quatre columnes d´ordre corinti de doble alçada, que indiquin l´eix de simetria de l´edifici. Bastiment que plasma els valors del noucentisme d´una forma distintiva i peculiar. <p> <u>Construcció:</u>1929-1931 <p> <u>Arquitecte:</u> Enric Sagnier Villavecchia </p> </p> <p> <u> Ús original</u>: Caixa de pensions  </p> <p><u>Història:</u> En un solar que havia ocupat l´antiga presó, de propietat municipal, comprat per l´entitat d´estalvi (La Caixa), l´arquitecte Enric Sagnier, personatge lligat amb el director general de la Caixa de Pensions va projectar l´edifici. L´arquitecte va ressaltar l´angle de visió de l´edifici, encarat als carrers de Llovera i de l´Amargura, ja que en l´actual plaça de la Llibertat es trobava ocupada en aquell moment pel quarter de cavalleria. L´edifici va patir remodelacions durant els anys vuitanta i noranta i durant l´inici de la nova centúria s´hi va instal·lar una cambra cuirassada. <p><u> Ús actual:</u> Sucursal bancària "La Caixa"</p> <p> <u> Documentació històrica:</u></p> ', estiloPopup)
    .openPopup();

L.marker([41.15497, 1.10649]).addTo(map)
    .bindPopup('<strong> MAGATZEMS VILELLA</strong> <p> <u>  Localització:</u>  Carrer de Sant Esteve, núm. 17</p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u> Edifici compost per planta baixa, entresòl i dues plantes. A la planta baixa i l´entresòl està bastida mitjançant pedra, mentre que la resta de l´edifici presenta una façana estucada, menys pel sector nord i la cornisa superior on s´empra l´obra vista. Solament hi ha ornamentació en el coronament de l´edifici. El sector nord destaca per tenir una façana d´un cost d´obra vista que ocupa els dos pisos superiors i que és coronat per un timpà que sobresurt enfront l´alçada respecte de la resta de l´edifici. L´aixecament dels Magatzems Vilella respon al nou model urbà que cerca el noucentisme fonamentat en un nou llenguatge arquitectònic.</p>  <p> <u>Construcció:</u>1919 <p> <u>Arquitecte:</u> Pere Domènech Roura</p> </p> <p> <u> Ús original</u> Magatzem de fruits secs</p> <p><u>Història:</u>Magatzems promoguts per l´empresari Ramon Vilella, reconegut comerciant centrat en l´exportació de fruits secs de la ciutat. Els plànols del projecte de l´any 1919 són signats per l´arquitecte Pau Monguió Segura, però el disseny s´atribueix a Pere Domènec Roura. Durant la guerra civil l´edifici va patir rellevants danys així que va ser reformat tot seguint els plànols originals  <p><u> Ús actual:</u> Falta cercar</p> <p> <u> Documentació històrica:</u></p><p>', estiloPopup)
    .openPopup();

L.marker([41.15656, 1.11064]).addTo(map)
    .bindPopup(' <strong> CASA FÀBREGAS</strong> <p> <u>  Localització:</u>  Plaça de Catalunya, núm. 9 </p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u>Habitatge conformat per planta Baixa, entresòl i tres pisos que destaca per tenir una gran tribuna a la planta principal aprofitant la corba que forma l´edifici. La cantonada de l´edificació es remata amb un cos àtic que sobresurt per damunt de la cornisa superior fent la corba i ressaltant encara més. La singularitat de la construcció recau la seva composició classicista i la gran riquesa basada en la decoració barroca i academicista on dominen els esgrafiats, encoixinats, frontons, balustres, timpans, mènsules i arcs motllurats. Respecte a l´interior de la planta principal es conserven la decoració original, l´escala monumental i els enteixinats de diverses habitacions. Aquesta obra arquitectònica es pot considerar la màxima expressió del noucentisme reusenc.<p> <u>Construcció:</u>1920 <p> <u>Arquitecte:</u>  Josep Simó i Bofarull </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar famíla Fàbregas </p> <p><u>Història:</u>Impulsada per Evarist Fàbregas (1868-1938) adinerat banquer i comerciant reusenc, fundador del Banc de Catalunya i mecenes de moltes activitats culturals i de beneficència. L´edifici va ser encarregat a l´arquitecte Josep Simó i Bofarull, el qual va plasmar una arquitectura de Beaux Arts centrada en la cara més italianitzada del Noucentisme català. A la planta baixa hi ha la farmàcia Ornosa, heretada de Pau Ornosa, farmacèutic militar i alcalde de Reus (1950-51) , del seu oncle Antoni Serra i Pàmies.  <p><u> Ús actual:</u> Farmàcia Ornosa a la planta baixa i habitatge unifamiliar en la resta de plantes </p> <p> <u> Documentació històrica:</u></p><p> ', estiloPopup)
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