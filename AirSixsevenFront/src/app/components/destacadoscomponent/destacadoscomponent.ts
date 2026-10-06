import {ChangeDetectorRef, Component, inject} from "@angular/core";
import {Alojamiento} from "../../models/alojamientomodel";
import {Alojamientosservice} from "../../services/alojamientosservice";

@Component({
  selector: "app-destacadoscomponent",
  standalone: false,
  styleUrl: "./destacadoscomponent.css",
  templateUrl: "./destacadoscomponent.html",
})
export class Destacadoscomponent {

  private alojamientosService = inject(Alojamientosservice);
  cdr = inject(ChangeDetectorRef);

  todos: Alojamiento[] = [];
  tipos: string[] = [];
  tipoSeleccionado = '';

  ngOnInit() {
    this.alojamientosService.getAlojamientos().subscribe(datos => {
      this.todos = [...datos].sort((a, b) => b.calificacion - a.calificacion);
      this.tipos = [...new Set(datos.map(a => a.tipo))];
      this.cdr.detectChanges();
    });

  }

  seleccionarTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
  }


  get destacados(): Alojamiento[] {
    const lista = this.tipoSeleccionado
        ? this.todos.filter(a => a.tipo === this.tipoSeleccionado)
        : this.todos;
    return lista.slice(0, 4);
  }
}
