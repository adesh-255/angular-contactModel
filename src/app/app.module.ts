import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { ContactListComponent } from './contact/containers/contact-list/contact-list.component';
import { CreateContactComponent } from './contact/containers/create-contact/create-contact.component';
import { EditContactComponent } from './contact/containers/edit-contact/edit-contact.component';


const routes : Routes = [
{path: 'contact' , component: ContactListComponent},
{path: 'edit-contact/:id' , component: EditContactComponent},
{path: 'contact/new' , component: CreateContactComponent}

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
