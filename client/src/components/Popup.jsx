import React from 'react'
import { FiX } from "react-icons/fi";
import styles from '../css/components/Popup.module.css'


const Popup = ({children,title,close,style}) => {
  return (
    <>
      <div className={styles.popup}>
        <div
          className={styles.popup_container}
          style={style}
        >
          <div className={styles.title_con}>
            <span className={styles.title}>{title}</span>
            <FiX className={styles.cancel_icon} onClick={close} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Popup