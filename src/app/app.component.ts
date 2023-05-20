import { Component, OnInit, effect } from '@angular/core';
import { ContactService } from './service/contact.service';
import { Contact } from './model/contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'phone-book-app';
  showModal: boolean = false;
  selectedContactInput = '';
  selectedContactDetails : Contact[]= [{
    firstName: '', lastName: '', email: '', phoneNumber: '', relation: ''}]

  // isClicked signal
  isClicked = this.contactService.isClicked;
    
  //all contact signal
  allContact = this.contactService.allContact();


  constructor(private contactService: ContactService){ 

    effect(() => {
      this.allContact = this.contactService.allContact();
    });

  }

  ngOnInit(){
    this.contactService.allContact
      .set(this.contactService.viewAllContact());
    
  }

  addContactButton(){
    this.contactService.setButtonState();
  }

  viewContact(value: any){
    console.log(value);
    this.selectedContactDetails = this.contactService.allContact()
      .filter((contact) => {
        return contact.firstName == value;
      });
    this.contactService.openModal();

  }
}
