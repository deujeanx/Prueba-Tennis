import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  @Input() nombre1: string = '';
  @Input() nombre2: string = '';

  puntos1 = 0;
  puntos2 = 0;

  puntuacion1 = "0";
  puntuacion2 = "0";

  mostrarBotones: boolean = true;

  nuevoPunto(data:number){

    if(data == 1) {

      this.puntos1++;

    } else if (data == 2) {

      this.puntos2 ++;

    }

    if (this.puntos1 == 1) {
    
      this.puntuacion1 = "15";

    } else if (this.puntos1 == 2) {

      this.puntuacion1 = "30";

    } else if (this.puntos1 == 3 || this.puntos1==this.puntos2) {

      this.puntuacion1 = "40";

    } else if (this.puntos1>3 && this.puntos1-this.puntos2==1){

      this.puntuacion1 = "Ventaja";

    } else if (this.puntos1>3 && this.puntos1-this.puntos2>1) {

      this.puntuacion1 = "GANADOR!!"

      this.mostrarBotones = false;

    }

    if (this.puntos2 == 1) {
    
      this.puntuacion2 = "15";

    } else if (this.puntos2 == 2) {

      this.puntuacion2 = "30";

    } else if (this.puntos2 == 3 || this.puntos1==this.puntos2) {

      this.puntuacion2 = "40";

    } else if (this.puntos2>3 && this.puntos2-this.puntos1==1){

      this.puntuacion2 = "Ventaja";
      console.log("entra")

    } else if (this.puntos2 > 3 && this.puntos2-this.puntos1>1) {

      this.puntuacion2 = "GANADOR!!"

      this.mostrarBotones = false;

    }

    console.log(this.puntos2-this.puntos1)
    console.log(this.puntos1 + "1");
    console.log(this.puntos2 + "2");    


  }


  @Output() game = new EventEmitter <boolean>();

  reiniciarJuego(){

    this.game.emit();

  }

}
