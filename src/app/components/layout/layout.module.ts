import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule,
    LayoutRoutingModule,
  ],
  exports: [],
})
export class LayoutModule {}
