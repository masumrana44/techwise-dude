import React, { useState } from "react";
import "./Modal.css";
import { useContext } from "react";
import { ShareContext } from "../../Contexts/Context";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Modal() {
  const { isOpen, setIsOpen } = useContext(ShareContext);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <button onClick={handleOpenModal}>Open Modal</button> */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_qr6rdacm.json"
              style={{ height: "400px", width: "400px" }}
            >
              <Controls
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
            <button onClick={handleCloseModal}>Close </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
