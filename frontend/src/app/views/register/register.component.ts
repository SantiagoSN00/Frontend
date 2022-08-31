import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "src/app/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  email: string;
  password: string;
  confPassword: string;
  passwordError: boolean;

  constructor(public userService: UsersService, public router: Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }
}