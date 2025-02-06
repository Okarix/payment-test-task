import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from '../../features/general/general.component';
import { BenefitsComponent } from '../../features/benefits/benefits.component';
import { PaymentComponent } from '../../features/payment/payment.component';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    GeneralComponent,
    BenefitsComponent,
    PaymentComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  steps = ['General', 'Payment', 'Benefits'];
  activeStep = 0;

  setActiveStep(index: number) {
    this.activeStep = index;
  }
}
