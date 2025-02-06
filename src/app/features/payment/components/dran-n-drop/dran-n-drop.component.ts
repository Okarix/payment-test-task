import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dran-n-drop',
  imports: [DragDropModule, NgIf],
  templateUrl: './dran-n-drop.component.html',
  styleUrl: './dran-n-drop.component.scss',
})
export class DranNDropComponent {
  file: File | null = null;
  dragOver = false;

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }

  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.files.length) {
      this.file = event.dataTransfer.files[0];
    }

    this.dragOver = false;
  }

  onDragOver(event: any) {
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave() {
    this.dragOver = false;
  }
}
