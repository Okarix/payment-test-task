import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-input',
  imports: [],
  templateUrl: './payment-input.component.html',
  styleUrl: './payment-input.component.scss',
})
export class PaymentInputComponent {
  @Input() currency: string = '';
}
