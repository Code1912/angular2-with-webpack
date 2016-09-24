/**
 * Created by Code1912 on 2016/9/18.
 */
import {Component,OnInit,Input} from  "@angular/core";
import {AppConfig} from "../Model/appConfig"
@Component({
    selector:"[test]",
    templateUrl:"./header.component.html",

})
export  class  HeaderComponent implements  OnInit{
    title:string = 'HeaderComponent ';

    @Input()
    parentModel:AppConfig;
    childChangeAppName(){
        this.parentModel.appName="Child App Name"
    }
    ngOnInit(){

    }
}