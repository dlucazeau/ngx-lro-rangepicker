import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { gsap } from 'gsap';

import { RangePickerService, RangeConfig, CalendarConfig, DateRange } from './utils';

@Component({
    selector: 'aa-range-picker',
    templateUrl: './range-picker.component.html',
    styleUrls: [
        './range-picker.component.scss'
    ],
    providers: [
        RangePickerService
    ]
})
export class RangePickerComponent implements OnInit
{
    @Input() config: RangeConfig;
    @Output() fromPickerSubmit: EventEmitter<DateRange> = new EventEmitter<DateRange>();
    public cfg: CalendarConfig = new CalendarConfig();
    public height: number = this.cfg.rangeItemSize.height;
    public showPanel: boolean = false;
    private duration: number = 0.33;

    constructor(
        private rangePickerService: RangePickerService
    ) { }

    ngOnInit ()
    {
        this.rangePickerService.initConfig(this.config);
    }

    onShowCalendar (showPanel: boolean)
    {
        this.showPanel = showPanel;
        this.calendarShowHide(showPanel);
    }

    onSubmit (dr: DateRange)
    {
        this.onShowCalendar(false);
        this.fromPickerSubmit.emit(dr);
    }

    private calendarShowHide (status: boolean)
    {
        const tl = gsap.timeline();

        if (status)
        {
            this.height = this.cfg.pickerSize.height;
            tl.to('.panel', { duration: this.duration, attr: { height: this.cfg.panelSize.height }, ease: 'linear' }, 0);
        } else
        {
            tl.to('.panel', { duration: this.duration, attr: { height: 0 }, ease: 'linear' }, 0)
                .then(() => this.height = this.cfg.rangeItemSize.height);
        }
    }
}
