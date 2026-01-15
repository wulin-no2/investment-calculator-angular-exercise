import { Injectable } from '@angular/core';
import { AnnualDataPoint, EnteredData } from './calculator.model';

@Injectable({ providedIn: 'root' })
export class InvestService {
  private annualData: AnnualDataPoint[] = [];
  calculateInvestmentResults(enteredData: EnteredData) {
    this.annualData = [];
    let investmentValue = enteredData.initialInvestment;

    for (let i = 0; i < enteredData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (enteredData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + enteredData.annualInvestment;
      const totalInterest =
        investmentValue -
        enteredData.annualInvestment * year -
        enteredData.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: enteredData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          enteredData.initialInvestment + enteredData.annualInvestment * year,
      });
    }
    return this.annualData;
  }
}
