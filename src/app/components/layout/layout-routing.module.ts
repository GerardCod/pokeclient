import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilitiesComponent } from './dashboard/abilities/abilities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './dashboard/items/items.component';
import { MovementsComponent } from './dashboard/movements/movements.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent,
        children: [
          {
            path: 'abilities',
            component: AbilitiesComponent
          },
          {
            path: 'items',
            component: ItemsComponent,
          },{
            path: 'movements',
            component: MovementsComponent,
          },
          {
            path:'',
            redirectTo:'abilities'
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
