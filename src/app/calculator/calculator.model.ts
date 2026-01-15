export interface EnteredData {
  initialInvestment: number;
  annualInvestment: number;
  duration: number;
  expectedReturn: number;
}
export interface AnnualDataPoint {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
}
