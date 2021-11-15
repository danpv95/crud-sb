import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './component/header/header.component';
import { EncabezadosComponent } from './component/encabezados/encabezados.component';

import { CdkTableModule } from '@angular/cdk/table';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    EncabezadosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule
  ],
  exports: [
    HeaderComponent,
    EncabezadosComponent
    ]
})
export class SharedModule { }
