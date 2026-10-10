export interface Usuariomodel {
    id: string;
    nombre: string;
    correo: string;
    contrasenaHash: string;
    contrasenaSalt: string;
    fechaRegistro: string;
}

export interface Usuariosesionmodel {
    id: string;
    nombre: string;
    correo: string;
}
