import React, { useState } from "react";
import "../assets/style/scss/modules/_buttons.scss";
import "../assets/style/scss/modules/_modal.scss";
import wallet_icon from "../assets/img/icon/wallet-icon.svg";
import Modal from "react-modal";
import ReactPlayer from "react-player";

Modal.setAppElement("#root");
const Walletbtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button className="iconBtn">
        <img src={wallet_icon} className="iconBtn__icon" alt="" />
        <span className="iconBtn__label">Connect to Wallet</span>
        <span
          className="iconBtn__infoIcon"
          onClick={() => setModalIsOpen(true)}
        >
          <svg width="2" height="10" viewBox="0 0 2 10">
            <path d="M11,7h2V9H11Zm0,4h2v6H11Z" transform="translate(-11 -7)" />
          </svg>
        </span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#000000bf",
          },
        }}
      >
        <div className="modal__header">
          <div className="modal__title"></div>
          <div className="modal__close">
            <button
              className="modal__close--icon"
              onClick={() => setModalIsOpen(false)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="modal__body">
          <div className="modal__grid">
            <div className="grid__col12">
              <h2>Need Help</h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae aliquid nostrum, iure quidem porro neque ex est itaque
                  alias tempora.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, quas?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit fugit incidunt nam, autem, dolorum eligendi non iure
                  illum ducimus suscipit labore ipsa. Natus iure dolore quam
                  temporibus dignissimos unde blanditiis.
                </li>
              </ul>
              <h2>How to Connect?</h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae aliquid nostrum, iure quidem porro neque ex est itaque
                  alias tempora.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, quas?
                </li>
              </ul>
            </div>
            <div className="grid__col6">
              <button className="iconBtn">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M13 13v5.585l1.828-1.828 1.415 1.415L12 22.414l-4.243-4.242 1.415-1.415L11 18.585V13h2zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z" />
                </svg>
                <span className="iconBtn__label">Download Doc</span>
              </button>
            </div>
            <div className="grid__col6">
              <ReactPlayer
                width="100%"
                height="226px"
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Walletbtn;
