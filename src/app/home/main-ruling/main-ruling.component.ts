import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-ruling',
  templateUrl: './main-ruling.component.html',
  styleUrls: ['./main-ruling.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(0, style({ opacity: 0 }))])
    ])
  ]
})
export class MainRulingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
