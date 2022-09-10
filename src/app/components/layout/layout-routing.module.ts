import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: 'module1',
        loadChildren: () =>
          import('../../modules/module1/module1.module').then(
            (m) => m.Module1Module
          ),
      },
      {
        path: 'module2',
        loadChildren: () =>
          import('../../modules/module2/module2.module').then(
            (m) => m.Module2Module
          ),
      },
      {
        path: 'module3',
        loadChildren: () =>
          import('../../modules/module3/module3.module').then(
            (m) => m.Module3Module
          ),
      },
      {
        path: 'module4',
        loadChildren: () =>
          import('../../modules/module4/module4.module').then(
            (m) => m.Module4Module
          ),
      },
      {
        path: 'module5',
        loadChildren: () =>
          import('../../modules/module5/module5.module').then(
            (m) => m.Module5Module
          ),
      },
      {
        path: 'module6',
        loadChildren: () =>
          import('../../modules/module6/module6.module').then(
            (m) => m.Module6Module
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
