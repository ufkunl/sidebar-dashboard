import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SettingsRoutingModule } from './settings-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsComponent} from "./settings.component";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule, 
    SettingsRoutingModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  exports: [SettingsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsModule {}
