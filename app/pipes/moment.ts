import {Injectable, Pipe} from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';
@Pipe({
  name: 'moment'
})
@Injectable()
export class Moment {
  transform(value: number, args: any[]) {
   return moment.duration(value, 'milliseconds').format('mm:ss');
  }
}
