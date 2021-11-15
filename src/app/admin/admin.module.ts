import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { DesktopComponent } from './desktop/desktop.component';
import { MenuComponent } from './components/menu/menu.component';
import { TorreControlComponent } from './components/torre-control/torre-control.component';
import { CombustibleComponent } from './components/combustible/combustible.component';
import { LiquidacionComponent } from './components/liquidacion/liquidacion.component';
import { GenLiquidacionComponent } from './components/gen-liquidacion/gen-liquidacion.component';
import { GenCombustibleComponent } from './components/gen-combustible/gen-combustible.component';


@NgModule({
  declarations: [
    MenuComponent, 
    TorreControlComponent, 
    CombustibleComponent, 
    DesktopComponent, 
    LiquidacionComponent, 
    GenLiquidacionComponent, 
    GenCombustibleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class AdminModule { }
