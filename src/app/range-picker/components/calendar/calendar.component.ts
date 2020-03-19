import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { DateTime } from 'luxon';

import { RangeConfig, Constants, RangePickerService, CalendarConfig } from '../../utils';
import { VisualDay } from '../../models';
import { tap } from 'rxjs/operators';

@Component({
    selector: '[aaCalendar]',
    templateUrl: './calendar.component.html',
    styleUrls: [
        '../shared.scss',
        './calendar.component.scss'
    ]
})
export class CalendarComponent implements OnInit, OnDestroy
{
    @Input() left: boolean;
    @Output() fromCalendarDateChanged: EventEmitter<DateTime> = new EventEmitter<DateTime>();
    public rows: number[] = Array(6).fill(0).map((x, i) => i);
    public cols: number[] = Array(7).fill(0).map((x, i) => i);
    public days: VisualDay[][] = [];
    public cfg: CalendarConfig = new CalendarConfig();
    public pathBorder: string;

    constructor(private rangePickerService: RangePickerService)
    {
    }

    ngOnInit ()
    {
        this.rangePickerService.config
            .pipe(
                tap((rc: RangeConfig) =>
                    this.buildCalendar(rc)
                )
            )
            .subscribe();
    }

    ngOnDestroy (): void
    {
    }

    onSelectDate (vd: VisualDay)
    {
        this.rangePickerService.clickedDay(vd.date);
    }

    private buildCalendar (rc: RangeConfig)
    {
        const firstDay = (this.left ? rc.leftFirstDay : rc.rightFirstDay).startOf('day');
        let currentDay: DateTime = firstDay.startOf('week');

        for (let row = 0; row < 7; row++)
        {
            this.days[row] = [];
            for (let col = 0; col < 7; col++)
            {
                this.days[row][col] = new VisualDay(
                    currentDay,
                    firstDay,
                    rc.minDate,
                    rc.maxDate,
                    rc.since,
                    rc.until
                );
                currentDay = currentDay.plus({ day: 1 });
            }
        }

        this.pathBorder = `M0,0 h${this.cfg.calendarSize.width} v${this.cfg.calendarSize.height} h-${this.cfg.calendarSize.width} z`;
    }
}
