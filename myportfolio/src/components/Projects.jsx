import React from 'react'
import style from "./project.module.css";
const Projects =()=> {
  return (
    <div id="projects" className={style.procon}>
       <center className={style.maincen}>Projects</center>
       <div className={style.myproject}>
        <div>
            
            <img src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/raw/master/myportfolio/public/Screenshot%20(1527).png" alt="" width={"100%"}/>
            <center className={style.cen}>Solo e-commerce</center>
            <p> This is a solo e-commerce website. In this website I used HTML css javaSctipe React for frontend for backend Node express mongoDB mongoose</p>
            <div className={style.probtn}>
            <a href="https://my-solo-full-ecommerce.netlify.app/">Live Site</a>
            <a href="https://github.com/Priyankadubey190/full-crud-application/tree/main/full-stack-app" className={style.apro}>View Repo</a>
            </div>
        </div>
        <div>
        <img src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/raw/master/myportfolio/public/Screenshot%20(1529).png" alt=""  width={"100%"}/>
            <center className={style.cen}>Animoto-Clone</center>
            <p>This is solo project in this website for front end I used HTML css javaScript and for backend I used JSON server.</p>
            <div>
            <a href="https://animoto-website.netlify.app/">Live Site</a>
            <a href="https://github.com/Priyankadubey190/innate-earth-4569" className={style.apro}>View Repo</a>
            </div>
        </div>
        <div>
        <img src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/raw/master/myportfolio/public/Screenshot%20(1532).png" alt=""  width={"100%"}/>
            <center className={style.cen}>Nature's Basket-Clone</center>
            <p>This is the clone of nature's basket website, we can use this website to buy fresh food item.</p>
            <div>
            <a href="https://naturesbaskett.vercel.app/">Live Site</a>
            <a href="https://github.com/JatinKhatter07/wiggly-bucket-6915" className={style.apro}>View Repo</a>
            </div>
        </div>
       </div>

    </div>
  )
}
export default Projects