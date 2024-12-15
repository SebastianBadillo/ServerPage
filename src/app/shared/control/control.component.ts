import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick()',
  },
})
export class ControlComponent implements OnInit, AfterContentInit {
  @Input({ required: true }) label!: string;
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngOnInit() {
    console.log(this.control);
  }
  ngAfterContentInit() {
    console.log(this.control);
  }
  onClick() {
    console.log('Control clicked!');
    console.log(this.control);
  }
}
