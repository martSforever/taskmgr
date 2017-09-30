import {trigger, state, transition, style, animate, keyframes} from '@angular/animations'

export const itemAnim = trigger('item', [
  state('in', style({
    'border-left-width': '12px'
  })),
  state('out', style({
    'border-left-width': '6px'
  })),
  transition('out=>in',animate('200ms ease-in')),
  transition('in=>out',animate('200ms ease-out')),
]);
