import React, { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className="scrollbar-hide  h-screen w-6/12"
    >
      <button
        onClick={closeModal}
        className="absolute right-2 top-2 font-bold text-white"
      >
        Close
      </button>
      {children}
    </dialog>
  );
}

export default Modal;
