import "./Main.scss";
import React, { useState, useEffect } from "react";
import User from "../../store/User";
interface InterfaceMain {}

const Main: React.FC<InterfaceMain> = (props) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");

  const enteredName = (event: React.ChangeEvent<HTMLInputElement>) => {
    User.getName(event.target.value);
    setName(event.target.value);
  };
  const enteredSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    User.getSurname(event.target.value);
    setSurname(event.target.value);
  };

  const handleSubmit = (event: any) => {
    alert(`Здраствуйте: ${name + " " + surname}`);
    event.preventDefault();
  };
  return (
    <div>
      <h1>Добро пожаловать.</h1>
      <h2>Введите свое имя и фамилию.</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            onChange={enteredName}
            onInput={enteredName}
          />
        </label>
        <label>
          Фамилия:
          <input
            type="text"
            name="surname"
            onChange={enteredSurname}
            onInput={enteredSurname}
          />
        </label>
        <button
          onClick={() => {
            console.log(name, surname);
          }}
        >
          Готово
        </button>
      </form>
    </div>
  );
};
export default Main;
