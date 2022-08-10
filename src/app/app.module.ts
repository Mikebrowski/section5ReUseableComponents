import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { Favc2Component } from './favc2/favc2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    FavoriteComponent,
    ItemOutputComponent,
    Favc2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
