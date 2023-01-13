import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuTabPanelModule } from './au-tab-panel/au-tab-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuTabPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
