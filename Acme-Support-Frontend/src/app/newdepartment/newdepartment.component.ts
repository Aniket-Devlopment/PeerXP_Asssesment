import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-newdepartment',
  templateUrl: './newdepartment.component.html',
  styleUrls: ['./newdepartment.component.css']
})
export class NewdepartmentComponent implements OnInit {
  formGroup!: FormGroup
  constructor(private authSevice: AuthServiceService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
    }, { updateOn: 'submit' })
  }
  adddept(){
    if(this.formGroup.valid){
      this.authSevice.addnewdept(this.formGroup.value).subscribe(result => {
        if(result.Status == "SUCCESS"){
          console.log(result);
          alert(result.Message)
        }else{
          alert(result.Message)
        }
      })
    }
  }
}
