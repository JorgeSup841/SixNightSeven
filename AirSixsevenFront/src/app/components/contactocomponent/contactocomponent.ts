import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
    selector: "app-contactocomponent",
    standalone: false,
    styleUrl: "./contactocomponent.css",
    templateUrl: "./contactocomponent.html",
})
export class Contactocomponent {
    enviado = false;

    datos = {
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
    };

    enviar(form: NgForm) {
        if (form.invalid) {
            form.control.markAllAsTouched();
            return;
        }
        this.enviado = true;
    }

    nuevoMensaje() {
        this.datos = {nombre: '', correo: '', asunto: '', mensaje: ''};
        this.enviado = false;
    }
}
