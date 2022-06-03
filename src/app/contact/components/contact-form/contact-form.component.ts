import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../contact';

import { Department } from '../../department';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, OnChanges {
  contactForm!: FormGroup;
  @Input() departmentsList!: Department[];
  @Output() submitContact = new EventEmitter();
  @Input() contactToEdit!: Contact;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstname: [null, [Validators.required, Validators.maxLength(30)]],
      lastname: [null, [Validators.required, Validators.maxLength(30)]],
      gender: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      birthDate: [
        null,
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      departments: [null, Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if ('contactToEdit' in changes) {
      const value = changes['contactToEdit'].currentValue;
      if (value) {
        const tempContact = {
          ...value,
          departments: value.departments[0],
        };
        this.contactForm.patchValue(tempContact);
      }
    }
  }
  onSubmit() {
    const data = {
      ...this.contactForm.value,
    };
    data.departments = [data.departments];
    this.submitContact.emit(data);
  }
  get contactControl() {
    return this.contactForm.controls;
  }
}
