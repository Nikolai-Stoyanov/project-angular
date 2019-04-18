import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  username : string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngDoCheck() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.authService.logout();
    this.toastr.success('Logout success!')
    this.router.navigate([ '/' ]);
  }

}
