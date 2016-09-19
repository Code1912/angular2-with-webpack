/**
 * Created by Code1912 on 2016/9/19.
 */
import {Component,OnInit} from  "@angular/core";

import{HeaderComponent} from "../src/header/header.component"
// if use selector:"app" ,it's not replace the app element, e.g:<app></app>
@Component({
    selector:"app", // use it as a div has app attribute
    templateUrl:("./app.component.html"),

})
export  class  AppComponent implements  OnInit{
    title:string = 'First App';
    ngOnInit(){

    }
}