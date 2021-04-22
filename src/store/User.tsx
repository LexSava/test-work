import { makeAutoObservable } from "mobx";
class User {
  name: string = "";
  surname: string = "";
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
}
export default new User();
