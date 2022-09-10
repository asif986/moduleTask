import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module6Component } from './module6.component';

const routes: Routes = [{ path: '', component: Module6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module6RoutingModule { }
