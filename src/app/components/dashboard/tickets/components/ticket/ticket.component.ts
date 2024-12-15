import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../interfaces/Ticket';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output();

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((oldData) => {
      return !oldData;
    });
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
