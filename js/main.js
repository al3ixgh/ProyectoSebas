addEventListener('load', headerCompleto, false);

function headerCompleto() {
  var header=document.getElementById("header");
  header.load('/header.html');
  // $('.header-completo').load('/pages/ofertas/header.html');
}