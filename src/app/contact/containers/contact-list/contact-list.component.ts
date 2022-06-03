import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  showEmail = false;
  showDep = false;

  constructor(
    private contactServe: ContactServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactServe.getAll().subscribe((resp) => {
      return (this.contacts = resp);
    });
  }
  onEdit(id: string) {
    this.router.navigate(['/edit-contact', id]);
  }
  onDelete(id: string) {
    const deleteConfirm = confirm('Supprimer ???');
    if (deleteConfirm) {
      this.contactServe.deleteContact(id).subscribe((resp) => {
        // console.log(resp)
        alert('Suppresion Reussie');
        this.contactServe.getAll().subscribe((res) => {
          return (this.contacts = res);
        });
      });
    }
  }
}
