import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //las declaraciones contiene los componentes que tenemos en esta sección
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //cosas que sean visibles(todo lo que definimos en las declaraciones está invisible
    //para la aplicación excepto los componentes dentro del módulo)
    exports:[
        ListadoComponent,
        HeroeComponent
    ],
    //aquí pondríamos todos los módulos
    //El módulo CommonModule sirve para las directivas entre ellas para las condicionales, bucles,etc
    imports:[
        CommonModule
    ]

})

export class HeroesModule{

}