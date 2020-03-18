import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { tap } from 'rxjs/operators';

import { RangeConfig, CalendarConfig, RangePickerService } from '../../utils';

@Component({
    selector: '[aaNavigation]',
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation.component.scss'
    ]
})
export class NavigationComponent implements OnInit
{
    @Input() config: RangeConfig;
    @Output() fromNavigationShowMonths: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromNavigationShowYears: EventEmitter<null> = new EventEmitter<null>();
    public cfg: CalendarConfig = new CalendarConfig();
    public displayRange: string = '';

    constructor(private rangePickerService: RangePickerService)
    {
    }

    ngOnInit ()
    {
        this.rangePickerService.config
            .pipe(
                tap((rc: RangeConfig) =>
                    this.formatDate(rc)
                )
            )
            .subscribe();
    }

    onShowMonths ()
    {
        this.fromNavigationShowMonths.emit();
    }

    onShowYears ()
    {
        this.fromNavigationShowYears.emit();
    }

    onPrevYear ()
    {
        this.rangePickerService.prevYear();
    }

    onPrevMonth ()
    {
        this.rangePickerService.prevMonth();
    }

    onNextMonth ()
    {
        this.rangePickerService.nextMonth();
    }

    onNextYear ()
    {
        this.rangePickerService.nextYear();
    }

    private formatDate (rc: RangeConfig)
    {
        const displayLeft = rc.leftFirstDay.toFormat('LLL yyyy');
        const displayRight = rc.rightFirstDay.toFormat('LLL yyyy');

        this.displayRange = `${displayLeft} - ${displayRight}`;
    }
}
