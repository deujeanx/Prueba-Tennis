import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nombre',
  standalone: true,
  imports: [],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {

  nombre1: string = "";
  nombre2: string = "";

  @Output() nombresGuardados = new EventEmitter<{ nombre1: string; nombre2: string }>();

  guardarNombre(nombre1G: string, nombre2G: string) {
    this.nombresGuardados.emit({
      nombre1: nombre1G,
      nombre2: nombre2G
    });
  }


}
