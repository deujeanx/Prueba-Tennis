import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JuegoComponent } from "./componente/juego/juego.component";
import { NombreComponent } from "./componente/nombre/nombre.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, JuegoComponent, NombreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'tenis';
  nombre1: string = '';
  nombre2: string = '';
  mostrar: boolean = false;

  recibirNombres(datos: { nombre1: string; nombre2: string }) {
    
    if(datos.nombre1=="" || datos.nombre2==""){

      alert("Ingrese nombre");

    } else {

      this.nombre1 = datos.nombre1;
      this.nombre2 = datos.nombre2;
      this.mostrar = true;

    }

    

  }

  juegoReiniciado(){

    this.mostrar = false;

  }

}
