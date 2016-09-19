/**
 * Created by Code1912 on 2016/9/18.
 */
import {Component,OnInit} from  "@angular/core";

@Component({
    selector:"[test]",
    templateUrl:"./header.component.html",

})
export  class  HeaderComponent implements  OnInit{
    title:string = 'HeaderComponent ';
    ngOnInit(){

    }
}