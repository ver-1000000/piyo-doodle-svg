import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { interval } from 'rxjs/observable/interval';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';

/**
 * さまざまな命令を発行するサービス
 */
@Injectable()
export class ControllerService {
  command$ = new BehaviorSubject<CommandType>('noop');

  constructor() {
    const filter$     = filter((e: KeyboardEvent) => [13, 32, 37, 38, 39, 40].includes(e.keyCode));
    const fromEvents$ = merge<KeyboardEvent>(fromEvent(window, 'keydown'), fromEvent(window, 'keyup'));
    interval(200).pipe(
      withLatestFrom(fromEvents$.pipe(filter$), (_, e) => e),
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

