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

var estiloPopup =
      {
      'maxWidth': '300',
      'overflow' : 'auto',
      'maxHeight' : '500'
      };

L.marker([41.15477, 1.10843], { icon: redIcon }).addTo(map)
    .bindPopup('<strong>CASA NAVÀS</strong> <br> <p> <u>  Localització:</u>  Plaça del Mercadal, núm. 7 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>És una construcció de dos pisos, planta baixa i de soterrani que ofereix una façana de pedra amb una estructura que continua amb l´estètica porxada de la resta de la plaça. Destaca l´adaptació de l´ornamentació floral com a llenguatge bàsic de l´estètica exterior, l´accés i a l´interior, tot representant un jardí artificial. Un edifici on predomina l´ús de la llum zenital o lateral, matisada a través dels vitralls decorats, els elements ornamentals i el mobiliari únic. L´edifici a acabat convertint-se en un símbol de la ciutat i el modernisme així com un viu testimoni de la concepció holística pròpia dels grans arquitectes del moment. <p> <u>Construcció:</u>1901-1908 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar i baixos comercials </p> <p><u>Història:</u> Joaquim Navàs, comerciant de teixits de Reus i polític republicà reformista va encarregar a Lluís Domènech i Montaner el projecte de construcció d´un edifici que agrupés la botiga i l´habitatge. El 26 de gener de 1938, durant la guerra civil, un bombardeig va destruir parcialment l´edifici, sent reconstruïda una part el 1945. L´any 1990 va ser declarat Bé Cultural d´Interès Nacional. L´edifici fa anys que és visitable de cara el públic però amb un horari força limitat. Amb l´últim canvi de propietari l´any 2017 l´edifici va reobrir el 2018 com a museu amb una nova predisposició. L´any 2019 la Casa Navàs va ser visitada per aproximadament 32.000 persones. Avui en dia és un símbol icònic i un reclam turístic de la ciutat. <p><u> Ús actual:</u> Centre cultural i museu</p> <p> <u> Documentació històrica:</u></p><p>',estiloPopup)
    // .openPopup();
    // L.marker([41.14654, 1.11431], { icon: goldIcon }).addTo(map)
L.marker([41.14654, 1.11431], { icon: goldIcon }).addTo(map)

    .bindPopup('<strong>MAS IGLESIAS</strong> <br><p> <u>  Localització:</u>Plaça de Ramon Amigó, núm. 1</p> <p><u>Estil arquitectònic:</u> Eclèctic </p> <p> <u>  Descripció:</u>Construcció aïllada de planta quadrada conformada per planta baixa, primer pis i golfes. A la dreta i esquerra de l´edifici podem trobar dos elements de planta baixa i pis amb galeria correguda d´arcades jòniques i barana de balustre. Manté una composició simètrica a través de les obertures de la planta baixa, balconeres amb llindes al pis i quadrangulars a les golfes. Incorpora una cornisa amb mènsules que imiten motius florals. A més hi ha terrat i terra en el centre amb balustrada de balustres i quatre pinyes de pedra artificial en els extrems. La planta baixa és de color de pedra i la resta de façana de color granat. Respecte a l´interior cal destacar un paviment ceràmic, les pintures dels sostres, l´ornamentació floral, els medallons, les escales i columnes de marbre blanc i els vidres glaçats i emplomats de colors. El bastiment és un exemple excel·lent de casa senyorial del segle XIX d´estil eclèctic.<p> <u>Construcció:</u> <p> <u>Arquitecte:</u> </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar </p> <p><u>Història:</u>L´adinerat propietari, industrial, comerciant i financer Josep Òdena Pujol (1809) va fer construir el mas l´any 1872. Amb la mort de Josep Òdena, i el casament de la seva filla amb el propietari agrícola i industrial Josep Iglesias el mas passar anomenar-se Mas Iglesias. Durant la Guerra Civil del 1936-1939, fou requisat per les autoritats republicanes i és convertit en un Institut de Reeducació d´Invàlids municipal. Amb l´acabament de la guerra, el 1939 el mas retornà a la família Iglesias fins que, el 1951, es vengué a l´enginyer Llansó de Barcelona, que continuà explotat agrícolament la finca. Posteriorment va passar a mans de l´acabalada família reusenca Miarnau, mantenint els masovers fins a la dècada de 1980. Durant la primera dècada d´aquesta centúria l´Ajuntament de Reus va rehabilitar l´edifici per a adaptar-lo com la seu del Centre de la Imatge Mas Iglesias, hereu de la Fototeca Municipal.  <p><u> Ús actual:</u> Centre de la Imatge Mas Iglesias (CIMIR) </p> <p> <u> Documentació històrica:</u></p><p><u>',estiloPopup)
    // .openPopup();

L.marker([41.16250, 1.11253]).addTo(map)
    .bindPopup('<strong>MAS LLEVAT</strong> <br> <p> <u>  Localització:</u>  Avinguda Onze de Setembre, núm. 124. </p> <p><u>Estil arquitectònic:</u> Noucentista </p> <p> <u>  Descripció:</u>Construcció aïllada de planta baixa i dos pisos. Compost per una estructura de volum cúbic, un petit rafal d´obra vista que protegeix l´accés principal i envoltat per un esplèndid jardí. Íntegra una coberta de quatre vessant amb teules vidriades recolzades sobre àmplies barcanes. Les façanes destaquen per incorporar impressionats esgrafiats que representen garlandes i pèrgoles sobre columnes salomòniques. A l´interior de l´edifici ressalta la presència d´elements ornamentals com les pintures dels sostres, el mobiliari original i les cobertes de volta estrellada. L´edifici és un viu vestigi de la introducció del noucentisme a la ciutat.</p> <u>Construcció:</u>1924-1925 <p> <u>Arquitecte:</u>  Domènec Sugrañes Gras </p> </p> <p> <u> Ús original</u>: Habitatge unifamaliar d´estiueg família Llevat </p> <p><u>Història:</u>L´empresari Josep Llevat Sotorra va encarregar a Domènec Sugranyes la projecció d´un mas a la zona de la Munta i Baixa. Les famílies benestants de la ciutat construïren un seguit de masos concebuts com a residències d´estiueig properes a la ciutat i el mas és un exemple viu exemple que ha perdurat fins avui en dia en un bon estat de conservació. L´edifici va passar de casa d´estiueig a ser una segona residència de gent gran de caràcter privat.   <p><u> Ús actual:</u> Residència privada per a la gent gran</p> <p> <u> Documentació històrica:</u></p><p><u> ',estiloPopup)
    // .openPopup();


L.marker([41.16611, 1.08544], { icon: redIcon }).addTo(map)
    .bindPopup('<strong>INSTITUT PERE MATA </strong><br> <p> <u>  Localització:</u>  Ctra. de  l´Institut Pere Mata, núm. 1 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>Aquest complex arquitectònic format pels diversos pavellons, l´antic habitatge del sotsdirector del centre i del capellà i la tanca, conté un llenguatge constructiu comú que fan del conjunt un espai insòlit. Les construccions han estat bastides amb façanes d´obra vista sobre un sòcol de pedra. De forma majoritària les cobertes són de doble vessant amb teules àrabs. A les façanes predomina la utilització de ceràmica esmaltada blava i blanca i en els emmarcats de finestres i portes s´empra l´ús pedra calcària. La bellesa immesurable que representa aquest conjunt ha fet que esdevingui un símbol del modernisme i un reclam per milers de visitants.<p> <u>Construcció:</u>1897-1912 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Hospital psiquiàtric </p> <p><u>Història:</u> A finals del segle XIX, el doctor reusenc Emili Briansó Planes, va proposar la construcció d´un nou centre psiquiàtric que dones assistència als malalts mentals de la ciutat. Va aconseguir convèncer a 35 comerciants, professionals liberals, propietaris i industrials i es va constituir la Sociedad Manicomio de Reus. El projecte va ser confiat a Lluís Domènech i Montaner, el qual va seguir les últimes línies de tractament de malalts mentals a l´hora de dissenyar l´edifici. Des de l´any 1983 la institució va començar a desenvolupar activitats de docència, formació i investigació convertint-se en un hospital universitari de referència. <p><u> Ús actual: Hospital psiquiàtric</u> </p> <p> <u> Documentació històrica:</u></p> ',estiloPopup)
    // .openPopup();


L.marker([41.15410, 1.10001], { icon: goldIcon }).addTo(map)
    .bindPopup('<strong> ANTIC ESCORXADOR MUNICIPAL DE REUS. </strong><br> <p> <u>  Localització:</u>  C. de l´Escorxador, núm. 1</p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Conjunt de construccions encerclat per una tanca de maó, pedra i reixa de ferro, de la qual únicament queda en l´entrada. Complex compost per dos volums principals i unes quadres que s´obrien en semicercle des del cos central. La nau central de sacrificis era un ampli espai rectangular de planta lliure, amb coberta subjectada per columnes de ferro colat i amb la presència d´una lluerna central que proporcionava il·luminació zenital i ventilació. L´edifici és una excel·lent mostra de l´arquitectura industrial del segle XIX que destaca per ser capdavanter en el seu disseny i funcionalitat.<p> <u>Construcció:</u>1889-1994 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Escorxador municipal </p> <p><u>Història</u>:L´escorxador va ser construït sobre els terrens desamortitzats de l´hort del convent dels carmelites descalços de Sant Joan. El primer projecte és de l´arquitecte Francesc Barba (1883) però no va ser aprovat fins al 1889. Finalment el projecte va ser retocat per l´arquitecte municipal interí Josep Subietas i després per l´arquitecte Pere Caselles. El centre ja funcionava com a tal el 1893, però no va ser finalitzat fins al 1894. Els arquitectes Joan Figuerola i Joan C. Gavaldà van reformar l´edifici entre el 2000-2003 en el complex actual que acull la Biblioteca Xavier Amorós i una seu de la Universitat Oberta de Catalunya.</u>  <p><u> Ús actual:</u> Biblioteca Central Xavier Amorós de Reus i una de les seus de la Universitat Oberta de Catalunya (UOC).</p> <p> <u> Documentació històrica:</u></p><p><u>',estiloPopup)
    // .openPopup();

L.marker([41.16546, 1.09494], { icon: redIcon }).addTo(map)
    .bindPopup('<strong> MAS GASULL </strong><br> <p> <u>  Localització:</u>Carrer Barranc de la Mina, 7I  </p> <p><u>Estil arquitectònic:  </u> Modernista</p> <p> <u>  Descripció:</u>És una edificació aïllada estructurada mitjançant planta baixa, pis i golfes. Està conformat per una planta rectangular amb l´eix de simetria orientat en sentit sud-est nord-oest. Destaca per tenir una torre de planta quadrada a l´angle sud que concorda amb la caixa de l´escala. Conté una coberta inclinada conformada per un pendent a la part central, la torre i la part nord-est recoberta per teula plana de ceràmica vidriada. A l´exterior domina la presència d´uns acabats en forma d´estucats tot alternant faixes horitzontals d´obra vista amb faixes llises a la planta baixa i imitant obra vista al primer pis. A l´interior podem observar elaborats frescos i sanefes que decoren les estances amb motius florals i paisatgístics. A tocar del mas hi ha una petita capella bastida de forma simultània amb el mas que segueix la mateixa configuració arquitectònica.<p> <u>Construcció:</u>Darreries del segle XIX. <p> <u>Arquitecte:</u> Pere Caselles i Tarrats </p> </p> <p> <u> Ús original</u>: Habitatge unifamaliar d´estiueg família Gasull</p> <p><u>Història:</u> El mas va ser construït pel comerciant d´olis Fèlix Gasull i Roig sota la projecció de l´arquitecte Pere Caselles. Amb l´assassinat de Fèlix Gasull Roig durant els anys vint (pistolerisme) el mas va entrar en declivi. Durant la postguerra el mas passat a mans de la família Vernís (antics masovers) fins a la creació del Col·legi Mowgli durant la dècada dels setanta, quan va ser remodelat per satisfer les necessitats educatives. A finals de la dècada dels anys noranta es posa a la venda sent comprat per la família Gomis. Després de deu anys d´inversió i dedicació van retornar l´esplendor el mas, recuperant gran part del seu estat original, tot convertint-lo en un habitatge unifamiliar únic. <p><u> Ús actual:</u> Habitatge unifamiliar</p> <p> <u> Documentació històrica:</u></p> ',estiloPopup)
    // .openPopup();

L.marker([41.15290, 1.10381], { icon: goldIcon }).addTo(map)
    .bindPopup('<strong> VAPOR VELL. </strong><br> <p> <u>  Localització:</u>  Carrer de Sant Serapi, núm 2. </p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Nau industrial rectangular d´una sola planta que conté un pati interior. La construcció presenta un sòcol de pedra al llarg de la façana i a l´entrada del pati. Destaca per tenir una composició simètrica a través de les obertures de la planta baixa. Les portes i finestres que hi trobem són d´arc de mig punt rebaixat i incorporen una ornamentació de motllura a l´arc i als muntats. Hi ha un conjunt de cinc grups de finestres geminades, i remat de la barana en forma ondulada, ornades per motllura i botons de pedra artificial. La porta d´accés ressalta per tenir una composició diferent i per sobre hi ha un arc monumental rebaixat de maó, que recolza sobre mènsules de pedra cisellada, coronant en tres merlets culminats per arcs rodons. El coronament presenta arquets de punt rodó amb un botó addicional a la façana del pati. La façana destaca per ser d´obra vista i fusteria de fusta. És un testimoni del llenguatge arquitectònic industrial d´inicis del segle XX.<p> <u>Construcció:</u> 1855 <p> <u>Arquitecte:</u> Desconegut </p> </p> <p> <u> Ús original</u>: Indústria cotonera "La Manufacturera de Algodón" </p> <p><u>Història:</u>L´any 1846, a través de la unió de "La Industrial Reusense" i la "Canals Pàmies y Huguet" es fundar la "Manufacturera de Algodón" coneguda com "el Vapor Vell", la primera factoria de la ciutat i una de les més importants fàbriques de filatures i teixits de cotó de la Catalunya vuitcentista. Aquesta empresa arribà a ocupar més d´un miler de treballadores i a tenir 200 telers mecànics. El 1876, el Vapor Vell va patir un incendi que reparà immediatament degut a l´any següent va rebre la visita d´Alfons XII. La crisi provocada per la sobreproducció de cotó i per les dificultats econòmiques provocades per l´obsolescència de la maquinària van fer que el novembre de 1877 la fàbrica tancar. El febrer de 1905 la "Manufacturera del Algodón "va construir una nova construcció de nova al carrer de Sant Serapi que ocupava una extensió de 10,0000 m². L´empresa va plegar cap al 1960. El 2006 la part de l´edifici inclosa a l´inventari del Patrimoni Arquitectònic, va ser restaurada i actualment s´empra per a l´Ajuntament de Reus com a magatzems.</u>  <p><u> Ús actual:</u>  Espai destinat a la preservació i custòdia dels diferents elements festius de la ciutat</p> <p> <u> Documentació històrica:</u></p><p><u> ',estiloPopup)
    // .openPopup();




L.marker([41.15649, 1.11027], { icon: goldIcon }).addTo(map)
    .bindPopup('<strong>  ANTIC BANC ESPANYA.</strong> <p> <u>  Localització:</u>  Raval de Santa Anna, núm. 59. </p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Es tracta d´una construcció cantonera composta per un soterrani, planta baixa, tres pisos i una àmplia terrassa. L´angle agut que doblega la façana dels carrers provoca que l´edifici ressalti tot adquirint una aparença de torre. La façana principal s´ordena de forma simètrica al voltant d´un eix central que conté l´únic accés. La col·locació dels buits, així com la valoració en vertical i horitzontal responen a les directrius clàssiques amb components neobarrocs tot i que la decoració correspon al llenguatge modernista. La diversa ornamentació escultòrica en baix relleu fa al·lusió a diferents motius referents al comerç, l´agricultura i la indústria. La construcció representa la potent iniciativa industrial i comercial de la societat reusenca plasmada en el llenguatge constructiu del moment.<p> <u>Construcció:</u>1902-1904 <p> <u>Arquitecte:</u> Pere Caselles i Tarrats </p> </p> <p> <u> Ús original</u>: Sucursal bancària </p> <p><u>Història:</u>  <p><u> Ús actual:</u> Museu de Reus Salvador Vilaseca</p> <p> <u> Documentació històrica:</u></p><p><u> ',estiloPopup)
    // .openPopup();



L.marker([41.16427, 1.11157], { icon: goldIcon }).addTo(map)
    .bindPopup('<strong> MAS MIARNAU </strong><p> <u> Carrer Onze de Setembre, núm. 112. </p> <p><u>Estil arquitectònic:</u> Eclèctic</p> <p> <u>  Descripció:</u>Edificació de planta rectangular fonamentada en planta baixa i primer pis. Ressalta per incorporar esgrafiats amb motius florals i jugar amb els colors ocres i terra, adquirint un aire singular. Integra elements de ferro forjat i està envoltat per un magnífic jardí. És una bona mostra dels masos d´estiueig del segle XIX.<p> <u>Construcció:</u>1901 <p> <u>Arquitecte:</u> Desconegut </p> </p> <p> <u> Ús original</u>: Habitatge unifamaliar d´estiueg de la Miarnau </p> <p><u>Història:</u>  <p><u> Ús actual:</u> Centre d’Innovació i Formació Permanent de la Fundació URV .</p> <p> <u> Documentació històrica:</u></p><p><u> ',estiloPopup)
    // .openPopup();



L.marker([41.15429, 1.10908]).addTo(map)
    .bindPopup(' <strong> CENTRE LECTURA</strong> <p> <u>  Localització:</u>  Carrer Major, núm. 15 </p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u>Conjunt arquitectònic format per diverses construccions de les quals cal ressaltar la principal. L´edifici principal es compon de planta Baixa i tres pisos, però els més interessants són el vestíbul i la primera planta. La façana manté una composició a través de tres eixos verticals on destaquen els paràmetres neoclàssics com les columnes jòniques, els balcons laterals corbats, els balustres i una cornisa amb mènsules sostinguda per quatre parelles de cartel·les amb decoració vegetal. A la planta baixa hi ha un gran vestíbul on predomini la presencia a columnes amb capitell jònic, una esplèndida escala de tipus imperial de graons de marbre amb barana de ferro forjat i un paviment ceràmic de color blanc i negre. Al final de l´esquerra del vestíbul trobem l´accés a l´entrada al Teatre Bartrina. Al primer pis format per una planta rectangular s´hi troba la biblioteca la qual abasta un espai hàbil de 300 m² i 125 places de lectura. Aquesta construcció converteix l´entitat del centre lectura com un centre de referència cultural del país tant per la seva tasca com la per l´atractiu singular del seu centre.<p> <u>Construcció:</u>1920 <p> <u>Arquitecte:</u> FALTA CERCAR </p> </p> <p> <u> Ús original</u>: Entitat destinada al foment i a la difusió de la cultura "Centre Lectura"  </p> <p><u>Història:</u>L´any 1916, el polític i empresari va reusenc Evarist Fàbregues va comprar l´antic palau dels marquesos de Tamarit, situat al carrer Major i el va donar cedir a l´entitat del Centre de Lectura com a nova seu del centre. A més, va finançar les obres de remodelació, projectades per l´arquitecte reusenc, Josep Simó i Bofarull. El nou edifici s´inaugurà el 1921 per un seguit d´actes presidits per Josep Puig i Cadafalch, president de la Mancomunitat. Des de l´establiment del centre a les noves instal·lacions la seva activitat ha anat creixent convertint-se en una entitat de referència de tot Catalunya.  <p><u> Ús actual:</u>  Entitat destinada al foment i a la difusió de la cultura "Centre Lectura" </p> <p> <u> Documentació històrica:</u></p><p> ',estiloPopup)
    // .openPopup();



L.marker([41.15779, 1.10499]).addTo(map)
    .bindPopup(' <strong> </strong>EDIFICI DE LA CAIXA DE PENSIONS</strong><p> <u>  Localització:</u>  Plaça del Pintor Fortuny, núm. 1</p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u>Construcció composta per dos cossos disposats en angle recte annexats per un cos central que té una façana de perfil convex. Cada cos s´accentua per una cúpula. Respecte a la façana principal la trobem estructurada verticalment en tres sectors, la planta baixa, amb un tractament de pedra distintiu, un sector mitjà, conformat per la primera i segona planta, i un tercer pis rematat per cúpules i les baranes de balustres del terrat. Ressalten les quatre columnes d´ordre corinti de doble alçada, que indiquin l´eix de simetria de l´edifici. Bastiment que plasma els valors del noucentisme d´una forma distintiva i peculiar. <p> <u>Construcció:</u>1929-1931 <p> <u>Arquitecte:</u> Enric Sagnier Villavecchia </p> </p> <p> <u> Ús original</u>: Caixa de pensions  </p> <p><u>Història:</u> En un solar que havia ocupat l´antiga presó, de propietat municipal, comprat per l´entitat d´estalvi (La Caixa), l´arquitecte Enric Sagnier, personatge lligat amb el director general de la Caixa de Pensions va projectar l´edifici. L´arquitecte va ressaltar l´angle de visió de l´edifici, encarat als carrers de Llovera i de l´Amargura, ja que en l´actual plaça de la Llibertat es trobava ocupada en aquell moment pel quarter de cavalleria. L´edifici va patir remodelacions durant els anys vuitanta i noranta i durant l´inici de la nova centúria s´hi va instal·lar una cambra cuirassada. <p><u> Ús actual:</u> Sucursal bancària "La Caixa"</p> <p> <u> Documentació històrica:</u></p> ',estiloPopup)
    // .openPopup();



L.marker([41.15656, 1.11064]).addTo(map)
    .bindPopup(' <strong> CASA FÀBREGAS</strong> <p> <u>  Localització:</u>  Plaça de Catalunya, núm. 9 </p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u>Habitatge conformat per planta Baixa, entresòl i tres pisos que destaca per tenir una gran tribuna a la planta principal aprofitant la corba que forma l´edifici. La cantonada de l´edificació es remata amb un cos àtic que sobresurt per damunt de la cornisa superior fent la corba i ressaltant encara més. La singularitat de la construcció recau la seva composició classicista i la gran riquesa basada en la decoració barroca i academicista on dominen els esgrafiats, encoixinats, frontons, balustres, timpans, mènsules i arcs motllurats. Respecte a l´interior de la planta principal es conserven la decoració original, l´escala monumental i els enteixinats de diverses habitacions. Aquesta obra arquitectònica es pot considerar la màxima expressió del noucentisme reusenc.<p> <u>Construcció:</u>1920 <p> <u>Arquitecte:</u>  Josep Simó i Bofarull </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar famíla Fàbregas </p> <p><u>Història:</u>Impulsada per Evarist Fàbregas (1868-1938) adinerat banquer i comerciant reusenc, fundador del Banc de Catalunya i mecenes de moltes activitats culturals i de beneficència. L´edifici va ser encarregat a l´arquitecte Josep Simó i Bofarull, el qual va plasmar una arquitectura de Beaux Arts centrada en la cara més italianitzada del Noucentisme català. A la planta baixa hi ha la farmàcia Ornosa, heretada de Pau Ornosa, farmacèutic militar i alcalde de Reus (1950-51) , del seu oncle Antoni Serra i Pàmies.  <p><u> Ús actual:</u> Farmàcia Ornosa a la planta baixa i habitatge unifamiliar en la resta de plantes </p> <p> <u> Documentació històrica:</u></p><p> ',estiloPopup)
    // .openPopup();



L.marker([41.15704, 1.10205], { icon: redIcon }).addTo(map)
    .bindPopup('  <strong> ESCOLA PRAT DE LA RIBA</strong><p> <u>  Localització:</u>  Avinguda de Prat de la Riba, núm. 36 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>Es tracta d´un edifici aïllat, fonamentat en un sol nivell i que es caracteritza per tenir una planta en forma de T. La distribució dels espais és simètrica a causa de la separació original per gènere dels alumnes. Les façanes estan bastides amb materials de fàcil manteniment, obra vista i pedra. Les cobertes de dos vessants contenen teules vidriades de color groc i verd, tot formant imatges geomètriques. La decoració exterior es fonamenta en l´ús de plafons ceràmics amb dibuixos blaus sobre un fons blanc es plasmen episodis del Nou Testament i representacions florals geomètriques de tipus seriat. Aquesta configuració arquitectònica és un exemple de la necessitat de donar resposta als requeriments pedagògiques del moment i d´edifici modernista públic.<p> <u>Construcció:</u>1909-1917 <p> <u>Arquitecte:</u> Pere Casellex i Tarrats </p> </p> <p> <u> Ús original</u>: Centre escolar </p> <p><u>Història:</u> El projecte sota direcció i disseny de l´arquitecte municipal Pere Caselles del centre educatiu va ser redactat el 1908 tot aprofitant una convocatòria de subvencions estatals. L´any següent l´obra va ser adjudicada, però la lenta evolució de la construcció va provocar que la Direcció general de Primera Enseñanza presentes l´any 1913 una queixa a l´Ajuntament de Reus pel retard. No va ser fins al juny de 1917 que l´escola es va inaugurar. <p><u> Ús actual:</u> Centre d´educació infantil i primària </p> <p> <u> Documentació històrica:</u></p><p><u> ',estiloPopup)
    // .openPopup();


L.marker([41.16562, 1.10188], { icon: redIcon }).addTo(map)
    .bindPopup(' <strong> XALET SERRA</strong><p> <u>  Localització:</u>  	Ctra. de Castellvell, núm. 20. </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripció:</u>L´edifici va ser bastit com un complex, dividit en laboratori farmacèutic i la resta com a zona residencial. El Xalet Serra que és la part conserva actualment destaca per la torre de planta quadrada fonamentada en tres nivells d´alçada, coberta per una teulada piràmide i que incorpora mansardes, penell i un voladís reforçat amb tirants de fusta. L´exterior de la torre barreja la utilització del mur de maó, l´estucat, la ceràmica vidriada i la fusta. A mitjana alçada també hi ha finestres d´arc de ferradura que donen un caràcter exòtic al conjunt. A l´espai inferior trobem una gran sala de planta centralitzada amb una coberta de tipus cúpula emprada com a menjador. En aquesta estança i trobem unes pintures de Tomas Bergadà de temàtica floral que recorren tot el sostre. El disseny i l´ornamentació que modela aquesta construcció li concedeixen un encant únic.<p> <u>Construcció:</u>1912 <p> <u>Arquitecte:</u> Joan Rubió i Bellver </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar famíla Serra</p> <p><u>Història:</u> El farmacèutic Antonio Serra va adquirir l´any 1910 uns terrenys a la carretera de Castellvell sortint de Reus on va establir un laboratori on hi havia un antic habitatge annex a unes instal·lacions industrials. Va encomanar a Joan Rubió i Bellver el projecte de reforma integral de l´antiga casa. De l´estructura original avui en dia només ha perdurat la torre-mirador i el primer cos de l´edifici. La part que conformava el jardí i els espais industrials es troben ocupats per blocs de pisos en l´actualitat. <p><u> Ús actual:</u> Residència privada</p> <p> <u> Documentació històrica:</u></p><p><u> ',estiloPopup)
    // .openPopup();;


L.marker([41.15627, 1.10410], { icon: redIcon }).addTo(map)
    .bindPopup('<strong> CASA RULL</strong><p> <u>  Localització:</u>   Carrer Sant Joan, núm. 27 </p> <p><u>Estil arquitectònic:</u> Modernista</p> <p> <u>  Descripició:</u>Edificació de planta rectangular i que consta de planta baixa i dos pisos. Les façanes estan bastides amb pedra i es troben exemptes tres d´elles mentre que una actua com a paret amb la Casa Gasull. Destaca pel grau de decoració de les façanes on podem veure una balconada única amb decoració floral, portes i finestres d´inspiració gòtica i els merlets que coronen l´edifici donant-li un aire d´opulència. També incorpora un jardí i una columna exempta que recorre l´angle format per la façana principia i lateral, tot unint el terrat amb el jardí. La seva coberta resta composta per un terrat pla en la part anterior i un cobert inclina en dos vessant en el par posterior. El grau d´ornamentació que actua com a llenguatge descriptiu de l´excepcional construcció fa que sigui un dels exponents més representatius del moviment modernista de Reus. </p> </u> Construcció:</u>1900 <p> <u>Arquitecte:</u> Lluís Domènech i Montaner </p> </p> <p> <u> Ús original</u>: Habitatg unifamaliar família Rull/p> <p><u>Història:</u> El conegut notari Pere Rull i Trilla va confiar a l´arquitecte Lluís Domènech i Muntaner la creació del seu habitatge particular. Com herència va llegar a l´Ajuntament de Reus l´edifici conjuntament amb les seves col·leccions sota condicions que fos utilitzat com a museu. L´habitatge ha estat reutilitzat com a museu municipal, arxiu històric i actualment seu de la regidoria de cultura. La construcció va ser restaurada l´any 1996 sota la direcció de l´arquitecte Joan Figuerola. <p><u> Ús actual:</u> Seu de l’Àrea de cultura i de l’Institut Municipal Reus Cultura.</p> <p> <u> Documentació històrica:</u></p><p> ',estiloPopup)
    // .openPopup();

L.marker([41.15497, 1.10649]).addTo(map)
    .bindPopup('<strong> MAGATZEMS VILELLA</strong> <p> <u>  Localització:</u>  Carrer de Sant Esteve, núm. 17</p> <p><u>Estil arquitectònic:</u> Noucentista</p> <p> <u>  Descripció:</u> Edifici compost per planta baixa, entresòl i dues plantes. A la planta baixa i l´entresòl està bastida mitjançant pedra, mentre que la resta de l´edifici presenta una façana estucada, menys pel sector nord i la cornisa superior on s´empra l´obra vista. Solament hi ha ornamentació en el coronament de l´edifici. El sector nord destaca per tenir una façana d´un cost d´obra vista que ocupa els dos pisos superiors i que és coronat per un timpà que sobresurt enfront l´alçada respecte de la resta de l´edifici. L´aixecament dels Magatzems Vilella respon al nou model urbà que cerca el noucentisme fonamentat en un nou llenguatge arquitectònic.</p>  <p> <u>Construcció:</u>1919 <p> <u>Arquitecte:</u> Pere Domènech Roura</p> </p> <p> <u> Ús original</u> Magatzem de fruits secs</p> <p><u>Història:</u>Magatzems promoguts per l´empresari Ramon Vilella, reconegut comerciant centrat en l´exportació de fruits secs de la ciutat. Els plànols del projecte de l´any 1919 són signats per l´arquitecte Pau Monguió Segura, però el disseny s´atribueix a Pere Domènec Roura. Durant la guerra civil l´edifici va patir rellevants danys així que va ser reformat tot seguint els plànols originals  <p><u> Ús actual:</u> Falta cercar</p> <p> <u> Documentació històrica:</u></p><p>',estiloPopup)
    // .openPopup();




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
