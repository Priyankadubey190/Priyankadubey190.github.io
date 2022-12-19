import React from 'react'
import style from "./project.module.css";
const Projects =()=> {
  return (
    <div id="projects" className={style.procon}>
       <center className={style.maincen}>Projects</center>
       <div className={style.myproject}>
        <div>
            
            <img src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/Backend/images/Screenshot%20(219).png" alt="" width={"100%"}/>
            <center className={style.cen}>Developers Conference</center>
            <p> I built this this Project before joind to masai using HTML, CSS to make it responsive I used media queary.</p>
            <div className={style.probtn}>
            <a href="https://css-event-responsive.vercel.app/">Live Site</a>
            <a href="https://github.com/Priyankadubey190/css-event-responsive" className={style.apro}>View Repo</a>
            </div>
        </div>
        <div>
        <img src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/Backend/images/Screenshot%20(221).png" alt=""  width={"100%"}/>
            <center className={style.cen}>Reebok-Clone</center>
            <p>I did this Project in first construct week in Masai this is our team Project this is the e-commers site for designing in this project we used Html5,Css3,Javascript and to stored data we used local storage.</p>
            <div>
            <a href="https://condescending-lalande-686bdc.netlify.app/">Live Site</a>
            <a href="https://github.com/Priyankadubey190/reebok" className={style.apro}>View Repo</a>
            </div>
        </div>
        <div>
        <img src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/Backend/images/Screenshot%20(223).png" alt=""  width={"100%"}/>
            <center className={style.cen}>Pai-international-Clone</center>
            <p>This is my third construct week Project. There are six member in our team for designing we used HTML5, CSS3, JAVASCRIPT and for backend we used EXPRESS.JS, MongoDB Database.</p>
            <div>
            <a href="https://pai-internationalclone.herokuapp.com/">Live Site</a>
            <a href="https://github.com/ssb36/paiinternational-clone" className={style.apro}>View Repo</a>
            </div>
        </div>
       </div>

    </div>
  )
}
export default Projects