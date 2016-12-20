import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Menu } from './menu/menu.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Menu],
  bootstrap: [AppComponent]
})
export class AppModule { }
