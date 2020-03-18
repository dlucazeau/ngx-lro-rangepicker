import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { tap } from 'rxjs/operators';

import { RangePickerService, RangeConfig, CalendarConfig } from '../../utils';

@Component({
    selector: '[aaRangeItem]',
    templateUrl: './range-item.component.html',
    styleUrls: [
        '../shared.scss',
        './range-item.component.scss'
    ]
})
export class RangeItemComponent implements OnInit
{
    @Input() showPanel: boolean;
    @Output() fromRangeItemShowCalendar: EventEmitter<boolean> = new EventEmitter<boolean>();
    public displayRange: string;
    public cfg: CalendarConfig = new CalendarConfig();

    constructor(private rangePickerService: RangePickerService)
    {
    }

    ngOnInit ()
    {
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
        this.showPanel = !this.showPanel;
        this.fromRangeItemShowCalendar.emit(this.showPanel);
    }

    private setRange (rc: RangeConfig)
    {
        if (rc.since !== null && rc.until !== null)
        {
            const displayedSince: string = rc.since.toFormat(this.rangePickerService.format);
            const displayedUntil: string = rc.until.toFormat(this.rangePickerService.format);

            this.displayRange = `from ${displayedSince} to ${displayedUntil}`;
        }

        if (rc.since !== null && rc.until === null)
        {
            const displayedSince: string = rc.since.toFormat(this.rangePickerService.format);

            this.displayRange = `from/to ${displayedSince}`;
        }
    }
}
