import { Component,Input } from '@angular/core';
@Component({
    selector : 'app-success-message',
    template : `<h1><ng-content></ng-content>{{successMessage}}</h1>`,
    styles  : ['h1{color:green}']
})
export class SuccessMessageComponent {
    
    @Input("msg") //Accept Input From Parent
    successMessage : string = '';
    
    @Input()
    color:string;
    
}