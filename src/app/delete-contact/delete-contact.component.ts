import { Component, Input } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {
  @Input() deleteContact! : string;

  deleteModalIsShown = this.contactService.deleteModalIsShown;

  constructor(private contactService: ContactService){}

  openModal() {
    this.contactService.toggleModal("deleteContact");
  }

  closeModal(){
    this.contactService.toggleModal("deleteContact");
  }

  okayToDeleteContact(){
    this.contactService.DeleteContact(this.deleteContact.substring(0, this.deleteContact.indexOf(" ")));
    this.closeModal();
  }

  doNotDeleteContact(){
    this.closeModal();
  }
}
