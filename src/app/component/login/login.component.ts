import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  IsHavingAccount: boolean = true;
  IsLock: boolean = true;
  signUpForm!: FormGroup;
  loginform!: FormGroup;
  constructor(
    // private _authService: AuthService,
    private _routes: ActivatedRoute,
    private _UsersInfoService: UserinfoService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.formsInfo();
    this.loginInfodata();
    // console.log(this.signUpForm);
  }

  loginInfodata() {
    this.loginform = new FormGroup({
      luserName: new FormControl(null),
      lPassWord: new FormControl(null),
    });
  }
  loginInfo() {}
  formsInfo() {
    this.signUpForm = new FormGroup({
      UserName: new FormControl(null),
      PassWord: new FormControl(null),
      ConfirmPassWord: new FormControl(null),
    });
  }

  logInforms() {}
  signup() {}
  Onlogin() {
    console.log(this.loginform.value.luserName);
    this._UsersInfoService.getAllusers().subscribe((resp) => {
      let usernamecheck = resp.find(
        (ele) => ele.UserName === this.loginform.value.luserName
      );
      let passwordcheck = resp.find(
        (ele) => ele.PassWord === this.loginform.value.lPassWord
      );
      if (usernamecheck && passwordcheck) {
        this._router.navigate(['dashbord']);
      } else {
        alert('“Invalid user');
      }
    });
  }
  submitDeta() {
    console.log(this.signUpForm.value);
    let obj = {
      ...this.signUpForm.value,
    };
    this._UsersInfoService.addOneUser(obj).subscribe();
  }
}
