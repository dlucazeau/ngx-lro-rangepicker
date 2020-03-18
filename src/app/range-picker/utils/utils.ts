import { DateTime } from 'luxon';

import { bool } from '.';

export class Utils
{
    public static isEqual (leftDate: DateTime, rightDate?: DateTime): bool
    {
        if (rightDate === null || rightDate === undefined)
        {
            return null;
        }

        return leftDate.equals(rightDate);
    }

    /**
     * Compare deux dates au sens strict
     *
     * @param leftDate : DateTime à étudier
     * @param rightDate par rapport à celle-ci
     *
     * @returns true si leftDate < rightDate false sinon, null si rightDate l'est
     */
    public static isBefore (leftDate: DateTime, rightDate?: DateTime): bool
    {
        return rightDate === null ? null : leftDate < rightDate;
    }

    /**
     * Compare deux dates au sens large
     *
     * @param leftDate : DateTime à étudier
     * @param rightDate par rapport à celle-ci
     *
     * @returns true si leftDate <= rightDate false sinon, null si rightDate l'est
     */
    public static isBeforeOrEqual (leftDate: DateTime, rightDate?: DateTime): bool
    {
        return rightDate == null
            ? null
            : leftDate < rightDate || this.isEqual(leftDate, rightDate);
    }

    /**
     * Compare deux dates au sens strict
     *
     * @param leftDate : DateTime à étudier
     * @param rightDate par rapport à celle-ci
     *
     * @returns true si leftDate > rightDate false sinon, null si rightDate l'est
     */
    public static isAfter (leftDate: DateTime, rightDate?: DateTime): bool
    {
        return rightDate == null ? null : leftDate > rightDate;
    }

    /**
     * Compare deux dates au sens large
     *
     * @param leftDate : DateTime à étudier
     * @param rightDate par rapport à celle-ci
     *
     * @returns true si leftDate >= rightDate false sinon, null si rightDate l'est
     */
    public static isAfterOrEqual (leftDate: DateTime, rightDate?: DateTime): bool
    {
        return rightDate == null
            ? null
            : leftDate > rightDate || this.isEqual(leftDate, rightDate);
    }

    public static isBetween (d: DateTime, infDate?: DateTime, supDate?: DateTime): bool
    {
        const isAfterSince: bool = Utils.isAfterOrEqual(d, infDate);
        const isBeforeUntil: bool = Utils.isBeforeOrEqual(d, supDate);

        return isAfterSince && isBeforeUntil;
    }

    public static isStrictlyBetween (d: DateTime, infDate?: DateTime, supDate?: DateTime): bool
    {
        const isAfterSince: bool = Utils.isAfter(d, infDate);
        const isBeforeUntil: bool = Utils.isBefore(d, supDate);

        return isAfterSince && isBeforeUntil;
    }

    /**
     *
     * @param date1 First date to study
     * @param date2 second date to study
     *
     * @returns true if the dates are in the same month in the same year, false otherwise
     */
    public static isInSameMonth (date1: DateTime, date2: DateTime): boolean
    {
        if (date1 === null || date2 === null)
        {
            return false;
        }

        return date1.month === date2.month && date1.year === date2.year;
    }

    public static isWeekend (d: DateTime): boolean
    {
        return d.weekday === 6 || d.weekday === 7;
    }

    public static getToday (): DateTime
    {
        return DateTime.utc().startOf('day');
    }

    public static isToday (d: DateTime): boolean
    {
        const today = this.getToday();

        return d.equals(today);
    }

    public static getMinDate (): DateTime
    {
        return DateTime.utc(2006, 1, 1, 0, 0, 0);
    }

    public static getMaxDate (): DateTime
    {
        const currYear: number = DateTime.utc().year;

        return DateTime.utc(currYear, 12, 31).endOf('day');
    }
}
