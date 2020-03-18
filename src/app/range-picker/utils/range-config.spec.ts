import { DateTime } from 'luxon';

import { RangeConfig } from './range-config';

describe('CalendarConfig', () =>
{
    // xit('ctor - should be correctly initialized', async () =>
    // {
    //     // Arrange && Act
    //     const cfg = new CalendarConfig();

    //     // Assert
    //     expect(cfg.width).toEqual(168);
    // });

    // it('copyConfig from undefined- should pass with default values', async () =>
    // {
    //     // Arrange & Act
    //     const cfg: RangeConfig = RangeConfig.copyConfig(undefined);

    //     // Assert
    //     expect(cfg.format).toEqual('MM/dd/yyyy');

    //     // expect(cfg.inputDate).toEqual(Utils.getToday());

    //     expect(cfg.minDate).toEqual(Utils.getToday());
    //     expect(cfg.maxDate).toEqual(Utils.getToday());
    //     expect(cfg.sinceDate).toEqual(Utils.getToday());
    //     expect(cfg.untilDate).toEqual(Utils.getToday());
    // });

    // it('copyConfig - should ', async () =>
    // {
    //     // Arrange
    //     const data = {
    //     } as RangeConfig;

    //     // Act
    //     const cfg: RangeConfig = RangeConfig.copyConfig(data);

    //     // Assert
    //     expect(cfg.format).toEqual('MM/dd/yyyy');

    //     // expect(cfg.inputDate).toEqual(Utils.getToday());

    //     expect(cfg.minDate).toEqual(Utils.getToday());
    //     expect(cfg.maxDate).toEqual(Utils.getToday());
    //     expect(cfg.sinceDate).toEqual(Utils.getToday());
    //     expect(cfg.untilDate).toEqual(Utils.getToday());
    // });

    xit('copyConfig - should ', async () =>
    {
        // Arrange
        // ---     min            max    ---
        // -------- ▼ ------------ ▼ -------
        // --- 01/01/2019 --- 31/12/2019 ---
        const minDate = DateTime.utc(2019, 0, 1);
        const maxDate = DateTime.utc(2019, 11, 31);
        const data = {
            inputDate: DateTime.utc(2019, 11, 11),
            minDate: minDate,
            maxDate: maxDate,
            format: 'MM/dd/yyyy'
        } as RangeConfig;

        // Act
        const cfg: RangeConfig = RangeConfig.copyConfig(data);

        // Assert
        expect(cfg.format).toEqual('MM/dd/yyyy');
        expect(cfg.sinceDate).toEqual(minDate);
        expect(cfg.untilDate).toEqual(maxDate);
    });

    xit('copyConfig - minDate > maxDate - should set minDate to maxDate', async () =>
    {
        // Arrange
        const maxDate = DateTime.utc(2019, 8, 1);
        const minDate = DateTime.utc(2020, 1, 29);
        const data = {
            minDate: minDate,
            maxDate: maxDate,
            format: 'MM/dd/yyyy'
        } as RangeConfig;

        // Act
        const cfg: RangeConfig = RangeConfig.copyConfig(data);

        // Assert
        expect(cfg.minDate).toEqual(maxDate);
        expect(cfg.maxDate).toEqual(maxDate);
    });
});
