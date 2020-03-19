import { Injectable } from '@angular/core';

import { DateTime } from 'luxon';
import { BehaviorSubject } from 'rxjs';

import { RangeConfig } from './range-config';
import { DateRange } from './types';
import { Utils } from './utils';
import { StatePicker } from './state-picker';

@Injectable({
    providedIn: 'root'
})
export class RangePickerService
{
    private configStore: RangeConfig = new RangeConfig();
    private _config = new BehaviorSubject<RangeConfig>({} as RangeConfig);
    private stateStore: StatePicker = new StatePicker();
    private _state = new BehaviorSubject<StatePicker>({} as StatePicker);
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
    set language (value: string)
    {
        this.configStore.language = value;
        this.setFormat();
        this.pushConfig();
    }
    get config ()
    {
        return this._config.asObservable();
    }
    get state ()
    {
        return this._state.asObservable();
    }
    get dateRange ()
    {
        return new DateRange(this.configStore.since, this.configStore.until);
    }

    set showPanel (value: boolean)
    {
        this.stateStore.showPanel = value;
        this.pushState();
    }

    set showOptions (value: boolean)
    {
        this.stateStore.showOptions = value;
        this.pushState();
    }

    public toggleOptions ()
    {
        this.stateStore.showOptions = !this.stateStore.showOptions;
        this.pushState();
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

    public clickedDay (date: DateTime): void
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

    public prevYear (): void
    {
        this.leftFirstDay = this.configStore.leftFirstDay.minus({ year: 1 });
    }

    public prevMonth (): void
    {
        this.leftFirstDay = this.configStore.leftFirstDay.minus({ month: 1 });
    }

    public nextMonth (): void
    {
        this.leftFirstDay = this.configStore.leftFirstDay.plus({ month: 1 });
    }

    public nextYear (): void
    {
        this.leftFirstDay = this.configStore.leftFirstDay.plus({ year: 1 });
    }

    reset ()
    {
        this.inputUntil = this.inputSince = null;
    }

    private pushConfig (): void
    {
        this._config.next(Object.assign({}, this.configStore));
    }

    private pushState (): void
    {
        this._state.next(Object.assign({}, this.stateStore));
    }

    private setFormat (): void
    {
        this.configStore.format = this.language === 'en-US' ? 'MM/dd/yyyy' : 'dd/MM/yyyy';
        this.configStore.rangeItemTpl = this.language === 'en-US' ? 'from {0} to {1}' : 'du {0} au {1}';
    }
}
