export function calculateMonthlyCompoundInterest(
    initialSavings,
    monthlySavings,
    yearlyInterestRate,
    interestFrequency,
    numMonths
) {
    // TODO sanity checks (throw error):
    //  check that every parameter is a number
    //  check that initialsavings >= 0
    //  check that interestFrequency is >= 1
    //  check that numMonths >= 0
    const result = [initialSavings];
    // Calculate the monthly interest rate
    const interestRate = (yearlyInterestRate/100)/(12/interestFrequency);
    for (let i = 0; i < numMonths; ++i) {
        // Next month we'll have our current amount + the interest we got for our current amount + the monthly savings
        let nextMonthSavings = result[i] + monthlySavings;
        if (i%interestFrequency === 0) {
            nextMonthSavings += interestRate*result[i];
        }
        result.push(nextMonthSavings);
    }
    return result;
}
