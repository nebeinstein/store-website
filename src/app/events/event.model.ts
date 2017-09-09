export class EventModel {
    public title: string;
    public date: Date;
    public time: string[];
    public subtitle: string;
    public description: string;
    public imagePath: string;

    constructor(title: string, date: Date, time: string[], subtitle: string, description: string, imagePath: string){
        this.title = title;
        this.date = date;
        this.time = time;
        this.subtitle = subtitle;
        this.description = description;
        this.imagePath = imagePath;
    }
}