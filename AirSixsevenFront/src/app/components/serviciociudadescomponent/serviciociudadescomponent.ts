import { Component } from '@angular/core';

@Component({
    selector: 'app-serviciociudadescomponent',
    standalone: false,
    templateUrl: './serviciociudadescomponent.html',
    styleUrl: './serviciociudadescomponent.css',
})
export class Serviciociudadescomponent {

    ciudades = [
        {
            nombre: 'Bogotá',
            servicios: [
                { titulo: 'Sesión de fotos en Monserrate', precio: '$100.000', unidad: '12 fotos Lunes - Viernes 11:00 - 17:00 ', rating: '4,5', imagen: 'assets/images/monserrate.jpg' },
                { titulo: 'Tour fotográfico por La Candelaria', precio: '$120.000', unidad: 'Lunes - Viernes 8:00 - 15:00', rating: '4,9', imagen: 'assets/images/candelaria.jpg' },
                { titulo: 'Retratos en la Plaza de Bolívar', precio: '$75.000', unidad: 'Viernes - Domingo 11:00 - 19:00 ', rating: '4,8', imagen: 'assets/images/plazabolivar.jpg' },
                { titulo: 'Sesión de fotos en Usaquén', precio: '$100,000', unidad: '10 fotos Lunes - Miercoles 13:00 - 18:00', rating: '4,4', imagen: 'assets/images/usaquen.jpg' },
                { titulo: 'Fotos en la Catedral de Sal', precio: '$160.000', unidad: '10 fotos Sabado-Domingo 10:00 - 18:00', rating: '4,7', imagen: 'assets/images/catedral.jpg' },
                { titulo: 'Clase de cocina bogotana', precio: '$180.000', unidad: 'Por persona', rating: '6,7', imagen: 'assets/images/clasecocina.jpg' },
                { titulo: 'Cata de café en la Zona G', precio: '$120.000', unidad: 'Por persona', rating: '4,3', imagen: 'assets/images/catacafe.jpg' },
            ]
        },
        {
            nombre: 'Medellín',
            servicios: [
                { titulo: 'Sesión de fotos en la Comuna 13', precio: '$140.000', unidad: '12 fotos Viernes - Domingo 11:00 - 18:00', rating: '4,8', imagen: 'assets/images/comuna.jpg' },
                { titulo: 'Retratos en la Piedra del Peñol', precio: '$180.000', unidad: 'Por retrato', rating: '4,7', imagen: 'assets/images/retratospeñol.jpg' },
                { titulo: 'Fotos en la Plaza Botero', precio: '$150.000', unidad: '15 fotos ', rating: '4,3', imagen: 'assets/images/plazabotero.jpg' },
                { titulo: 'Sesión de fotos en el Pueblito Paisa', precio: '$150.000', unidad: '12 fotos Viernes - Domingo 11:00 - 18:00', rating: '4,6', imagen: 'assets/images/fotospaisa.jpg' },
                { titulo: 'Caminata y fotos en Parque Arví', precio: '$90.000', unidad: 'Por persona', rating: '4,5', imagen: 'assets/images/fotosparquearvi.jpg' },
                { titulo: 'Tour de café en Santa Elena', precio: '$130.000', unidad: 'Por persona', rating: '4,6', imagen: 'assets/images/cafeelena.jpg' },
                { titulo: 'Clase de baile en El Poblado', precio: '$155.000', unidad: 'Por persona', rating: '4,5', imagen: 'assets/images/clasebaile.jpg' },
            ]
        },
        {
            nombre: 'Barranquilla',
            servicios: [
                { titulo: 'Sesión de fotos en el Gran Malecón', precio: '$100.000', unidad: '10 fotos Viernes - Domingo 11:00 - 18:00', rating: '4,9', imagen: 'assets/images/barranquilla.jpeg' },
                { titulo: 'Experiencia en la Casa del Carnaval', precio: '$150.000', unidad: 'Por persona', rating: '4,7', imagen: 'assets/images/casacarnaval.jpg' },
                { titulo: 'Retratos en Bocas de Ceniza', precio: '$170.000', unidad: 'Por retrato', rating: '4,7', imagen: 'assets/images/bocaceniza.jpg' },
                { titulo: 'Fotos en el Muelle de Puerto Colombia', precio: '$180.000', unidad: '12 fotos Viernes - Domingo 11:00 - 18:00', rating: '4,8', imagen: 'assets/images/puertocolombia.jpg' },
                { titulo: 'Sesión de fotos en el Castillo de Salgar', precio: '$160.000', unidad: '12 fotos Viernes - Domingo 11:00 - 18:00', rating: '4,8', imagen: 'assets/images/castillosalgar.jpg' },
                { titulo: 'Clase de baile de carnaval', precio: '$140.000', unidad: '12 fotos Viernes - Domingo 12:00 - 17:00', rating: '4,4', imagen: 'assets/images/clasecarnval.jpg' },
                { titulo: 'Tour gastronómico en el Barrio Abajo', precio: '$200.000', unidad: 'Por grupo (4 personas)', rating: '4,9', imagen: 'assets/images/barriodown.jpg' },
            ]
        },
    ];
}