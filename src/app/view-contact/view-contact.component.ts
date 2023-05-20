import { Component, Input } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  @Input() selectedContact : Contact[]= [{
    firstName: '', lastName: '', email: '', phoneNumber: '', relation: ''}];

  isShown = this.contactService.showModal;
 
  constructor(private contactService: ContactService){}
  
  openModal() {
    this.contactService.openModal();
  }

  closeModal(){
    this.contactService.openModal();
    console.log(this.selectedContact)
  }

  
}
