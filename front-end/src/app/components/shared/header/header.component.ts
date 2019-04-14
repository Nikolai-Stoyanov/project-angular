import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  username : string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ '/' ]);
  }

}
