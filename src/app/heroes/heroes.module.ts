import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        //Aqui va todo lo que no se ve en la App
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        //Aqui va todo lo que se ve en la App
        ListadoComponent
    ],
    imports: [
        //Aqui va todos los modulos, modulos dentro de modulos
        CommonModule //Usado para poder tener las directivas
    ]
})

export class heroesModule{}