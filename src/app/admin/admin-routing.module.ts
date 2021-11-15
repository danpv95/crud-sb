import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopComponent } from './desktop/desktop.component';
import { MenuComponent } from './components/menu/menu.component';
import { TorreControlComponent } from './components/torre-control/torre-control.component';
import { CombustibleComponent } from './components/combustible/combustible.component';
import { GenCombustibleComponent } from './components/gen-combustible/gen-combustible.component';
import { LiquidacionComponent } from './components/liquidacion/liquidacion.component';
import { GenLiquidacionComponent } from './components/gen-liquidacion/gen-liquidacion.component';

const routes: Routes = [
  {
    path: '',
    component: DesktopComponent,
    children: [
      {
        path: '',
        component: MenuComponent,
      },
      {
        path: 'torre-control',
        component: TorreControlComponent,
      },
      {
        path: 'combustible',
        component: CombustibleComponent,
      },
      {
        path: 'combustible/gen',
        component: GenCombustibleComponent,
      },
      {
        path: 'liquidacion',
        component: LiquidacionComponent,
      },
      {
        path: 'liquidacion/gen',
        component: GenLiquidacionComponent,
      },
    ],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./../home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
