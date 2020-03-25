import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm()
  {
    this.form = this.fb.group({
      name: [null, Validators.required],
      organization: [null],
      contacts: this.fb.array([this.fb.control('')])
    });
  }

  get contacts() {
    return this.form.get('contacts') as FormArray;
  }
  addContact() {
    this.contacts.push(this.fb.control(''));
  }

  removeContact(index) {
    this.contacts.removeAt(index);
  }
  submit() {
    console.log(this.form.value); 
    console.log(this.form.get('name').value);
    console.log(this.form.controls['organization'].value);
    // console.log(this.form.get(['contacts', 0]).value);
  }
}
