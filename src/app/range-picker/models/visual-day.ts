import { DateTime } from 'luxon';

import { Utils } from '../utils';

export class VisualDay
{
    /**
     * Reference date
     */
    date: DateTime;

    /**
     * day in the month
     */
    day: number | '';

    /**
     * Is this day today?
     */
    isInputDate: boolean;

    /**
     * Is this day in the current month?
     */
    isInCurrentMonth: boolean;

    /**
     * Is this day between the min and max dates?
     */
    isCheckable: boolean;

    /**
     * Is this day a saturday or a sunday?
     */
    isWeekend: boolean;

    /**
     * Is this date between since and until?
     */
    isInRange: boolean = false;

    /**
     *
     */
    constructor(d: DateTime, firstDay: DateTime, minDate: DateTime, maxDate: DateTime, sinceDate?: DateTime, untilDate?: DateTime)
    {
        this.date = d;
        this.isInCurrentMonth = Utils.isInSameMonth(this.date, firstDay);
        this.day = this.isInCurrentMonth ? d.day : '';
        this.isWeekend = Utils.isWeekend(this.date);
        this.isCheckable = Utils.isBetween(this.date, minDate, maxDate);
        this.isInputDate = Utils.isToday(this.date);
        if (sinceDate !== null && untilDate !== null)
        {
            this.isInRange = Utils.isStrictlyBetween(this.date, sinceDate, untilDate);
            this.isInputDate = this.isInputDate || Utils.isEqual(d, sinceDate) || Utils.isEqual(d, untilDate);
        }
    }
}
