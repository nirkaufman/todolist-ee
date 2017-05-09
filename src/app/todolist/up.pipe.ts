import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tdUp'
})
export class UpPipe implements PipeTransform {

  transform(value: string, suffix: string): any {
    return value.toUpperCase() + suffix;
  }

}
