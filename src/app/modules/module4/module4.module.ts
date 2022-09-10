import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module4RoutingModule } from './module4-routing.module';
import { Module4Component } from './module4.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [Module4Component],
  imports: [CommonModule, Module4RoutingModule, SharedModule],
})
export class Module4Module {}
