import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecargaFormComponent } from './components/recarga-form/recarga-form.component';
import { RecargaExitComponent } from './components/recarga-exit/recarga-exit.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';

@NgModule({
  declarations: [
    RecargaFormComponent, 
    RecargaExitComponent, 
    UserlayoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
