import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataService } from "../services/data.service";
import { Router } from "@angular/router";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent implements OnInit {

  candidateForm: FormGroup;
  name = '';
  gender = '';
  age: number = null;
  qualificationList = ['BTech', 'MTech', 'BCA', 'MCA'];
  address = '';
  city = '';
  country = '';
  genderList = ['Male', 'Female'];
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private DataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.candidateForm = this.fb.group({
      // name: [''],
      // email:[''],
      // gender: [''],
      // dob: [''],
      // qualifiation: [''],
      // applied_for: [''],
      // expected_ctc: [''],
      // location:['']

      name : [null, Validators.required],
      gender : [null, Validators.required],
      age : [null, Validators.required],
      qualification : [null, Validators.required],
      address : [null, Validators.required],
      city : [null, Validators.required],
      country : [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.DataService.setData(this.candidateForm.value);
    this.router.navigate(['/candidate-detail']);
  }

}

