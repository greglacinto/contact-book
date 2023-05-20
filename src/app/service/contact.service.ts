import { Injectable, signal } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  isClicked = signal(false);
  allContact = signal<Contact[]>([]);
  showModal = signal<boolean>(false);
  deleteModalIsShown = signal<boolean>(false);
  
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

  DeleteContact(value: any){
    sessionStorage.removeItem(value);
    this.allContact
      .set(this.viewAllContact());
  }

  setAddButtonState(): void{
    this.isClicked.update((value)=> value = !this.isClicked());
  }


  toggleModal(comp: string){

    comp == "viewContact" ? 
      this.showModal.update((value)=> value = !this.showModal())
    : comp == "deleteContact" ?
      this.deleteModalIsShown.update((value)=> value = !this.deleteModalIsShown())
    : null;
    
  }
  
}


