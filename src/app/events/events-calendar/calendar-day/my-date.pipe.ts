import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'my-date'
})
export class MyDatePipe implements PipeTransform {
    transform(value: Date) {
        return value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
	} 
}