import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-big',
  imports: [],
  templateUrl: './button-big.component.html',
  styleUrl: './button-big.component.scss',
})
export class ButtonBigComponent {
  @Input() text!: string;
}
