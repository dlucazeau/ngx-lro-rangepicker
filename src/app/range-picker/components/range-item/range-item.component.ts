import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { tap } from 'rxjs/operators';

import { RangePickerService, RangeConfig, CalendarConfig } from '../../utils';

@Component({
    selector: '[aaRangeItem]',
    templateUrl: './range-item.component.html',
    styleUrls: [
        './range-item.component.scss'
    ]
})
export class RangeItemComponent implements OnInit
{
    @Input() isArrowDown: boolean;
    @Output() fromRangeItemShowCalendar: EventEmitter<boolean> = new EventEmitter<boolean>();
    public displayRange: string;
    public open: boolean = false;
    public cfg: CalendarConfig = new CalendarConfig();

    constructor(private rangePickerService: RangePickerService)
    {
    }

    ngOnInit ()
    {
        this.open = this.isArrowDown;
        this.rangePickerService.config
            .pipe(
                tap((rc: RangeConfig) =>
                    this.setRange(rc)
                )
            )
            .subscribe();
    }

    onClickArrow ()
    {
        this.open = !this.open;
        this.fromRangeItemShowCalendar.emit(this.open);
    }

    private setRange (rc: RangeConfig)
    {
        if (rc.inputSince !== null && rc.inputUntil !== null)
        {
            const displayedSince: string = rc.inputSince.toFormat(this.rangePickerService.format);
            const displayedUntil: string = rc.inputUntil.toFormat(this.rangePickerService.format);

            this.displayRange = `from ${displayedSince} to ${displayedUntil}`;
        }

        if (rc.inputSince !== null && rc.inputUntil === null)
        {
            const displayedSince: string = rc.inputSince.toFormat(this.rangePickerService.format);

            this.displayRange = `from/to ${displayedSince}`;
        }
    }
}
