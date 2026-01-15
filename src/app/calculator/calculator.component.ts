import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnteredData } from './calculator.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  enteredInitial = 0;
  enteredAnnual = 0;
  enteredExpReturn = 0;
  enteredDuration = 0;
  @Output() result = new EventEmitter<EnteredData>();
  onSubmit() {
    this.result.emit({
      initialInvestment: this.enteredInitial,
      annualInvestment: this.enteredAnnual,
      duration: this.enteredDuration,
      expectedReturn: this.enteredExpReturn
    })
  }




}
