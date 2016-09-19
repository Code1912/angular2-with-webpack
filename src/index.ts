/**
 * Created by Code1912 on 2016/9/18.
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,HeaderComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
platformBrowserDynamic().bootstrapModule(AppModule);