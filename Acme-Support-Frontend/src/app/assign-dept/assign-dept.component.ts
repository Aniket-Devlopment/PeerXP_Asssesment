import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-assign-dept',
  templateUrl: './assign-dept.component.html',
  styleUrls: ['./assign-dept.component.css']
})
export class AssignDeptComponent implements OnInit {
  formGroup!: FormGroup
  constructor(private authSevice: AuthServiceService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required]),
    }, { updateOn: 'submit' })
  }
  assigndeptuser(){
    if(this.formGroup.valid){
      this.authSevice.assignnewdept(this.formGroup.value).subscribe(result =>{
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
