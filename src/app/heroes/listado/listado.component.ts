import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})

export class ListadoComponent{
  heroes: string []= ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  borrado:string="";
  
  borrarHeroe(){
    console.log("Borrando...");
    //this.heroes.splice(2,1);      // operador "or" string vacío es porque devuelve un undefined.
       this.borrado =this.heroes.shift()|| '';


  }
}