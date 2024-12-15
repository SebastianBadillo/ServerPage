import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { ControlComponent } from '../../../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  enteredTitle = '';
  enteredText = '';
  @Output() add = new EventEmitter<{ title: string; text: string }>();
  ngOnInit(): void {
    console.log(this.form);
  }

  ngAfterViewInit(): void {
    console.log(this.form);
  }

  // onSubmit(title: string, text: string) {
  //   console.log(title);
  //   console.log(text);
  //   this.add.emit({ title: title, text: text });
  //   this.form?.nativeElement.reset();
  // }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredText = '';
    this.enteredTitle = '';
    // this.form?.nativeElement.reset();
  }
}
