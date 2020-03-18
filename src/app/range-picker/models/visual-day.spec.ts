import { VisualDay } from './visual-day';
import { DateTime } from 'luxon';

describe('VisualDay', () =>
{
    it('ctor / calendar / should not be a weekend', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 18);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), null, null);

        // Assert
        expect(vd.day).toEqual(18);
        expect(vd.isWeekend).toBe(true);
    });

    it('ctor / calendar / should be a weekend', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 19);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), null, null);

        // Assert
        expect(vd.day).toEqual(19);
        expect(vd.isWeekend).toBe(true);
    });

    it('ctor / calendar / should be uncheckable', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2019, 11, 31);
        const minDate = DateTime.utc(2020, 1, 1);
        const maxDate = DateTime.utc(2020, 1, 31);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(false);
    });

    it('ctor / calendar / should be uncheckable', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 18);
        const minDate = DateTime.utc(2020, 1, 1);
        const maxDate = DateTime.utc(2020, 1, 31);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(true);
    });

    it('ctor / calendar / should be checkable', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 18);
        const minDate = DateTime.utc(2020, 1, 1);
        const maxDate = DateTime.utc(2020, 1, 31);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(true);
    });

    it('ctor / calendar / should be checkable', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 1);
        const minDate = DateTime.utc(2020, 1, 1);
        const maxDate = DateTime.utc(2020, 1, 31);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(true);
    });

    it('ctor / calendar / should be checkable', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 31);
        const minDate = DateTime.utc(2020, 1, 1);
        const maxDate = DateTime.utc(2020, 1, 31);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(true);
    });

    it('ctor / calendar / isInRange should be true', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 18);

        const minDate = DateTime.utc(2020, 1, 1);
        const maxDate = DateTime.utc(2020, 1, 31);

        const sinceDate = DateTime.utc(2020, 1, 13);
        const untilDate = DateTime.utc(2020, 1, 19);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), minDate, maxDate, sinceDate, untilDate);

        // Assert
        expect(vd.isInRange).toBe(true);
    });

    it('ctor / calendar / isInRange should be false', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 31);

        const minDate = DateTime.utc(2020, 1, 1);
        const maxDate = DateTime.utc(2020, 1, 31);

        const sinceDate = DateTime.utc(2020, 1, 13);
        const untilDate = DateTime.utc(2020, 1, 19);

        // Act
        const vd = new VisualDay(d, DateTime.utc(1970, 1, 1), minDate, maxDate, sinceDate, untilDate);

        // Assert
        expect(vd.isInRange).toBe(false);
    });

    it('ctor / calendar / isInputDate should be true', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 18);
        const inputDate = DateTime.utc(2020, 1, 18);

        // Act
        const vd = new VisualDay(d, inputDate, DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1));

        // Assert
        expect(vd.isToday).toBe(true);
    });

    it('ctor / calendar / isInputDate should be false', async () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 17);
        const inputDate = DateTime.utc(2020, 1, 18);

        // Act
        const vd = new VisualDay(d, inputDate, DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1), DateTime.utc(1970, 1, 1));

        // Assert
        expect(vd.isToday).toBe(false);
    });
});
