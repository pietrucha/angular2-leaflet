import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Menu } from './menu/menu.component';

@NgModule({
  imports: [BrowserModule,HttpModule],
  declarations: [AppComponent, Menu],
  bootstrap: [AppComponent]  
})
export class AppModule { }
