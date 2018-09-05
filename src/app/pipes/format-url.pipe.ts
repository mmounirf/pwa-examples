import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUrl'
})
export class FormatUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/^http:\/\//i, 'https://');
  }

}
