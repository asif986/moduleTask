import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { Module3Component } from './module3.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [Module3Component],
  imports: [CommonModule, Module3RoutingModule, SharedModule],
})
export class Module3Module {}
