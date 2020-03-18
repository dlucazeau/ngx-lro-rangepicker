import { Injectable } from '@angular/core';

import { DateTime } from 'luxon';
import { BehaviorSubject } from 'rxjs';

import { RangeConfig } from './range-config';
import { DateRange } from './types';
import { Utils } from './utils';

@Injectable({
    providedIn: 'root'
})
export class RangePickerService
{
    private configStore: RangeConfig = new RangeConfig();
    private _config = new BehaviorSubject<RangeConfig>({} as RangeConfig);
    private firstDayClicked: boolean = false;
    private secondDayClicked: boolean = false;
    // #region Getter/Setter
    set minDate (value: DateTime)
    {
        this.configStore.minDate = value;
        this.pushConfig();
    }
    set maxDate (value: DateTime)
    {
        this.configStore.maxDate = value;
        this.pushConfig();
    }
    set inputSince (value: DateTime)
    {
        this.configStore.since = value;
        this.pushConfig();
    }
    set inputUntil (value: DateTime)
    {
        this.configStore.until = value;
        this.pushConfig();
    }
    set leftFirstDay (value: DateTime)
    {
        this.configStore.leftFirstDay = value.startOf('month');
        this.configStore.rightFirstDay = this.configStore.leftFirstDay.plus({ month: 1 });
        this.pushConfig();
    }
    set rightFirstDay (value: DateTime)
    {
        this.configStore.until = value;
        this.pushConfig();
    }

    get format ()
    {
        return this.configStore.format;
    }
    set format (value: string)
    {
        this.configStore.format = value;
        this.pushConfig();
    }
    get config ()
    {
        return this._config.asObservable();
    }
    get dateRange ()
    {
        return new DateRange(this.configStore.since, this.configStore.until);
    }

    public initConfig (value: {})
    {
        this.configStore = RangeConfig.copyConfig(value as RangeConfig);
        this.pushConfig();
    }
    // #endregion

    constructor() { }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy ()
    {
        console.log('ngOnDestroy: cleaning up...');
    }

    clickedDay (date: DateTime)
    {
        if (!this.firstDayClicked)
        {
            this.inputSince = date;
            this.firstDayClicked = true;
        } else if (!this.secondDayClicked)
        {
            if (Utils.isBefore(date, this.configStore.since))
            {
                const temp: DateTime = this.configStore.since;

                this.inputSince = date;
                this.inputUntil = temp;
            } else
            {
                this.inputUntil = date;
            }

            this.secondDayClicked = true;
        } else if (this.firstDayClicked && this.secondDayClicked)
        {
            this.inputSince = date;
            this.inputUntil = null;
            this.firstDayClicked = true;
            this.secondDayClicked = false;
        }
    }

    prevYear ()
    {
        this.leftFirstDay = this.configStore.leftFirstDay.minus({ year: 1 });
    }

    prevMonth ()
    {
        this.leftFirstDay = this.configStore.leftFirstDay.minus({ month: 1 });
    }

    nextMonth ()
    {
        this.leftFirstDay = this.configStore.leftFirstDay.plus({ month: 1 });
    }

    nextYear ()
    {
        this.leftFirstDay = this.configStore.leftFirstDay.plus({ year: 1 });
    }

    private pushConfig ()
    {
        this._config.next(Object.assign({}, this.configStore));
    }
}
