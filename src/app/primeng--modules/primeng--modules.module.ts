import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';



@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    ButtonModule,
    ToggleButtonModule,
    CardModule,
    PanelModule,
    FieldsetModule,
    ProgressSpinnerModule,
  ]
})
export class PrimengModulesModule { }
