import { Injectable } from '@angular/core';

import { fromEvent, interval, merge, BehaviorSubject } from 'rxjs';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';

/**
 * キー入力を`this.command$`オブザーバブルとして提供するサービス。
 */
@Injectable({ providedIn: 'root' })
export class ControllerService {
  command$ = new BehaviorSubject<CommandType>('noop');

  constructor() {
    const filterFn = filter((e: KeyboardEvent) => [13, 32, 37, 38, 39, 40].includes(e.keyCode));
    const events$  = merge<KeyboardEvent>(fromEvent<KeyboardEvent>(window, 'keydown'), fromEvent<KeyboardEvent>(window, 'keyup'));
    interval(200).pipe(
      withLatestFrom(events$.pipe(filterFn), (_, e) => e),
      tap(e => e.preventDefault()),
      map(e => e.type === 'keyup' ? 'noop' : KEYMAP[e.keyCode])
    ).subscribe((command: CommandType) => this.command$.next(command));
  }
}

const KEYMAP: { [keyCode: number]: CommandType } = {
  13: 'enter',
  32: 'enter', // space
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

export type CommandType   = 'noop' | 'enter' | 'up' | 'down' | 'right' | 'left';

