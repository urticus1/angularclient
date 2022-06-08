import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  @ViewChild('username') usernameInput: ElementRef
  @ViewChild('password') passwordInput: ElementRef
  @ViewChild('confirmPassword') confirmPasswordInput: ElementRef

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  public createUser(): void {
    let username: string = this.usernameInput.nativeElement.value;
    let password: string = this.passwordInput.nativeElement.value
    if (username === "") {
      alert("The username cannot be blank")
      return;
    }
    if (password !== this.confirmPasswordInput.nativeElement.value) {
      alert("the password doesn't match")
      return;
    }
    else {
      this.userService.createUser(username, password).subscribe(result => {
        console.log(result);
      })
    }
  }

}
