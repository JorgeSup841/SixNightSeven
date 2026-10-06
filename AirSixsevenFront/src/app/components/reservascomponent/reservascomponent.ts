import {Component} from "@angular/core";

@Component({
    selector: "app-reservascomponent",
    standalone: false,
    styleUrl: "./reservascomponent.css",
    templateUrl: "./reservascomponent.html",
})
export class Reservascomponent {
    esCorreoValido: boolean = false;
    correoValidado: string = "";

    verificarCorreo(correo: string) {
        if (correo.includes("@") && correo.includes(".com")) {
            this.esCorreoValido = true;
            this.correoValidado = correo;
        } else {
            this.esCorreoValido = false;
            this.correoValidado = "Su extension de correo no es valida";
        }
    }

    esNombreValido: boolean = false;
    nombreValidado: string = "";

    verificarNombre(nombre: string) {

        const prohibidos = "0123456789!@#$%^&*()_+={}[];':\",./<>?¿¡-";


        if (nombre === "" || prohibidos.split("").some(c => nombre.includes(c))) {
            this.esNombreValido = false;
            this.nombreValidado = "Ponga un nombre real, no puede contener numeros o simbolos";
        } else {
            this.esNombreValido = true;
            this.nombreValidado = nombre;
        }
    }

    esTelefonoValido: boolean = false;
    telefonoCorrecto: string = "";

    verificarTelefono(celuco: string) {
        const prohibidos = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASLLJSDKFHJDGÑPOIOQIUWEOQWYRMZXNBCVC,.-{´+¿'=)(//&%%$#!||¨[*;:_[*¨]¡?=))(/&%%$}}++´{";


        const tieneProhibidos = prohibidos.split("").some(c => celuco.includes(c));


        if (celuco !== "" && !tieneProhibidos) {
            this.esTelefonoValido = true;
            this.telefonoCorrecto = celuco;
        } else {
            this.esTelefonoValido = false;
            this.telefonoCorrecto = "El telefono no puede incluir letras o simbolos";
        }
    }
    esCedulaValida: boolean = false;
    cedulaCorrecta: string = "";

    verificarCedula(cedula: string) {
        const prohibidos = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASLLJSDKFHJDGÑPOIOQIUWEOQWYRMZXNBCVC,.-{´+¿'=)(//&%%$#!||¨[*;:_[*¨]¡?=))(/&%%$}}++´{";


        const tieneProhibidos = prohibidos.split("").some(c => cedula.includes(c));


        if (cedula !== "" && !tieneProhibidos) {
            this.esCedulaValida = true;
            this.cedulaCorrecta = cedula;
        } else {
            this.esCedulaValida = false;
            this.cedulaCorrecta = "La cedula no puede contener letras o simbolos";
        }
    }
    fechaLlegada: string = "";
    fechaSalida: string = "";
    numeroHuespedes: number = 1;


    precioPorNoche: number = 150000;
    tarifaLimpiezaFija: number = 40000;

    numeroNoches: number = 0;
    subtotal: number = 0;
    tarifaServicio: number = 0;
    totalPagar: number = 0;

    calcularSubtotal() {
        this.subtotal = this.numeroNoches * this.precioPorNoche;
    }

    calcularTarifaServicio() {
        this.tarifaServicio = this.subtotal * 0.10;
    }

    calcularTotal() {
        if (this.numeroNoches > 0) {
            this.totalPagar = this.subtotal + this.tarifaLimpiezaFija + this.tarifaServicio;
        } else {
            this.totalPagar = 0;
        }
    }
    calcularNoches() {
        if (this.fechaLlegada && this.fechaSalida) {
            const llegada = new Date(this.fechaLlegada).getTime();
            const salida = new Date(this.fechaSalida).getTime();
            const diferencia = salida - llegada;
            this.numeroNoches = diferencia > 0 ? diferencia / (1000 * 3600 * 24) : 0;
        } else {
            this.numeroNoches = 0;
        }
    }


    calcularReserva() {
        this.calcularNoches();
        this.calcularSubtotal();
        this.calcularTarifaServicio();
        this.calcularTotal();
    }



}

