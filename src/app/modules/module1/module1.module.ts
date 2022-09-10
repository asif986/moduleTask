import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [Module1Component],
  imports: [CommonModule, Module1RoutingModule, SharedModule],
})
export class Module1Module {}
