import {
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
  type AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  type EditorConfig,
  ClassicEditor,
  AutoLink,
  Autosave,
  Bold,
  Essentials,
  ImageBlock,
  ImageToolbar,
  Italic,
  Link,
  List,
  Paragraph,
  SpecialCharacters,
} from 'ckeditor5';

/**
 * Create a free account with a trial: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY = 'GPL'; // or <YOUR_LICENSE_KEY>.

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule, CKEditorModule],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextAreaComponent implements AfterViewInit {
  @Input() label!: string;

  constructor(private changeDetector: ChangeDetectorRef) {}

  public isLayoutReady = false;
  public Editor = ClassicEditor;
  public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
  public ngAfterViewInit(): void {
    this.config = {
      toolbar: {
        items: [
          'bold',
          'italic',
          '|',
          'specialCharacters',
          'link',
          '|',
          'bulletedList',
          'numberedList',
        ],
        shouldNotGroupWhenFull: false,
      },
      plugins: [
        AutoLink,
        Autosave,
        Bold,
        Essentials,
        ImageBlock,
        ImageToolbar,
        Italic,
        Link,
        List,
        Paragraph,
        SpecialCharacters,
      ],
      image: {
        toolbar: ['imageTextAlternative'],
      },
      initialData: '',
      licenseKey: LICENSE_KEY,
      link: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
        decorators: {
          toggleDownloadable: {
            mode: 'manual',
            label: 'Downloadable',
            attributes: {
              download: 'file',
            },
          },
        },
      },
      placeholder: 'Type or paste your content here!',
    };

    this.isLayoutReady = true;
    this.changeDetector.detectChanges();
  }
}
