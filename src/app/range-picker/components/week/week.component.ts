import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[aaWeek]',
    templateUrl: './week.component.html',
    styleUrls: [
        './week.component.scss'
    ]
})
export class WeekComponent implements OnInit
{
    // @Input() config: RangeConfig;
    public weekDays: string[] = [];

    constructor()
    {
    }

    ngOnInit ()
    {
        // const s = startOfMonth(this.config.inputDate);

        // let startDay: Date = startOfWeek(s, {
        //     weekStartsOn: Constants.weekStartsOn
        // });
        // for (let col = 0; col < 7; col++)
        // {
        //     this.weekDays[col] = format(startDay, 'iiiiii');

        //     startDay = addDays(startDay, 1);
        // }
    }
}
