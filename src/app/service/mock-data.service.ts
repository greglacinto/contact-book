import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  contact: Contact = 
  {
    firstName: 'Gregory',
    lastName: 'Brooks',
    email: 'greg.brooks@hotmail.com',
    phoneNumber: '09133432345',
    relation: 'Supervisor'
  }


  setDefaultContact(){
    sessionStorage.setItem(this.contact.firstName, JSON.stringify(this.contact))
  }
}
