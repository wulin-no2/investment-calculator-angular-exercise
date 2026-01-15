import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnteredData } from '../calculator.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  enteredInitial: number | null = null;
  enteredAnnual: number | null = null;
  enteredExpReturn: number | null = null;
  enteredDuration: number | null = null;
  @Output() result = new EventEmitter<EnteredData>();
  onSubmit() {
    this.result.emit({
      initialInvestment: this.enteredInitial ?? 0,
      annualInvestment: this.enteredAnnual ?? 0,
      duration: this.enteredDuration ?? 0,
      expectedReturn: this.enteredExpReturn ?? 0,
    });
  }
}
