import { InvestService } from './invest.service';
import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { AnnualDataPoint, EnteredData } from './calculator/calculator.model';
import { InvestTableComponent } from "./invest-table/invest-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, InvestTableComponent],
})
export class AppComponent {
  annualData: AnnualDataPoint[] = [];
  constructor(private investService: InvestService) {}

  onCalculate(enteredData: EnteredData) {
    this.annualData = this.investService.calculateInvestmentResults(enteredData);
  }
}
