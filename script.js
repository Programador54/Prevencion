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
  
  // Coordenadas aproximadas del centro de San Luis Teolocholco
var centroTeolocholco = [19.2486, -98.2075];

// Inicializar el mapa
var mapa = L.map('mapa-delitos').setView(centroTeolocholco, 14);

// Agregar capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

// Agregar marcadores de delitos
var marcadoresDelitos = [
  {
    coordenadas: [19.2500, -98.2050],
    descripcion: 'Asalto a tienda Oxxo en Av. Josefa Ortiz de Domínguez.'
  },
  {
    coordenadas: [19.2470, -98.2100],
    descripcion: 'Agresión con arma de fuego en Hotel Oyo, calle Hidalgo.'
  },
  {
    coordenadas: [19.2465, -98.2080],
    descripcion: 'Robo a adultos mayores en calle Independencia, El Carmen Aztama.'
  },
  {
    coordenadas: [19.2490, -98.2060],
    descripcion: 'Desvalijamiento de centro ecoturístico municipal.'
  }
];

// Añadir los marcadores al mapa
marcadoresDelitos.forEach(function(delito) {
  L.marker(delito.coordenadas)
    .addTo(mapa)
    .bindPopup(delito.descripcion);
});
