import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CardDetailComponent } from './public/card-detail/card-detail.component';
import { GroupChooseComponent } from './public/group-choose/group-choose.component';
import { CommonModule } from '@angular/common';
import { GroupDetailComponent } from './public/group-detail/group-detail.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
