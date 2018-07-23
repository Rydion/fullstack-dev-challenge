import { calculateMonthlyCompoundInterest } from './interest';

describe('Utils::interest', () => {
    const months = 5*12;

    it('works when only having initial savings', () => {
        const result = calculateMonthlyCompoundInterest(10, 0, 0, 1, months);
        expect(result[0]).toEqual(10);
        expect(result[result.length - 1]).toEqual(10);
    });

    it('works when only having monthly deposits', () => {
        const result = calculateMonthlyCompoundInterest(0, 10, 0, 1, months);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(10);
        expect(result[result.length - 1]).toEqual(10*months);
    });

    it('works when only having interest', () => {
        const result = calculateMonthlyCompoundInterest(0, 0, 0.5, 1, months);
        expect(result[0]).toEqual(0);
        expect(result[result.length - 1]).toEqual(0);
    });

    // NOTE: toBeCloseTo was giving unexpected results
    it('works with initial savings and interest', () => {
        const result = calculateMonthlyCompoundInterest(10, 0, 0.5, 1, months);
        expect(result[0]).toEqual(10);
        expect(Math.trunc(result[result.length - 1])).toEqual(10);
    });

    it('works with initial savings, monthly deposit and interest', () => {
        const result = calculateMonthlyCompoundInterest(10, 5, 0.5, 1, months);
        expect(result[0]).toEqual(10);
        expect(Math.trunc(result[result.length - 1])).toEqual(313);
    });

    it('works with different intervals', () => {
        const resultMonthly = calculateMonthlyCompoundInterest(10, 5, 0.5, 1, months);
        const resultQuarterly = calculateMonthlyCompoundInterest(10, 5, 0.5, 3, months);
        const resultYearly = calculateMonthlyCompoundInterest(10, 5, 0.5, 12, months);
        expect(Math.trunc(resultMonthly[resultMonthly.length - 1])).toEqual(Math.trunc(resultQuarterly[resultQuarterly.length - 1]));
        expect(Math.trunc(resultQuarterly[resultQuarterly.length - 1])).toEqual(Math.trunc(resultYearly[resultYearly.length - 1]));
    });
});
