import { Component } from "@angular/core";


@Component(
    {
        selector:'app-heroe',
        templateUrl: 'heroe.component.html'
    }
)

export class HeroeComponent{

    nombre:string='Ironman';
    edad:number  =45

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{

        //creado como template con los battips ``
        return `${this.nombre} - ${this.edad}`;
        //la forma básica sería esta:
        //return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre():void{
        this.nombre= 'Spiderman';
    }

    cambiarEdad():void{
        this.edad=30;
    }

}