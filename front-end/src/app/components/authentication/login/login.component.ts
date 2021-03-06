import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.services';

@Component({ selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('username', data['username']);
        localStorage.setItem('isAdmin', data['isAdmin']);
        localStorage.setItem('userId', data['userId']);
        this.router.navigate(['/'])
      });
  }
}