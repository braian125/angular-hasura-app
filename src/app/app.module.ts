import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { GraphQlModule } from './graph-ql/graph-ql.module';
import { AddAccountComponent } from './account/add-account/add-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GraphQlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
