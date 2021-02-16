import { ChangeDetectorRef, ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommandType, ControllerService } from '../controller.service';

@Component({
  selector: '[app-player]',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  @Input() id: number = new Date().getTime();
  state: CommandType  = 'noop';
  x                   = 372;
  y                   = 372;
  walking             = false;

  constructor(public controller: ControllerService, public cdr: ChangeDetectorRef) {
    controller.command$.subscribe(command => this.move(command));
    // 特に意味はないが、ひよこを適当に動かす
    let recursiveFn: Function;
    (recursiveFn = () => setTimeout(() => {
      this.move(['up', 'down', 'right', 'left'][+String(Math.random()).slice(2, 4) % 4] as CommandType);
      recursiveFn();
    }, 1000))();
  }

  move(command: CommandType): void {
    requestAnimationFrame(() => {
      if (['noop', 'enter'].includes(command)) {
        if (this.walking) {
          this.walking = false;
          this.cdr.markForCheck();
        }
        return;
      }
      switch (command) {
        case 'left':
          this.x -= this.x >= 60 ? 60 : 0;
          break;
        case 'up':
          this.y -= this.y >= 60 ? 60 : 0;
          break;
        case 'right':
          this.x += this.x <= 680 ? 60 : 0;
          break;
        case 'down':
          this.y += this.y <= 680 ? 60 : 0;
          break;
      }
      this.walking = true;
      this.state   = command;
      this.cdr.markForCheck();
    });
  }
}

