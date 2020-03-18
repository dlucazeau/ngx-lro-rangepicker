import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { DateRange } from './range-picker/utils';

@Component({
    selector: 'aa-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss'
    ]
})
export class AppComponent
{
    public configRangePicker = {
        minDate: DateTime.utc(2016, 1, 1),
        maxDate: DateTime.utc(2020, 12, 31),
        format: 'dd/MM/yyyy',
        // sinceDate: DateTime.utc(2019, 1, 7),
        // untilDate: DateTime.utc(2019, 2, 14)
    };

    constructor() { }

    onSubmit (dr: DateRange)
    {
        console.log(dr);
    }
}
