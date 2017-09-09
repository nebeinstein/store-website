import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {
    transform(value: string[]) {
		let startTime = this.twentyFourHourToTwelveHour(value[0]);
		let endTime = this.twentyFourHourToTwelveHour(value[1]);
        return startTime + ' - ' + endTime;
	} 

	twentyFourHourToTwelveHour(time: string){
		let hour = time.split(':')[0];
		let minute = time.split(':')[1];
		return parseInt(hour) > 12 ? parseInt(hour) - 12 + ':' + minute + ' p.m.' : hour + ':' + minute + ' a.m.';
	}
}