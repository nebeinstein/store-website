export class Event {
    public title: string;
    public date: Date;
    public time: string;
    public description: string;
    public imagePath: string;

    constructor(title: string, date: Date, time: string, description: string, imagePath: string){
        this.title = title;
        this.date = date;
        this.time = time;
        this.description = description;
        this.imagePath = imagePath;
    }
}