import { DateTime } from 'luxon';

import { Utils } from './utils';

export class RangeConfig
{
    public language: string = 'en-US';
    public minDate?: DateTime = null;
    public maxDate?: DateTime = null;
    public since?: DateTime = null;
    public until?: DateTime = null;
    public leftFirstDay: DateTime;
    public rightFirstDay: DateTime;
    public format: string = 'MM/dd/yyyy';
    public rangeItemFromTpl: string;
    public rangeItemToTpl: string;

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

        cfg.format = cfg.language === 'en-US' ? 'MM/dd/yyyy' : 'dd/MM/yyyy';
        // cfg.rangeItemLongTpl = cfg.language === 'en-US' ? 'from {0} to {1}' : 'du {0} au {1}';
        // cfg.rangeItemShortTpl = cfg.language === 'en-US' ? 'from/to {0}' : 'du/au {0}';
        cfg.rangeItemFromTpl = cfg.language === 'en-US' ? 'from' : 'du';
        cfg.rangeItemToTpl = cfg.language === 'en-US' ? 'to' : 'au';

        return cfg;
    }
}
