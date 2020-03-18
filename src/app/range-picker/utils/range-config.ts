import { DateTime } from 'luxon';

import { Utils } from './utils';

export class RangeConfig
{
    minDate?: DateTime = null;
    maxDate?: DateTime = null;
    since?: DateTime = null;
    until?: DateTime = null;
    leftFirstDay: DateTime;
    rightFirstDay: DateTime;
    format: string = 'MM/dd/yyyy';

    constructor() { }

    static copyConfig (data: RangeConfig): RangeConfig
    {
        const cfg = new RangeConfig();

        if (data)
        {
            Object.assign(cfg, data);
        }

        if (cfg.minDate === null)
        {
            cfg.minDate = Utils.getMinDate();
        }

        if (cfg.maxDate === null)
        {
            cfg.maxDate = Utils.getMaxDate();
        }

        if (cfg.since === null)
        {
            cfg.leftFirstDay = Utils.getToday().startOf('month');
        } else
        {
            cfg.leftFirstDay = cfg.since.startOf('month');
        }

        cfg.rightFirstDay = cfg.leftFirstDay.plus({ month: 1 });
        // if (isAfter(cfg.minDateTime, cfg.maxDateTime))
        // {
        //     cfg.minDateTime = Utils.cloneDateTime(cfg.maxDateTime);
        // }

        // if (cfg.sinceDateTime === null)
        // {
        //     cfg.sinceDateTime = cfg.minDateTime;
        // }

        // if (cfg.untilDateTime === null)
        // {
        //     cfg.untilDateTime = cfg.maxDateTime;
        // }

        return cfg;
    }
}
