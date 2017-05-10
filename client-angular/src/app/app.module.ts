import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SDKBrowserModule} from "./shared/sdk/index";
import {AppRoutingModule} from "./app-routing.module";
import {SigninComponent} from "./signin/signin.component";
import {HomeComponent} from "./home/home.component";
import {NewsListComponent} from "./news/list/news-list.component";
import {NewsFormComponent} from "./news/form/news-form.component";
import {NewsExtended} from "./shared/extended/news.extended.js";


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    NewsListComponent,
    NewsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    NewsExtended
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
