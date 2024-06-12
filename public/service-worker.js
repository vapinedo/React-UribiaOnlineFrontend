// Evento de instalación
self.addEventListener('install', event => {
    console.log('Service Worker instalado');
});

// Evento de activación
self.addEventListener('activate', event => {
    console.log('Service Worker activado');
});

// Evento de solicitud de red
// self.addEventListener('fetch', event => {
//     console.log('Solicitud de red interceptada:', event.request.url);
// });
