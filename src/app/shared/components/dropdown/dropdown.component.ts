import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  imports: [NgbDropdownModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() items!: string[];
  @Input() label!: string;
  @Output() selected = new EventEmitter<string>();

  text: string = '';

  ngOnInit() {
    this.text = this.items[0];
  }

  selectText(item: string, event: Event) {
    event.preventDefault();
    this.text = item;
    this.selected.emit(item);
  }
}
