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
					if(!value[index].includes(' p.m.')){
						value[index] += ' p.m.'
					}
                } else {
					value[index] = item;
					if(!value[index].includes(' a.m.') && !value[index].includes(' p.m.')){
						value[index] += ' a.m.'
					}
                }
            }
        );
        return value[0] + ' - ' + value[1];
    }
}