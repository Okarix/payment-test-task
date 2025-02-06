import { Component, Input } from '@angular/core';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  model!: NgbDateStruct;
  @Input() label!: string;
}
