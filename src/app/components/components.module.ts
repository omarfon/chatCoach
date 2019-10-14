import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { QadateComponent } from './qadate/qadate.component';



@NgModule({
    declarations:[NoteComponent, QadateComponent],
    imports:[CommonModule],
    exports:[NoteComponent, QadateComponent],
    schemas:
            [CUSTOM_ELEMENTS_SCHEMA]

})

export class ComponentsModule {}