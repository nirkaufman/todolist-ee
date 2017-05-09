import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'countBy',
  pure: false
})
export class CountByPipe implements PipeTransform {

  transform(arr: any[], key: string, value: any): number {
    return arr.filter(item => item[key] === value).length;
  }

}
