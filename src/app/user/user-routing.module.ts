import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecargaExitComponent } from './components/recarga-exit/recarga-exit.component';
import { RecargaFormComponent } from './components/recarga-form/recarga-form.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';

const routes: Routes = [
  {
    path:'',
    component: UserlayoutComponent,
    children: [
      {
      path: '',
      component: RecargaFormComponent
      },
      {
        path: 'exit',
        component: RecargaExitComponent
      }
      ]
  },
  {
    path: 'home',
    loadChildren:() => import('./../home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
