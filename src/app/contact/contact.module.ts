import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListComponent } from './containers/contact-list/contact-list.component';
import { CreateContactComponent } from './containers/create-contact/create-contact.component';
import { EditContactComponent } from './containers/edit-contact/edit-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './components/contact-form/contact-form.component';



@NgModule({
  declarations: [
    ContactListComponent,
    CreateContactComponent,
    EditContactComponent,
    ContactFormComponent
  ],
  exports : [
    ContactListComponent,
    CreateContactComponent,
    EditContactComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ContactModule { }
