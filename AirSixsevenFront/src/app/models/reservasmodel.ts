export interface Reservasmodel {
    id: string;
    usuarioId?: string;
    alojamientoId: number;
    alojamientoNombre: string;
    ciudad: string;
    imagen: string;
    fechaLlegada: string;
    fechaSalida: string;
    huespedes: number;
    noches: number;
    total: number;
    nombreHuesped: string;
    correo: string;
    telefonoHuesped?: string;
    documentoHuesped?: string;
    estado: "CONFIRMADA";
}

export interface Cotizacionmodel {
    valida: boolean;
    errores: string[];
    noches: number;
    subtotal: number;
    tarifaLimpieza: number;
    tarifaServicio: number;
    total: number;
}