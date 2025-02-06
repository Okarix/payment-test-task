import { Component } from '@angular/core';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component';
import { ButtonSmallComponent } from '../../shared/components/button-small/button-small.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonBigComponent } from '../../shared/components/button-big/button-big.component';

@Component({
  selector: 'app-benefits',
  imports: [
    DropdownComponent,
    DatePickerComponent,
    ButtonSmallComponent,
    CheckboxComponent,
    ButtonBigComponent,
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {}
