import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module5RoutingModule } from './module5-routing.module';
import { Module5Component } from './module5.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [Module5Component],
  imports: [CommonModule, Module5RoutingModule, SharedModule],
})
export class Module5Module {}
