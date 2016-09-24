/**
 * Created by Code1912 on 2016/9/18.
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import  {DetailComponent} from './detail.component'
import    {HighlightDirective} from './highlight.directive'
@NgModule({
    imports: [
        BrowserModule
        ,FormsModule// 这个是 ngmodel 要用到input上面 ，如果不导入要报错
         
    ],
    declarations: [
        AppComponent,HeaderComponent,DetailComponent,HighlightDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
platformBrowserDynamic().bootstrapModule(AppModule);