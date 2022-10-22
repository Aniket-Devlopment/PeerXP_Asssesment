import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-deletedept',
  templateUrl: './deletedept.component.html',
  styleUrls: ['./deletedept.component.css']
})
export class DeletedeptComponent implements OnInit {
  formGroup!: FormGroup
  constructor(private authSevice: AuthServiceService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [Validators.required]),
    }, { updateOn: 'submit' })
  }
  deletedept(){
    if(this.formGroup.valid){
      this.authSevice.deletedept(this.formGroup.value).subscribe(result => {
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
