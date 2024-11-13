import React from "react";
import style from "./contact.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <div id="contact" className={style.concontainer}>
      <center>
        <h1 className={style.heading}>Contact</h1>
        <h2 className={style.subheading}>
          Feel free to get in touch with me via the following channels:
        </h2>
        <div className={style.iconContainer}>
          <AiFillGithub
            className={style.icon}
            onClick={() => {
              window.open("https://github.com/Priyankadubey190", "_blank");
            }}
          />
          <AiFillLinkedin
            className={style.icon}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/priyankadubey-dev/",
                "_blank"
              );
            }}
          />
        </div>
        <div className={style.contactDetails}>
          <h3>Email</h3>
          <p>priyankadubey0811@gmail.com</p>
          <h3>Phone</h3>
          <p>+91-7355601015</p>
        </div>
      </center>
    </div>
  );
}
