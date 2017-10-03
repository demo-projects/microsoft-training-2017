import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';
import {MsValidators} from './msValidators';
import {Router} from '@angular/router';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      details: this.fb.group({
        username  : ['', null, MsValidators.notNir],
        password  : '',
        rememberMe: true,
        emails    : this.fb.array([new FormControl()])
      })
    });

    this.username.statusChanges
        .subscribe(s => console.log(s));
  }

  get username(): FormControl {
    return this.loginForm.get(['details', 'username']) as FormControl;
  }

  get emails(): FormArray {
    return this.loginForm.get(['details', 'emails']) as FormArray;
  }

  addEmail() {
    this.emails.push(new FormControl());
  }

  submit() {
    this.router.navigate(['list']);
    console.log(this.loginForm.value);
  }
}
