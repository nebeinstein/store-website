import { Subject } from 'rxjs/Subject';

export class CalendarService {
    private currentDate: Date = new Date(2017, 8, 9);
    currentDateChanged = new Subject<Date>();

    private months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    getCurrentDate() {
        return this.currentDate;
    }

    setCurrentDate(newDate: Date) {
        this.currentDate = newDate;
        this.currentDateChanged.next(this.currentDate);
    }

    getCurrentMonth() {
        return this.currentDate.getMonth();
    }

    setCurrentMonth(index: number) {
        this.currentDate.setMonth(index);
        this.currentDateChanged.next(this.currentDate);
    }

    getCurrentYear() {
        return this.currentDate.getFullYear();
    }

    setCurrentYear(year: number) {
        this.currentDate.setFullYear(year);
        this.currentDateChanged.next(this.currentDate);
    }

    getDaysInMonth(month: number, year: number){
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    getStartDayInMonth(month: number, year: number){
        var date = new Date(year, month, 1);
        return date.getDay();
    }

    getMonthName(index: number) {
        return this.months[index];
    }
}