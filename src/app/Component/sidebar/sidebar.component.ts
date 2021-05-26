import { CasinoItems } from './../../model/CasinoItem';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // console.log(this.Casinodata);
  }
  status_menu1 = false;
  status_menu2 = false;
  status_menu3 = false;
  ToggleButton1() {
    this.status_menu1 = !this.status_menu1;
    $('.icon-toggle1').toggleClass('rotated');
  }
  ToggleButton2() {
    this.status_menu2 = !this.status_menu2;
    $('.icon-toggle2').toggleClass('rotated');
  }
  ToggleButton3() {
    this.status_menu3 = !this.status_menu3;
    $('.icon-toggle3').toggleClass('rotated');
  }




}
