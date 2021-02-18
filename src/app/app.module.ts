import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { SameerkaserverComponent } from './sameerkaserver/sameerkaserver.component';

@NgModule({
  declarations: [
    AppComponent,
    SameerkaserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([AppComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
