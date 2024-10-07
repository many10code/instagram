import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  avatars = [
    { name: 'Manuel', img: '../assets/img/7.jpg' },
    { name: 'Ana', img: '../assets/img/2.jpg' },
    { name: 'Carlos', img: '../assets/img/8.jpg' },
    { name: 'Rosy', img: '../assets/img/4.jpg' },
    { name: 'Raul', img: '../assets/img/5.jpg' },
    { name: 'Luis', img: '../assets/img/6.jpg' },

  ]

}
