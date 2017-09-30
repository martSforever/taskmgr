import {trigger, state, transition, style, animate, keyframes,group,query,stagger} from '@angular/animations'

export const listAnimation = trigger('listAnim', [

  /*进场或者退场动画*/
  /*如果咩有stagger，当同时添加两个项目的时候，这两个项目会同时出现，当有stagger的时候，这两个项目会相后出现*/
  transition('*=>*', [
    query(':enter',style({'opacity':0}),{optional:true}),
    query(':enter',stagger(100,[animate('1s',style({'opacity':1}))]),{optional:true}),
    query(':leave',style({'opacity':1}),{optional:true}),
    query(':leave',stagger(100,[animate('1s',style({'opacity':0}))]),{optional:true})
  ])

]);
