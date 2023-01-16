import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuInputModule } from "../../../au-input/src/app/lib/au-input.module";
import { AuTabPanelModule } from "../../../au-tab-panel/src/app/au-tab-panel/au-tab-panel.module";
import { AuModalModule } from "./au-modal/au-modal.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuInputModule,
    AuTabPanelModule,
    AuModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
