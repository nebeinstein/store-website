import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {
    transform(value: string[]) {
        let start = value[0];
		let end = value[1];
        value.forEach(
            (item, index) => {
				let times = item.split(':');
                if (parseInt(times[0]) > 12) {
					value[index] = (parseInt(times[0])-12) + ':' + times[1];
					if(!value[index].includes(' p.m.')){ // checks to see if the thing already has pm on it
						value[index] += ' p.m.';
					}
                } else {
					value[index] = item;
					if(!value[index].includes(' a.m.') && !value[index].includes(' p.m.')){ // This checks to see if the time already has am or pm on it
						// it must check for both because once the time is modified (from 24 hour to 12 hour) 
						// it satisfies both the else condition and the no containing pm condition
						value[index] += ' a.m.'; // ads it here if it doesn't
					}
                }
            }
        );
        return value[0] + ' - ' + value[1];
    }
}