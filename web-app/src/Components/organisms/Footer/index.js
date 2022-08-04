import React from "react";
import style from "./styles.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.year}>2022</div>
      <div className={style.mail}>@author</div>
    </div>
  );
}

export default Footer;
