import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { DepartementService } from 'src/app/services/departement.service';
import { Contact } from '../../contact';
import { Department } from '../../department';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit, OnDestroy {
  routeSubscrpiton: Subscription;
  contactId!: string;
  contact!: Contact;
  departments!: Department[];
  constructor(
    private route: ActivatedRoute,
    private contactServ: ContactServiceService,
    private departServ: DepartementService,

    private router: Router
  ) {
    this.routeSubscrpiton = this.route.params.subscribe((params) => {
      // console.log(params['id'])
      this.contactId = params['id'];
    });
  }

  ngOnInit(): void {
    this.departServ.getAll().subscribe((resp) => {
      this.departments = resp;
    });

    this.contactServ.getContact(this.contactId).subscribe((resp) => {
      this.contact = resp;
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.routeSubscrpiton) {
      this.routeSubscrpiton.unsubscribe();
    }
  }

  onSubmit(data: any) {
    this.contactServ.putContact(this.contactId, data).subscribe((resp) => {
      console.log(resp);
      this.router.navigate(['/contact']);
    });
  }
}
