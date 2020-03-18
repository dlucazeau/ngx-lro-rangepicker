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
    isToday: boolean;

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
     * Est-ce que la date est une des dates bornes, cliquée : since ou until
     */
    isBoundary: boolean = false;

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
        this.isToday = Utils.isToday(this.date);
        this.isBoundary = (Utils.isEqual(this.date, sinceDate) || Utils.isEqual(this.date, untilDate)) && this.isInCurrentMonth;

        if (sinceDate !== null && untilDate !== null)
        {
            this.isInRange = Utils.isStrictlyBetween(this.date, sinceDate, untilDate) && this.isInCurrentMonth;
            // this.isToday = this.isToday || Utils.isEqual(d, sinceDate) || Utils.isEqual(d, untilDate);
        }
    }
}
