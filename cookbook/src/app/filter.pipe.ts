import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let resultArray = [];
    for (let item of value) {
      if (item.name.match('^.*' + args + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
