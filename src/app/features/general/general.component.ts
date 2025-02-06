import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { TextAreaComponent } from '../../shared/components/text-area/text-area.component';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component';
import { ButtonBigComponent } from '../../shared/components/button-big/button-big.component';

@Component({
  selector: 'app-general',
  imports: [
    DropdownComponent,
    InputComponent,
    TextAreaComponent,
    DatePickerComponent,
    ButtonBigComponent,
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss',
})
export class GeneralComponent {}
