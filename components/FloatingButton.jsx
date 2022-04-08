import React from "react";
import { AiFillMessage } from "react-icons/ai";

import styles from "../sass/FloatingButton.module.scss";

function FloatingButton() {
  return (
    <div className={styles.btn}>
      <AiFillMessage size={35} color="white" />
    </div>
  );
}

export default FloatingButton;
