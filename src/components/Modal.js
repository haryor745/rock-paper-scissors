import React from "react";
import rules from "../rock-paper-scissors-master/images/image-rules.svg";
const close = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path
      fill="#3B4262"
      fill-rule="evenodd"
      d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
      opacity=".25"
    />
  </svg>
);
function Modal({ setOpen }) {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-head">
            <h4>rules</h4>
            <button className="close-btn" onClick={() => setOpen(false)}>
              {close}
            </button>
          </div>
          <img src={rules} alt="rules" />
        </div>
      </div>
    </>
  );
}
export default Modal;
