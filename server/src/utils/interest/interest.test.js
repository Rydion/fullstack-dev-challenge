import { calculateMonthlyCompoundInterest } from './interest';

describe('Utils::interest', () => {
    const months = 5*12;

    it('works when only having initial savings', () => {
        const result = calculateMonthlyCompoundInterest(10, 0, 0, months);
        expect(result[0]).toEqual(10);
        expect(result[result.length - 1]).toEqual(10);
    });

    it('works when only having monthly deposits', () => {
        const result = calculateMonthlyCompoundInterest(0, 10, 0, months);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(10);
        expect(result[result.length - 1]).toEqual(10*months);
    });

    it('works when only having interest', () => {
        const result = calculateMonthlyCompoundInterest(0, 0, 0.5, months);
        expect(result[0]).toEqual(0);
        expect(result[result.length - 1]).toEqual(0);
    });

    it('works with initial savings and interest', () => {
        const result = calculateMonthlyCompoundInterest(10, 0, 0.5, months);
        expect(result[0]).toEqual(10);
        expect(result[result.length - 1]).toBeCloseTo(10.25);
    });

    it('works with initial savings, monthly deposit and interest', () => {
        const result = calculateMonthlyCompoundInterest(10, 5, 0.5, months);
        expect(result[0]).toEqual(10);
        expect(result[result.length - 1]).toBeCloseTo(313.97);
    });
});
