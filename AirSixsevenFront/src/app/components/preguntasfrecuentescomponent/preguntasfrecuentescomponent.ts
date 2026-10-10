import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Preguntasservice } from '../../services/preguntasservice';
import { Pregunta } from '../../models/preguntamodel';

@Component({
  selector: 'app-preguntasfrecuentescomponent',
  standalone: false,
  styleUrl: './preguntasfrecuentescomponent.css',
  templateUrl: './preguntasfrecuentescomponent.html'
})
export class Preguntasfrecuentescomponent implements OnInit {
  private preguntasService = inject(Preguntasservice);
  private cdr = inject(ChangeDetectorRef);

  preguntas: Pregunta[] = [];
  cargando = true;

  abierta: number | null = null;

  ngOnInit() {
    this.preguntasService.getPreguntas().subscribe(datos => {
      this.preguntas = datos;
      this.cargando = false;
      this.cdr.detectChanges();
    });
    this.cdr.detectChanges();
  }

  alternar(id: number) {
    this.abierta = this.abierta === id ? null : id;
  }
}