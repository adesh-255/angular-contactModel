import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { DepartementService } from 'src/app/services/departement.service';
import { Contact } from '../../contact';
import { Department } from '../../department';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
})
export class CreateContactComponent implements OnInit {
  departments!: Department[];

  constructor(
    private departServ: DepartementService,
    private contactServ: ContactServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.departServ.getAll().subscribe((resp) => {
      this.departments = resp;
    });
  }
  onSubmit(data: Contact) {
    this.contactServ.postContact(data).subscribe((resp) => {
      console.log(resp);
      this.route.navigate(['/contact']);
    });
    //console.log(data);
  }
}
