import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {
    transform(value: string[]) {
		let start = value[0];
		let startHour = start.split(':')[0];
		let startMinute = start.split(':')[1];
		let end = value[1];
		let endHour = end.split(':')[0];
		let endMinute = end.split(':')[1];
		let startTime = parseInt(startHour) > 12 ? parseInt(startHour)-12 + ':' + startMinute + ' p.m.' : startHour + ':' + startMinute + ' a.m.';
		let endTime = parseInt(endHour) > 12 ? parseInt(endHour)-12 + ':' + endMinute + ' a.m.' : endHour + ':' + endMinute + ' p.m.';
        return startTime + ' - ' + endTime;
    } 
}