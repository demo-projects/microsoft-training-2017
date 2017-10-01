import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string, suffix: string): string {
    return value.toUpperCase() + suffix;
  }

}
