import "./Main.scss";
import React from "react";
import User from "../../store/User";
interface InterfaceMain {}

const Main: React.FC<InterfaceMain> = (props) => {
  const enteredName = (event: React.ChangeEvent<HTMLInputElement>) => {
    User.getName(event.target.value);
  };
  const enteredSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    User.getSurname(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Добро пожаловать.</h1>
      <h2>Введите свое имя и фамилию.</h2>
      <form className="formMain" onSubmit={handleSubmit}>
        <input
          placeholder="Имя: "
          type="text"
          name="name"
          onChange={enteredName}
          onInput={enteredName}
          required
        />

        <input
          placeholder="Фамилия: "
          type="text"
          name="surname"
          onChange={enteredSurname}
          onInput={enteredSurname}
          required
        />

        <button
          onClick={() => {
            User.openModalWindow();
          }}
        >
          Готово
        </button>
      </form>
    </div>
  );
};
export default Main;
