/**
 * Created by Code1912 on 2016/9/19.
 */
import {Component,OnInit} from  "@angular/core";
import {AppConfig} from "./Model/appConfig"
// if use selector:"app" ,it's not replace the app element, e.g:<app></app>
@Component({
    selector:"app", // use it as a div has app attribute
    templateUrl:("./app.component.html"),
})
export  class  AppComponent implements  OnInit{
    title:string = 'First App';
    model:AppConfig=new AppConfig("APP Name");
    constructor(){

    }
    clickEvent(){
        alert("Click");
    }
    changeAppName(){
        this.model.appName= this.model.appName=="App Name"?"Changed AppName":"App Name"
    }
    ngOnInit(){
          //alert("init") ;
    }
}