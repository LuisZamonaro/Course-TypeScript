import React from "react";

import styles from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, title, open, onClose }: Props) => {

  function handleClose (e: React.MouseEvent): void {
    e.stopPropagation(); // deve ser usando quando é de pai pra filho
    onClose();
  }

  return (
    <>
      {
        open && (
          <div id="modal">
            <div className={styles.fade} onClick={handleClose}></div>
            <div className={styles.modal}>
              <h2>{title}</h2>
              {children}
            </div>
          </div>
        )
      }
    </>
  );
};

export default Modal;