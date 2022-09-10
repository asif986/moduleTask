import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { LayoutModule } from '../app/components/layout/layout.module';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // initialize the angular firebase
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
