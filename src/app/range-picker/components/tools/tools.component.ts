import { Component, Output, EventEmitter } from '@angular/core';

import { tap } from 'rxjs/operators';

import { CalendarConfig, RangePickerService, DateRange, StatePicker } from '../../utils';

@Component({
    selector: '[aaTools]',
    templateUrl: './tools.component.html',
    styleUrls: [
        '../shared.scss',
        './tools.component.scss'
    ]
})
export class ToolsComponent
{
    @Output() fromToolsToday: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromToolsSubmit: EventEmitter<DateRange> = new EventEmitter<DateRange>();
    @Output() fromToolsReset: EventEmitter<void> = new EventEmitter<void>();
    public cfg: CalendarConfig = new CalendarConfig();

    constructor(private rangePickerService: RangePickerService)
    {
    }

    onToday ()
    {
        this.fromToolsToday.emit();
    }

    onOptions ()
    {
        this.rangePickerService.toggleOptions();
    }

    onSubmit ()
    {
        this.fromToolsSubmit.emit(this.rangePickerService.dateRange);
    }

    onReset ()
    {
        this.fromToolsReset.emit();
    }
}
