import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatoscitasComponent } from './datoscitas/datoscitas.component';
import { DatosclaudiaComponent } from './datosclaudia/datosclaudia.component';



@NgModule({
  declarations: [DatoscitasComponent, DatosclaudiaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DatoscitasComponent,
    DatosclaudiaComponent
  ]
})
export class ComponentsModule { }
