import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { QadateComponent } from './qadate/qadate.component';
import { DatoscitasComponent } from './datoscitas/datoscitas.component';



@NgModule({
    declarations:[NoteComponent, 
                  QadateComponent,
                  DatoscitasComponent],
    imports:[CommonModule],
    exports:[NoteComponent, 
             QadateComponent,
             DatoscitasComponent],
    schemas:
            [CUSTOM_ELEMENTS_SCHEMA]

})

export class ComponentsModule {}
