export function calculateMonthlyCompoundInterest(
    initialSavings,
    monthlySavings,
    yearlyInterestRate,
    numMonths
) {
    const result = [initialSavings];
    // Calculate the monthly interest rate
    const interestRate = (yearlyInterestRate/100)/12;
    for (let i = 0; i < numMonths; ++i) {
        // Next month we'll have our current amount + the interest we got for our current amount + the monthly savings
        const nextMonthSavings = result[i] + interestRate*result[i] + monthlySavings;
        result.push(nextMonthSavings);
    }
    return result;
}
