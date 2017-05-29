import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MdSidenavModule,
  MdButtonModule,
  MdToolbarModule,
  MdListModule,
  MdIconModule,
  MdCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  declarations: [],
  exports: MATERIAL_MODULES
})
export class MaterialModule { }
