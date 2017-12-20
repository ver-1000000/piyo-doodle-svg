import { ChangeDetectorRef, ChangeDetectionStrategy, Component } from '@angular/core';

import { ControllerService } from './controller.service';

@Component({
  selector: 'pd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  ids: number[] = [0, 1, 2, 3, 4, 5];

  constructor(private cdr: ChangeDetectorRef, public controller: ControllerService) {
    controller.command$.subscribe(
      command => command === 'enter' && this.ids.push(new Date().getTime()) && this.cdr.markForCheck()
    );
  }

  remove(id: number): void {
    this.ids.splice(this.ids.indexOf(id), 1);
  }
}

