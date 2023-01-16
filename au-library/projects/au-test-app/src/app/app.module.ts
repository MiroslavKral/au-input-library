import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuInputModule } from 'au-input';
import { AuModalModule } from 'au-modal';
import { AuTabPanelModule } from 'au-tab-panel';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuInputModule,
    AuModalModule,
    AuTabPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
