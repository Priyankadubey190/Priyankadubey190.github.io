import React from 'react'
import style from "./contact.module.css";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
export default function Contact() {

  //https://www.linkedin.com/in/priyankadubey-dev/

  return (
    <div id="contact" className={style.concontainer}>
     <center>
        <h1 style={{fontSize:"40px"}}>Contact</h1>
        <h1>Feel free to get in touch with me via the following channels:</h1>
        <div className={style.flex}>
          <AiFillGithub onClick={()=>{window.open("https://github.com/Priyankadubey190","_blank")}} />  
          <AiFillLinkedin onClick={()=>{window.open("https://www.linkedin.com/in/priyankadubey-dev/","_blank")}} />
        </div>
        <h1>Email</h1>
        <h2>priyankadubey0811@gmail.com</h2>
        <h1>Phone</h1>
        <h2>+91-7355601015</h2>
     </center>
    </div>
  )
}
