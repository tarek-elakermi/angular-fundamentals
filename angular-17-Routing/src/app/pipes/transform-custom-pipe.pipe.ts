import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TransformCustomPipePipe implements PipeTransform {

  transform(value: string, start?:number, end?:number): string { // ? means that the param is optional it could be not send from the html pipe
    return value.slice(start, end);
  }

}
