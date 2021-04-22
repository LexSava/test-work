import "./Modal.scss";
import React from "react";
import User from "../../store/User";
import { observer } from "mobx-react-lite";
interface InterfaceModal {}

const Modal: React.FC<InterfaceModal> = observer(() => {
  if (User.displayModalWindow === true) {
    return (
      <div className="madalOverlay">
        <div className="modalWindow">
          <div className="modalBody">
            {`Здравствуйте, ${User.name + " " + User.surname}.`}
          </div>
          <div className="modalFooter">
            <button
              onClick={() => {
                User.closeModalWindow();
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div className=""></div>;
});
export default Modal;
