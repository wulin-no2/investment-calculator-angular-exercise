import { Component, Input } from '@angular/core';
import { AnnualDataPoint } from '../calculator.model';

@Component({
  selector: 'app-invest-table',
  standalone: true,
  imports: [],
  templateUrl: './invest-table.component.html',
  styleUrl: './invest-table.component.css',
})
export class InvestTableComponent {
  @Input({ required: false }) annualData?: AnnualDataPoint[];
}
