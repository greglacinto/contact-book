import { Component, OnInit, computed, effect } from '@angular/core';
import { ContactList } from './model/contact';
import { ContactService } from './service/contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // addButtonValue: boolean = 
  isClicked = this.contactService.buttonState;
  title = 'phone-book-app';
  contactkeys = ''
  contactList: ContactList = {}
  contactDetail: any;
  


  constructor(private contactService: ContactService){ }

  ngOnInit(){
    this.contactList = this.contactService.viewAllContact();
    const contactDetail = Object.values(this.contactList);
    contactDetail.forEach(item => {
      console.log(item);
    })

    console.log(this.isClicked);
  }

  addContactButton(){
    this.contactService.setButtonState();
    console.log(this.isClicked());
    // this.isClicked = !this.isClicked;
  }
}
