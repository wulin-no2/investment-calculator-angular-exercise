import { Component, Input } from '@angular/core';
import { AnnualDataPoint } from '../calculator.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invest-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invest-table.component.html',
  styleUrl: './invest-table.component.css',
})
export class InvestTableComponent {
  @Input({ required: false }) annualData?: AnnualDataPoint[];
}
