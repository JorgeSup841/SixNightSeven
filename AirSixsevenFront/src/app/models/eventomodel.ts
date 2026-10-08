export interface Evento {
    id: number;
    nombre: string;
    descripcion: string;
    ciudad: string;
    categoria: string;
    ubicacion: string;
    latitud: number;
    longitud: number;
    duracionHoras: number;
    precioPersona: number;
    calificacion: number;
    totalValoraciones: number;
    activo: boolean;
    imagenPrincipal: string;
    imagenes: string[];
}

export interface Horario {
    id: number;
    eventoId: number;
    fecha: string;
    hora: string;
    cuposDisponibles: number;
}

export interface EventosData {
    eventos: Evento[];
    horarios: Horario[];
}