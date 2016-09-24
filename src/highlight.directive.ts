/**
 * Created by Code1912 on 2016/9/25.
 */
import { Directive, OnInit, ElementRef, Input, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[hightlight]'
})
export class HighlightDirective implements OnInit {
    // constructor(el:ElementRef,renderer:Renderer) { 
    constructor(private el: ElementRef, private renderer: Renderer) {

        this.setBackgroundColor("yellow")
    }
    @HostListener("mouseenter")
    mouseEnter() {
        this.setBackgroundColor("green")
    }
    @HostListener("mouseleave")
    mouseLeave() {
        this.setBackgroundColor("yellow");
    }
    ngOnInit() {
        console.log("init")
    }
    private setBackgroundColor(color: string) {

        // styleName注意大小写敏感啊
        this.renderer.setElementStyle(this.el.nativeElement, "backgroundColor", color);
    }
}
