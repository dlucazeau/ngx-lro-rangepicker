import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DateTime } from 'luxon';

import { CalendarConfig, RangePickerService, DateRange, RangeConfig } from '../../utils';
import { tap } from 'rxjs/operators';

@Component({
    selector: '[aaTools]',
    templateUrl: './tools.component.html',
    styleUrls: [
        '../shared.scss',
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
    public disabled: boolean = false;

    constructor(private rangePickerService: RangePickerService)
    {
    }

    ngOnInit ()
    {
        this.rangePickerService.config
            .pipe(
                tap((rc: RangeConfig) =>
                    this.disable(rc)
                )
            )
            .subscribe();
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

    private disable (rc: RangeConfig)
    {
        this.disabled = rc.since === null;
    }
}
