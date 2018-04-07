import { Directive,ElementRef, AfterViewInit,Input } from '@angular/core';

@Directive({ 
     selector: '[customColor]'
})
export class ColorDirective implements AfterViewInit {

    @Input()
    textSize : string;

    constructor(private elRef: ElementRef){}  

    ngAfterViewInit() {
        this.elRef.nativeElement.style.color = 'green';
    }

    change(changedColor: String) {
       this.elRef.nativeElement.style.color = changedColor;
       this.elRef.nativeElement.style.fontSize = this.textSize;
    }

}