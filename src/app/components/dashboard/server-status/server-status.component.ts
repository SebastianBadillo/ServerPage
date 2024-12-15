import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown');
  private destroyRef = inject(DestroyRef);
  // private interval?: ReturnType<typeof setInterval>;
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    });
  }
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  /** It is very important to clean 'everythhing' just before the component
   * is destroyed to avoid memory leaks.
   */
  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
