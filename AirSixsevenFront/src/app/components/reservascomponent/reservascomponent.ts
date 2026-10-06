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
            this.nombreValidado = "Pone un nombre real guachin";
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
            this.telefonoCorrecto = "Pon un numero de verda botardo";
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
            this.cedulaCorrecta = "Pon una cédula de verdad guachin";
        }
    }


}

