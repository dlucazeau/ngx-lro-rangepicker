import { DateTime } from 'luxon';

import { Utils } from './utils';

describe('Utils', () =>
{
    test('isEqual d1 = d2 should return true', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 18);

        // Act
        const result = Utils.isEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    test('isEqual d1 != d2 should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 22);

        // Act
        const result = Utils.isEqual(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    test('isEqual d1 = d2 (diff hours) should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18, 9);
        const d2 = DateTime.utc(2019, 1, 18, 15);

        // Act
        const result = Utils.isEqual(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isBefore d1 < d2 should return true', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 21);

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBefore d1 = d2 should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 18);

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isBefore d1 > d2 should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 5, 18);
        const d2 = DateTime.utc(2019, 1, 1);

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfter d1 < d2 should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 21);

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfter d1 = d2 should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 18);

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfter d1 > d2 should return true', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 1);

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBeforeOrEqual d1 <= d2 should return true', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 21);

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBeforeOrEqual d1 = d2 should return true', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 18);

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBeforeOrEqual d1 > d2 should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 1);

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfterOrEqual d1 < d2 should return false', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 21);

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfterOrEqual d1 = d2 should return true', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 18);

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isAfterOrEqual d1 > d2 should return true', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = DateTime.utc(2019, 1, 1);

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBefore d1 < null should return null', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = null;

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isBeforeOrEqual d1 <= null should return null', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = null;

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isAfter d1 > null should return null', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = null;

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isAfterOrEqual d1 >= null should return null', () =>
    {
        // Arrange
        const d1 = DateTime.utc(2019, 1, 18);
        const d2 = null;

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isInRange minDate <= d <= maxDate should return true', () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 1, 18);
        const minDate: DateTime = DateTime.utc(2020, 1, 1);
        const maxDate: DateTime = DateTime.utc(2020, 1, 31);

        // Act
        const result = Utils.isBetween(d, minDate, maxDate);

        // Assert
        expect(result).toBe(true);
    });

    it('isInSameMonth should return true', () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 2, 18);
        const otherDate: DateTime = DateTime.utc(2020, 2, 1);

        // Act
        const result = Utils.isInSameMonth(d, otherDate);

        // Assert
        expect(result).toBe(true);
    });

    it('isInSameMonth should return false due to different months', () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 3, 18);
        const otherDate: DateTime = DateTime.utc(2020, 1, 1);

        // Act
        const result = Utils.isInSameMonth(d, otherDate);

        // Assert
        expect(result).toBe(false);
    });

    it('isInSameMonth should return false due to different years', () =>
    {
        // Arrange
        const d: DateTime = DateTime.utc(2020, 2, 18);
        const otherDate: DateTime = DateTime.utc(2021, 2, 1);

        // Act
        const result = Utils.isInSameMonth(d, otherDate);

        // Assert
        expect(result).toBe(false);
    });
});
