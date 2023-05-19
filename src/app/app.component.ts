import { Component, OnInit, effect } from '@angular/core';
import { ContactService } from './service/contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'phone-book-app';
    

  // isClicked signal
  isClicked = this.contactService.isClicked;
    
  //all contact signal
  allContact = this.contactService.allContact();


  constructor(private contactService: ContactService){ 

    effect(() => {
      this.allContact = this.contactService.allContact();
      console.log(this.allContact);
    });

  }

  ngOnInit(){
    this.contactService.allContact.set(this.contactService.viewAllContact());
    
  }

  addContactButton(){
    this.contactService.setButtonState();
  }

  
}
