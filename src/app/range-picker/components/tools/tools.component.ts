import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DateTime } from 'luxon';

import { CalendarConfig, RangePickerService, DateRange } from '../../utils';

@Component({
    selector: '[aaTools]',
    templateUrl: './tools.component.html',
    styleUrls: [
        './tools.component.scss'
    ]
})
export class ToolsComponent implements OnInit
{
    // @Input() config: CalendarConfig;
    @Output() fromToolsToday: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromToolsOptions: EventEmitter<DateTime> = new EventEmitter<DateTime>();
    @Output() fromToolsSubmit: EventEmitter<DateRange> = new EventEmitter<DateRange>();
    public cfg: CalendarConfig = new CalendarConfig();

    constructor(private rangePickerService: RangePickerService)
    {
    }

    ngOnInit ()
    {
    }

    onToday ()
    {
        this.fromToolsToday.emit();
    }

    onOptions ()
    {
    }

    onSubmit ()
    {
        this.fromToolsSubmit.emit(this.rangePickerService.dateRange);
    }
}
