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


L.marker([41.15477, 1.10843], { icon: redIcon }).addTo(map)
    .bindPopup('CASA NAVÀS.<br> <p>  Localització: Plaça del Mercadal, núm 7 </p> .<p> Construcció: 1908 </p><p> Estil arquitectònic: Modernista</p> <p> Ús original: Habitatge i baixos comercials </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')

    .openPopup();

L.marker([41.14654, 1.11431], { icon: goldIcon }).addTo(map)
    .bindPopup('MAS IGLESIAS <br><p>  Localització:  </p> .<p> Construcció: Segona meitat del segle XIX </p><p> Estil arquitectònic: Eclèctic /p> <p> Ús original: Casa senyorial familía Iglesias.<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió: És un edifici aïllat de planta quadrada amb planta baixa, pis i golfes. A dreta i esquerra hi ha dos elements de planta baixa i pis amb galeria correguda amb arcades, columnes jòniques i barana de balustres. La composició és simètrica a partir de les obertures de planta baixa, balconeres amb llindes al pis i quadrangulars a les golfes. Té una cornisa amb mènsules representant motius florals. Hi ha terrat i terrassa en el centre amb balustrada de balustres i quatre pinyes de pedra artificial en els extrems. La porta principal és de pedra picada, quatre semi pilastres amb volutes. La planta baixa és de color de pedra i la resta de façana és de color granat. Repescte el interior, el paviment és ceràmic; els sostres amb restes de pintures, ornamentació floral i medallons (tot ell de guix); escales i columnes de marbre blanc; vidres glaçats i emplomats de colors </p> <p> Ús actual:El Centre de la Imatge Mas Iglesias de Reus (CIMIR)   </p> <p> </p> v ')
    .openPopup();

L.marker([41.16250, 1.11253]).addTo(map)
    .bindPopup('MAS LLEVAT <br> <p>  Localització: Ctra. de Salou, 26 - c. de Jaume Vidal Alcover, 6. </p> .<p> Construcció: 1924 </p> .<p> Estil arquitectònic: Noucentista </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió:És un edifici aïllat de planta baixa i dos pisos, on les formes modernistes han deixat pas a les del noucentisme. Una estructura, de volum cúbic, té un excel·lent jardí i accés principal protegit per un petit rafal obra vista. La coberta és de teules vidriades a quatre vessants, recolzada sobre àmplies barbacanes, i les façanes es decoren amb rics esgrafiats que representen garlandes i pèrgoles sobre columnes salomòniques. Utilització desgrafiats clars sobre fons fosc és la singularirar  decorativa de lexterior. A linterior del mas hem de destacar els elements decoratius arquitectònics, com les cobertes de volta estrellada, les pintures dels sostres i part del mobiliari original. Cal destacar també la caixa descala pel seu cobriment mitjançant voltes daresta complexes. Originàriament a la planta baixa shi concentrava la vida diürna, amb el menjador, la sala i la cuina entre daltres, i a les dues plantes superiors els dormitoris i les estances del servei. Cal destacar, pel treball del ferro, la magnífica reixa dentrada a la finca. Aquest projecte és un exemple de ladopció del nou estil noucentista per part de larquitecte.[2] </p> <p> Ús actual: Residència privada</p> <p> </p> v ')
    .openPopup();

L.marker([41.16611, 1.08544], { icon: redIcon }).addTo(map)
    .bindPopup('INSTITUT PERE MATA<br> <p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();

L.marker([41.15410, 1.10001], { icon: goldIcon }).addTo(map)
    .bindPopup('ESCORXADOR MUNICIPAL DE REUS.<br> <p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();

L.marker([41.16546, 1.09494], { icon: redIcon }).addTo(map)
    .bindPopup('MAS GASULL.<br> <p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();


L.marker([41.15290, 1.10381], { icon: goldIcon }).addTo(map)
    .bindPopup('VAPOR VELL.<br> <p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();


L.marker([41.15649, 1.11027], { icon: goldIcon }).addTo(map)
    .bindPopup('ANTIC BANC ESPANYA. MUSEU SALVADOR VILASECA <p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();



L.marker([41.16427, 1.11157], { icon: goldIcon }).addTo(map)
    .bindPopup(('MAS MIARNAU <p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v '))
    .openPopup();



L.marker([41.15429, 1.10908]).addTo(map)
    .bindPopup(('CENTRE LECTURA <p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v '))
    .openPopup();


L.marker([41.15779, 1.10499]).addTo(map)
    .bindPopup('EDIFICI DE LA CAIXA DE PENSIONS.<p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();


L.marker([41.15656, 1.11064]).addTo(map)
    .bindPopup('CASA FÀBREGAS .<p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v')
    .openPopup();


L.marker([41.15704, 1.10205], { icon: redIcon }).addTo(map)
    .bindPopup('ESCOLA PRAT DE LA RIBA<p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();


L.marker([41.16562, 1.10188], { icon: redIcon }).addTo(map)
    .bindPopup('XALET SERRA<p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();


L.marker([41.15627, 1.10410], { icon: redIcon }).addTo(map)
    .bindPopup('CASA RULL.<p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
    .openPopup();

L.marker([41.15497, 1.10649]).addTo(map)
    .bindPopup('MAGATZEMS VILELLA.<p>  Localització:  </p> .<p>  </p><p></p> <p>  </p> <p> Història: </p> <p>Arquitecte: </p> <p> Descricpió </p> <p> Ús actual:</p> <p> </p> v ')
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

mymap.on('click', onMapClick);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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