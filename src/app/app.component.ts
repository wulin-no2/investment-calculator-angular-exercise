import { Component } from '@angular/core';
import { AnnualDataPoint, EnteredData } from './calculator.model';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';
import { InvestTableComponent } from './invest-table/invest-table.component';
import { InvestService } from './invest.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, InvestTableComponent],
})
export class AppComponent {
  constructor(private investService: InvestService) {}
  annualData: AnnualDataPoint[] = this.investService.getAnnualData();

  onCalculate(enteredData: EnteredData) {
    this.annualData =
      this.investService.calculateInvestmentResults(enteredData);
  }
}
