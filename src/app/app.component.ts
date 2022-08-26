import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //propiedades
  title = 'hola como estas';

  //metodos
  getNme():void{
    console.log("hola")
  }
}
