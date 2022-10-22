import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { DropdownData } from './DropdownData';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {
  formGroup!: FormGroup
  public DropdownData = DropdownData
  constructor(private authSevice: AuthServiceService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      Subject: new FormControl('', [Validators.required]),
      Description: new FormControl('',[Validators.required]),
      Contact_Name: new FormControl('',[Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Phone_Number: new FormControl('',[Validators.required]),
      Priority: new FormControl('',[Validators.required]),
    }, { updateOn: 'submit' })
  }
  updateform(event:any,Fillname:string){
    if(Fillname === 'Priority'){
      this.formGroup.patchValue({
        Priority:event.value,
      })
    }
  }

}
