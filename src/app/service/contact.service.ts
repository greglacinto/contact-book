import { Injectable, computed, signal } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  isClicked = signal(false);

  allContact = signal<Contact[]>([]);
  

  storage: Contact[] = []
  
  add(value: Contact) {
    const key = `${value.firstName}`;
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  viewAllContact(): Contact[]{
    let contactKeys = Object.keys(sessionStorage);
    this.storage = []
    for(let key of contactKeys){
      this.storage.push(JSON.parse(sessionStorage.getItem(key) || '{}'));
    }
    return this.storage;
  }

  setButtonState(): void{
    console.log("inside the set button state");
    this.isClicked.update((value)=> value = !this.isClicked());
    console.log(this.isClicked());
  }

  
}


