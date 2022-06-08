import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('username') usernameInput: ElementRef
  @ViewChild('password') passwordInput: ElementRef

  constructor(private router: Router, private authService: AuthorizationService) { }

  ngOnInit() {

  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  public login(): void {
    let username = this.usernameInput.nativeElement.value;
    let password = this.passwordInput.nativeElement.value;
    if (username === "" || password === "") {
      return;
    }
    this.authService.getLoginToken(username, password).subscribe(token => {
      window.sessionStorage.setItem('session', token);
      this.redirect("games");
    });
  }
}
