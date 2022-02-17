import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  isSubmitted = false;
  ngOnInit(): void {
  }
  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
    password: ['', [Validators.required, Validators.pattern('^(?![0-9_]{8,20})[0-9a-zA-Z_]{8,20}$')]],
    confirmPassword: [''],
    address: ['', Validators.required],
    tel: ['', [Validators.required, Validators.pattern('[0-9_]{8,15}')]],
  }, { validator: this.checkIfMatchingPasswords('password', 'confirmPassword') })
  
  onSubmit() {
    this.isSubmitted = true;
    if (this.myForm.status !== 'INVALID') {
      this.userService.signUp(this.myForm.value).subscribe((res:any) => {
       console.log(res)
      });
      this.router.navigate(['log-in'])
    }
  }
  get fs() { return this.myForm.controls; }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

}
