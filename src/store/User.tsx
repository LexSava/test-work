import { makeAutoObservable } from "mobx";
class User {
  name: string = "";
  surname: string = "";
  displayModalWindow: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  getName(enteredName: string) {
    this.name = enteredName;
    console.log(this.name);
  }
  getSurname(enteredSurname: string) {
    this.surname = enteredSurname;
    console.log(this.surname);
  }
  openModalWindow() {
    this.displayModalWindow = true;
  }
  closeModalWindow() {
    this.displayModalWindow = false;
  }
}
export default new User();
