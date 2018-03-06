import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'welcome'
})
export class WelcomePipe implements PipeTransform {
  transform(value: string,type: string): string {
    let message = ''
    if (type == 'name')
      message = "Welcome Mr." + value;
    else if(type == 'city')
      message = "Welcome to " + value;
    console.log("After :: "+message);
    return message;
  }
} 