import { ChangeDetectorRef, Component, OnInit, inject } from "@angular/core";
import { Alojamiento } from "../../models/alojamientomodel";
import { Alojamientosservice } from "../../services/alojamientosservice";

@Component({
    selector: "app-alojamientocomponent",
    standalone: false,
    styleUrl: "./alojamientocomponent.css",
    templateUrl: "./alojamientocomponent.html"
})
export class Alojamientocomponent implements OnInit {

    alojamiento: Alojamiento[] = [];
    alojamientoFiltrado: Alojamiento[] = [];
    ciudades: string[] = [];
    tipos: string[] = [];
    servicios: string[] = [];
    serviciosSeleccionados: string[] = [];

    cargando: boolean = true;
    ciudadSeleccionada: string = "";
    tipoSeleccionado: string = "";
    capacidadMinima: number = 1;
    precioMinimo: number = 0;
    precioMaximo: number = 0;
    precioMinimoDisponible: number = 0;
    precioMaximoDisponible: number = 0;
    calificacionMinima: number = 0;
    ordenSeleccionado: string = "relevancia";
    fechaLlegada: string = "";
    fechaSalida: string = "";

    private alojamientosService = inject(Alojamientosservice);
    private cdr = inject(ChangeDetectorRef);

    ngOnInit(): void {
        this.alojamientosService.getAlojamientos().subscribe({
            next: (datos: Alojamiento[]) => {
                this.alojamiento = datos;

                this.ciudades = [
                    ...new Set(datos.map(alojamiento => alojamiento.ciudad))
                ].sort();

                this.tipos = [
                    ...new Set(datos.map(alojamiento => alojamiento.tipo))
                ].sort();

                this.servicios = [
                    ...new Set(datos.flatMap(alojamiento => alojamiento.servicios))
                ].sort();

                if (datos.length > 0) {
                    this.precioMinimoDisponible = Math.min(
                        ...datos.map(alojamiento => alojamiento.precioNoche)
                    );

                    this.precioMaximoDisponible = Math.max(
                        ...datos.map(alojamiento => alojamiento.precioNoche)
                    );

                    this.precioMinimo = this.precioMinimoDisponible;
                    this.precioMaximo = this.precioMaximoDisponible;
                }

                const estado = history.state;

                if (estado && estado.filtros) {
                    if (estado.filtros.destino) {
                        this.ciudadSeleccionada = estado.filtros.destino;
                    }

                    if (estado.filtros.huespedes) {
                        this.capacidadMinima = Number(estado.filtros.huespedes);
                    }

                    if (estado.filtros.llegada) {
                        this.fechaLlegada = estado.filtros.llegada;
                    }

                    if (estado.filtros.salida) {
                        this.fechaSalida = estado.filtros.salida;
                    }
                }

                this.cargando = false;
                this.aplicarFiltros();
                this.cdr.detectChanges();
            },
            error: (error) => {
                console.error("Error cargando alojamientos:", error);
                this.alojamiento = [];
                this.alojamientoFiltrado = [];
                this.cargando = false;
                this.cdr.detectChanges();
            }
        });
    }

    normalizarTexto(texto: string): string {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    seleccionarTipo(tipo: string): void {
        this.tipoSeleccionado =
            this.tipoSeleccionado === tipo ? "" : tipo;

        this.aplicarFiltros();
    }

    cambiarServicio(servicio: string): void {
        const posicion = this.serviciosSeleccionados.indexOf(servicio);

        if (posicion >= 0) {
            this.serviciosSeleccionados.splice(posicion, 1);
        } else {
            this.serviciosSeleccionados.push(servicio);
        }

        this.aplicarFiltros();
    }

    servicioSeleccionado(servicio: string): boolean {
        return this.serviciosSeleccionados.includes(servicio);
    }

    cambiarPrecioMinimo(): void {
        if (this.precioMinimo > this.precioMaximo) {
            this.precioMinimo = this.precioMaximo;
        }

        this.aplicarFiltros();
    }

    cambiarPrecioMaximo(): void {
        if (this.precioMaximo < this.precioMinimo) {
            this.precioMaximo = this.precioMinimo;
        }

        this.aplicarFiltros();
    }

    aplicarFiltros(): void {
        let resultado = [...this.alojamiento];

        if (this.ciudadSeleccionada !== "") {
            const destino = this.normalizarTexto(this.ciudadSeleccionada);

            resultado = resultado.filter(alojamiento => {
                const ciudad = this.normalizarTexto(alojamiento.ciudad);
                const ubicacion = this.normalizarTexto(alojamiento.ubicacion);

                return ciudad.includes(destino) || ubicacion.includes(destino);
            });
        }

        if (this.tipoSeleccionado !== "") {
            const tipo = this.normalizarTexto(this.tipoSeleccionado);

            resultado = resultado.filter(
                alojamiento =>
                    this.normalizarTexto(alojamiento.tipo) === tipo
            );
        }

        if (this.capacidadMinima > 1) {
            resultado = resultado.filter(
                alojamiento => alojamiento.capacidad >= this.capacidadMinima
            );
        }

        resultado = resultado.filter(
            alojamiento =>
                alojamiento.precioNoche >= this.precioMinimo &&
                alojamiento.precioNoche <= this.precioMaximo
        );

        if (this.calificacionMinima > 0) {
            resultado = resultado.filter(
                alojamiento =>
                    alojamiento.calificacion >= this.calificacionMinima
            );
        }

        if (this.serviciosSeleccionados.length > 0) {
            resultado = resultado.filter(
                alojamiento =>
                    this.serviciosSeleccionados.every(
                        servicioSeleccionado =>
                            alojamiento.servicios.some(
                                servicio =>
                                    this.normalizarTexto(servicio) ===
                                    this.normalizarTexto(servicioSeleccionado)
                            )
                    )
            );
        }

        this.ordenarResultados(resultado);
        this.alojamientoFiltrado = resultado;
    }

    ordenarResultados(resultado: Alojamiento[]): void {
        switch (this.ordenSeleccionado) {
            case "precioAscendente":
                resultado.sort((a, b) => a.precioNoche - b.precioNoche);
                break;

            case "precioDescendente":
                resultado.sort((a, b) => b.precioNoche - a.precioNoche);
                break;

            case "calificacion":
                resultado.sort((a, b) => b.calificacion - a.calificacion);
                break;

            case "nombre":
                resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;

            default:
                resultado.sort((a, b) => b.calificacion - a.calificacion);
                break;
        }
    }

    limpiarFiltros(): void {
        this.ciudadSeleccionada = "";
        this.tipoSeleccionado = "";
        this.serviciosSeleccionados = [];
        this.capacidadMinima = 1;
        this.precioMinimo = this.precioMinimoDisponible;
        this.precioMaximo = this.precioMaximoDisponible;
        this.calificacionMinima = 0;
        this.ordenSeleccionado = "relevancia";
        this.fechaLlegada = "";
        this.fechaSalida = "";

        this.aplicarFiltros();
    }
}