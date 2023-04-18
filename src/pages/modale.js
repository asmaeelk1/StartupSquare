import React, { useState } from "react";
import "./modal.css";
import image from './mignatureVd.png'
import video from './vd.mp4'

export function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div >
      <img src={image} alt="image" onClick={toggleModal} className="btn-modal" />
      {modal && (
        <div className="moda">

          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <video width="100%" height="100%"  controls autoPlay>
              <source src={video} />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
