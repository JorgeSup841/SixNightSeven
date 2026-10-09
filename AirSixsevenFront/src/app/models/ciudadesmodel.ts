export interface Ciudad {
    id: number;
    ciudad: string;
    titulo: string;
    precio: string;
    unidad: string;
    rating: string;
    imagen: string;
}

export interface Horario {
    id: number;
    servicioId: number;
    hora: string;
}

export interface CiudadData {
    servicios: Ciudad[];
    horarios: Horario[];
}