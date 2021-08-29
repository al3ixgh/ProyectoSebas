var map = L.map('map').
        setView([41.154831576354546, 1.1085769172452447],
            15);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);

    var goldIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.Routing.control({
        waypoints: [
            L.latLng(41.14654, 1.11431),
            L.latLng(41.15649, 1.11027),
            L.latLng(41.16427, 1.11157),
            L.latLng(41.15410, 1.10001),
            L.latLng(41.15290, 1.10381),
        ],
        language: 'es'
    }).addTo(map);

    var estiloPopup =
      {
      'maxWidth': '300',
      'overflow' : 'auto',
      'maxHeight' : '500'
      };

    L.marker([41.14654, 1.11431], { icon: goldIcon }).addTo(map)
        .bindPopup('<strong>MAS IGLESIAS</strong> <br><p> <u>  Localització:</u>Plaça de Ramon Amigó, núm. 1</p> <p><u>Estil arquitectònic:</u> Eclèctic </p> <p> <u>  Descripció:</u>Construcció aïllada de planta quadrada conformada per planta baixa, primer pis i golfes. A la dreta i esquerra de l´edifici podem trobar dos elements de planta baixa i pis amb galeria correguda d´arcades jòniques i barana de balustre. Manté una composició simètrica a través de les obertures de la planta baixa, balconeres amb llindes al pis i quadrangulars a les golfes. Incorpora una cornisa amb mènsules que imiten motius florals. A més hi ha terrat i terra en el centre amb balustrada de balustres i quatre pinyes de pedra artificial en els extrems. La planta baixa és de color de pedra i la resta de façana de color granat. Respecte a l´interior cal destacar un paviment ceràmic, les pintures dels sostres, l´ornamentació floral, els medallons, les escales i columnes de marbre blanc i els vidres glaçats i emplomats de colors. El bastiment és un exemple excel·lent de casa senyorial del segle XIX d´estil eclèctic.<p> <u>Construcció:</u> <p> <u>Arquitecte:</u> </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar </p> <p><u>Història:</u>L´adinerat propietari, industrial, comerciant i financer Josep Òdena Pujol (1809) va fer construir el mas l´any 1872. Amb la mort de Josep Òdena, i el casament de la seva filla amb el propietari agrícola i industrial Josep Iglesias el mas passar anomenar-se Mas Iglesias. Durant la Guerra Civil del 1936-1939, fou requisat per les autoritats republicanes i és convertit en un Institut de Reeducació d´Invàlids municipal. Amb l´acabament de la guerra, el 1939 el mas retornà a la família Iglesias fins que, el 1951, es vengué a l´enginyer Llansó de Barcelona, que continuà explotat agrícolament la finca. Posteriorment va passar a mans de l´acabalada família reusenca Miarnau, mantenint els masovers fins a la dècada de 1980. Durant la primera dècada d´aquesta centúria l´Ajuntament de Reus va rehabilitar l´edifici per a adaptar-lo com la seu del Centre de la Imatge Mas Iglesias, hereu de la Fototeca Municipal.  <p><u> Ús actual:</u> Centre de la Imatge Mas Iglesias (CIMIR) </p> <p> <u> Documentació històrica:</u></p><p><u>',estiloPopup)
        .openPopup();

    L.marker([41.15410, 1.10001], { icon: goldIcon }).addTo(map)
        .bindPopup('<strong> ANTIC ESCORXADOR MUNICIPAL DE REUS. </strong><br> <p> <u>  Localització:</u>  C. de l´Escorxador, núm. 1</p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Conjunt de construccions encerclat per una tanca de maó, pedra i reixa de ferro, de la qual únicament queda en l´entrada. Complex compost per dos volums principals i unes quadres que s´obrien en semicercle des del cos central. La nau central de sacrificis era un ampli espai rectangular de planta lliure, amb coberta subjectada per columnes de ferro colat i amb la presència d´una lluerna central que proporcionava il·luminació zenital i ventilació. L´edifici és una excel·lent mostra de l´arquitectura industrial del segle XIX que destaca per ser capdavanter en el seu disseny i funcionalitat.<p> <u>Construcció:</u>1889-1994 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Escorxador municipal </p> <p><u>Història:L´escorxador va ser construït sobre els terrens desamortitzats de l´hort del convent dels carmelites descalços de Sant Joan. El primer projecte és de l´arquitecte Francesc Barba (1883) però no va ser aprovat fins al 1889. Finalment el projecte va ser retocat per l´arquitecte municipal interí Josep Subietas i després per l´arquitecte Pere Caselles. El centre ja funcionava com a tal el 1893, però no va ser finalitzat fins al 1894. Els arquitectes Joan Figuerola i Joan C. Gavaldà van reformar l´edifici entre el 2000-2003 en el complex actual que acull la Biblioteca Xavier Amorós i una seu de la Universitat Oberta de Catalunya.</u>  <p><u> Ús actual:</u> Biblioteca Central Xavier Amorós de Reus i una de les seus de la Universitat Oberta de Catalunya (UOC).</p> <p> <u> Documentació històrica:</u></p><p><u>',estiloPopup)
        .openPopup();

    L.marker([41.15290, 1.10381], { icon: goldIcon }).addTo(map)
        .bindPopup('<strong> VAPOR VELL. </strong><br> <p> <u>  Localització:</u>  Carrer de Sant Serapi, núm 2. </p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Nau industrial rectangular d´una sola planta que conté un pati interior. La construcció presenta un sòcol de pedra al llarg de la façana i a l´entrada del pati. Destaca per tenir una composició simètrica a través de les obertures de la planta baixa. Les portes i finestres que hi trobem són d´arc de mig punt rebaixat i incorporen una ornamentació de motllura a l´arc i als muntats. Hi ha un conjunt de cinc grups de finestres geminades, i remat de la barana en forma ondulada, ornades per motllura i botons de pedra artificial. La porta d´accés ressalta per tenir una composició diferent i per sobre hi ha un arc monumental rebaixat de maó, que recolza sobre mènsules de pedra cisellada, coronant en tres merlets culminats per arcs rodons. El coronament presenta arquets de punt rodó amb un botó addicional a la façana del pati. La façana destaca per ser d´obra vista i fusteria de fusta. És un testimoni del llenguatge arquitectònic industrial d´inicis del segle XX.<p> <u>Construcció:</u> 1855 <p> <u>Arquitecte:</u> Desconegut </p> </p> <p> <u> Ús original</u>: Indústria cotonera "La Manufacturera de Algodón" </p> <p><u>Història:</u>L´any 1846, a través de la unió de "La Industrial Reusense" i la "Canals Pàmies y Huguet" es fundar la "Manufacturera de Algodón" coneguda com "el Vapor Vell", la primera factoria de la ciutat i una de les més importants fàbriques de filatures i teixits de cotó de la Catalunya vuitcentista. Aquesta empresa arribà a ocupar més d´un miler de treballadores i a tenir 200 telers mecànics. El 1876, el Vapor Vell va patir un incendi que reparà immediatament degut a l´any següent va rebre la visita d´Alfons XII. La crisi provocada per la sobreproducció de cotó i per les dificultats econòmiques provocades per l´obsolescència de la maquinària van fer que el novembre de 1877 la fàbrica tancar. El febrer de 1905 la "Manufacturera del Algodón "va construir una nova construcció de nova al carrer de Sant Serapi que ocupava una extensió de 10,0000 m². L´empresa va plegar cap al 1960. El 2006 la part de l´edifici inclosa a l´inventari del Patrimoni Arquitectònic, va ser restaurada i actualment s´empra per a l´Ajuntament de Reus com a magatzems.</u>  <p><u> Ús actual:</u>  Espai destinat a la preservació i custòdia dels diferents elements festius de la ciutat</p> <p> <u> Documentació històrica:</u></p><p><u> ',estiloPopup)
        .openPopup();

    L.marker([41.15649, 1.11027], { icon: goldIcon }).addTo(map)
        .bindPopup('<strong>  ANTIC BANC ESPANYA.</strong> <p> <u>  Localització:</u>  Raval de Santa Anna, núm. 59. </p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Es tracta d´una construcció cantonera composta per un soterrani, planta baixa, tres pisos i una àmplia terrassa. L´angle agut que doblega la façana dels carrers provoca que l´edifici ressalti tot adquirint una aparença de torre. La façana principal s´ordena de forma simètrica al voltant d´un eix central que conté l´únic accés. La col·locació dels buits, així com la valoració en vertical i horitzontal responen a les directrius clàssiques amb components neobarrocs tot i que la decoració correspon al llenguatge modernista. La diversa ornamentació escultòrica en baix relleu fa al·lusió a diferents motius referents al comerç, l´agricultura i la indústria. La construcció representa la potent iniciativa industrial i comercial de la societat reusenca plasmada en el llenguatge constructiu del moment.<p> <u>Construcció:</u>1902-1904 <p> <u>Arquitecte:</u> Pere Caselles i Tarrats </p> </p> <p> <u> Ús original</u>: Sucursal bancària </p> <p><u>Història:</u>Construït en el solar de l´antic Teatre Principal, el 1902 elaborar el projecte de l´obra, durant la construcció no es va realitzar totalment el disseny de Pere Caselles deixant de bastir un pinacle que integrava un rellotge per raons pressupostàries. L´any 1953 es van dur a terme obres de reforma de les estructures i de la decoració interior. L´any 1978 el banc va tancar les oficines i va cedir l´edifici en mans de l´Ajuntament de Reus el qual va instal·lar més endavant Museu d´Arqueologia Salvador Vilaseca, inaugurat el 1984.  <p><u> Ús actual:</u> Museu de Reus Salvador Vilaseca</p> <p> <u> Documentació històrica:</u>-Expedient de Foment FALTEN </p><p><u> ',estiloPopup)
        .openPopup();

    L.marker([41.16427, 1.11157], { icon: goldIcon }).addTo(map)
        .bindPopup('<strong> MAS MIARNAU </strong><br><p> <u> Localització:</u>  Carrer Onze de Setembre, núm. 112. </p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Edificació de planta rectangular fonamentada en planta baixa i primer pis. Ressalta per incorporar esgrafiats amb motius florals i jugar amb els colors ocres i terra, adquirint un aire singular. Integra elements de ferro forjat i està envoltat per un magnífic jardí. És una bona mostra dels masos d´estiueig del segle XIX.<p> <u>Construcció:</u>1901 <p> <u>Arquitecte:</u> Desconegut </p> </p> <p> <u> Ús original</u>: Habitatge unifamaliar d´estiueg de la Miarnau </p> <p><u>Història:</u> El promotor del mas va ser Jose Miarnau Navàs (1872-1934), el qual gaudia de tenir la concessió d´obres de Renfe, va batejar el bastiment com a "Villa Dolores" en honor a la seva esposa Dolores Ciurana Solé. Entre el desembre de 2002 i l´abril de 2004 l´arquitecte Gabriel Bosques Sánchez s´encarregà de la rehabilitació integral de l´antic mas, amb la finalitat d´adaptar l´edifici al nou ús docent. Durant el juny de 2005 l´Ajuntament de Reus cedir totalment restaurat i remodelat a la Universitat Rovira i Virgili amb la finalitat d´ubicar-hi la seu del Centre de Formació Permanent (CFP) de la Fundació URV. <p><u> Ús actual:</u> Centre d’Innovació i Formació Permanent de la Fundació URV .</p> <p> <u> Documentació històrica:</u> Cadastre 1949: poligon 49.</p><p><u> ',estiloPopup)
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
