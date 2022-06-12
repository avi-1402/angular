import { Component } from '@angular/core';

@Component({
  selector: 'rl-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand' routerLink="/welcome">{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink="/register">Registration</a></li>
      <li><a class='nav-link' routerLink="/login">Login</a></li>
    </ul>
  </nav>
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Home';
}
