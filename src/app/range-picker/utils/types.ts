import { DateTime } from 'luxon';

export type bool = boolean | null;
export class DateRange
{
    since: DateTime;
    until: DateTime;

    constructor(since: DateTime, until: DateTime)
    {
        this.since = since;
        this.until = until;
    }
}
