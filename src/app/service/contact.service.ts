import { Injectable, computed, signal } from '@angular/core';
import { Contact, ContactList } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  storage: ContactList = {}
  isClicked = signal(false);
  buttonState = computed(() => this.isClicked());

  
  add(value: Contact) {
    const key = `${value.firstName}`
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  viewAllContact(): ContactList{
    let contactKeys = Object.keys(sessionStorage);
    for(let key of contactKeys){
      this.storage[key] = sessionStorage.getItem(key);
    }
    
    return this.storage;
  }

  setButtonState(): void{
    console.log("inside the set button state");
    this.isClicked.update((value)=> value = !this.isClicked());
    console.log(this.isClicked());
  }
}
