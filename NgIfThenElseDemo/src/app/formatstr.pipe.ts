import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'formatstring'
})
export class FormatStringPipe implements PipeTransform {
  transform(value: string, seperator: string,seperator1: string): string {
    console.log(seperator);
    console.log(seperator1);
    let result = value.split(' ').join(seperator1);
    return result;
  }
} 