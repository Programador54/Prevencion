function mostrar(seccion) {
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.remove('activo');
  });
  document.getElementById(seccion).classList.add('activo');
}

function enviarDenuncia(event) {
  event.preventDefault();
  const ubicacion = document.getElementById('ubicacion').value;
  const descripcion = document.getElementById('descripcion').value;

  alert('✅ Denuncia enviada de forma anónima.\nUbicación: ' + ubicacion + '\nDescripción: ' + descripcion);

  // Limpiar campos
  document.getElementById('ubicacion').value = '';
  document.getElementById('descripcion').value = '';
}

function llamarEmergencia() {
  window.location.href = 'tel:911';
}

function activarVersionMovil() {
  document.getElementById('estilo').href = 'styles-mobile.css';
}

function activarVersionEscritorio() {
  document.getElementById('estilo').href = 'styles.css';
}

// Coordenadas aproximadas del centro de la nueva ubicación (19°14′36″N 98°11′27″O)
var centroNuevaUbicacion = [19.2433, -98.1908]; // Coordenadas correctas para el centro

// Inicializar el mapa
var mapa = L.map('mapa-delitos').setView(centroNuevaUbicacion, 14);

// Agregar capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

// Agregar marcadores de delitos con coordenadas cercanas a San Luis Teolocholco
var marcadoresDelitos = [
  {
    coordenadas: [19.2437, -98.1915],  // Ajustado para estar más cerca de la ubicación proporcionada
    descripcion: 'Asalto a tienda Oxxo en Av. Josefa Ortiz de Domínguez.'
  },
  {
    coordenadas: [19.2450, -98.1890],  // Ajustado
    descripcion: 'Agresión con arma de fuego en Hotel Oyo, calle Hidalgo.'
  },
  {
    coordenadas: [19.2425, -98.1910],  // Ajustado
    descripcion: 'Robo a adultos mayores en calle Independencia, El Carmen Aztama.'
  },
  {
    coordenadas: [19.2445, -98.1880],  // Ajustado
    descripcion: 'Desvalijamiento de centro ecoturístico municipal.'
  }
];

// Añadir los marcadores al mapa
marcadoresDelitos.forEach(function(delito) {
  L.marker(delito.coordenadas)
    .addTo(mapa)
    .bindPopup(delito.descripcion);
});

function enviarWhatsApp() {
  const numero = "5212212483486"; // WhatsApp receptor
  const mensaje = document.getElementById("mensajeWhatsapp").value.trim();
  if (mensaje === "") {
    alert("Por favor escribe un mensaje antes de enviarlo.");
    return;
  }
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
