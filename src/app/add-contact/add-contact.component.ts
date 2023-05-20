import { Component, ViewChild } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  @ViewChild('contactForm') form: any;

  constructor(private contactService: ContactService){}

  contact: Contact = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    relation: ''
  }

  onSubmit(formData: Contact){
    this.contactService.add(formData);
    this.form.reset();
    this.contactService.setAddButtonState();
    this.contactService.allContact.update(()=> this.contactService.viewAllContact());
    this.contactService.allContact()
  }
}
