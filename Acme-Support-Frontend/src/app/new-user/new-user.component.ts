import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { DropdownData } from './DropdownData';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  formGroup!: FormGroup
  public DropdownData = DropdownData
  constructor(private authSevice: AuthServiceService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl(''),
      Phone_Number: new FormControl(''),
      Password: new FormControl('', [Validators.required]),
      Department: new FormControl(''),
      Role: new FormControl(''),
    }, { updateOn: 'submit' })
  }
  adduser() {
    if (this.formGroup.valid) {
      this.authSevice.addnewuser(this.formGroup.value).subscribe(result => {
        if (result.Status == "SUCCESS") {
          console.log(result);
          alert(result.Message)
        } else {
          alert(result.Message)
        }
      })
    }
  }
  updateform(event:any,Fillname:string){
    if(Fillname === 'Role'){
      this.formGroup.patchValue({
        Role:event.value,
      })
    }
  }
}
