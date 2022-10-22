import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private authSevice: AuthServiceService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
      
  }
  initForm() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    }, { updateOn: 'submit' })
  }
  loginProcess() {
    let obj:any = {}
    if (this.formGroup.valid) {
      if (this.formGroup.value.Email.includes('@') || this.formGroup.value.Email.includes('.'))
      {
        obj['Email'] = this.formGroup.value.Email;
        obj['Password'] = this.formGroup.value.Password;
      }else{
        obj['Phone_Number'] = this.formGroup.value.Email;
        obj['Password'] = this.formGroup.value.Password;
      }
      this.authSevice.userlogin(obj).subscribe(result => {
        console.log("result",result);
        if(result.Status == "SUCCESS"){
          console.log(result);
          const DashBoard = "/dashboard"
          this.router.navigate([DashBoard],{}).then()
        }else{
          alert(result.Message)
        }
      })
    }
  }
}
