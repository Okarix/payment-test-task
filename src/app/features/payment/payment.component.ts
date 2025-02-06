import { Component } from '@angular/core';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { TextAreaComponent } from '../../shared/components/text-area/text-area.component';
import { ButtonBigComponent } from '../../shared/components/button-big/button-big.component';
import { ButtonSmallComponent } from '../../shared/components/button-small/button-small.component';
import { PaymentInputComponent } from './components/payment-input/payment-input.component';
import { DranNDropComponent } from './components/dran-n-drop/dran-n-drop.component';

@Component({
  selector: 'app-payment',
  imports: [
    DropdownComponent,
    TextAreaComponent,
    ButtonBigComponent,
    ButtonSmallComponent,
    PaymentInputComponent,
    DranNDropComponent,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  currency: string = 'USD';

  updateCurrency(currency: string) {
    this.currency = currency;
  }
}
