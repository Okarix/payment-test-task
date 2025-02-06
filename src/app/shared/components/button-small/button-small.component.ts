import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-small',
  imports: [],
  templateUrl: './button-small.component.html',
  styleUrl: './button-small.component.scss',
})
export class ButtonSmallComponent {
  @Input() text!: string;
}
