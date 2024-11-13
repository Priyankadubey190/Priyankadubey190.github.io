import React from "react";
import style from "./project.module.css";
const Projects = () => {
  return (
    <div id="projects" className={style.procon}>
      <center className={style.maincen}>Projects</center>
      <div className={style.myproject}>
        <div className="projectCard">
          <img
            src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/raw/master/myportfolio/public/Screenshot%20(1527).png"
            alt=""
            width={"100%"}
          />
          <center className={style.cen}>Solo e-commerce</center>
          <p>
            {" "}
            This is a solo e-commerce website. In this website I used React for
            frontend for backend mongoDB express.
          </p>
          <div>
            <a
              href="https://my-solo-full-ecommerce.netlify.app/"
              className={style.button}
            >
              Live Site
            </a>
            <a
              href="https://github.com/Priyankadubey190/full-crud-application/tree/main/full-stack-app"
              className={style.button}
            >
              View Repo
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img
            src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/raw/master/myportfolio/public/Screenshot%20(1529).png"
            alt=""
            width={"100%"}
          />
          <center className={style.cen}>Animoto-Clone</center>
          <p>
            This is solo project in this website for front end I used HTML css
            javaScript and for backend I used JSON server.
          </p>
          <div>
            <a
              href="https://animoto-website.netlify.app/"
              className={style.button}
            >
              Live Site
            </a>
            <a
              href="https://github.com/Priyankadubey190/innate-earth-4569"
              className={style.button}
            >
              View Repo
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img
            src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/raw/master/myportfolio/public/Screenshot%20(1532).png"
            alt=""
            width={"100%"}
          />
          <center className={style.cen}>Nature's Basket-Clone</center>
          <p>
            This is the clone of nature's basket website, we can use this
            website to buy fresh food item.
          </p>
          <div>
            <a
              href="https://naturesbaskett.vercel.app/"
              className={style.button}
            >
              Live Site
            </a>
            <a
              href="https://github.com/JatinKhatter07/wiggly-bucket-6915"
              className={style.button}
            >
              View Repo
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img
            src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/blob/master/myportfolio/public/housedates.png?raw=true"
            alt=""
            width={"100%"}
          />
          <center className={style.cen}>Housedates</center>
          <p>
            This website, built on Next.js, allows users to browse houses
            available for sale and rent. Users can directly purchase or rent
            properties, with a built-in chat feature enabling communication
            between property owners and potential customers.
          </p>
          <div>
            <a
              href="https://housedates-35464.web.app/"
              className={style.button}
            >
              Live Site
            </a>
          </div>
        </div>
        <div className="projectCard">
          <img
            src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/blob/master/myportfolio/public/webisabi.png?raw=true"
            alt=""
            width={"100%"}
          />
          <center className={style.cen}>Wabisabi</center>
          <p>
            This e-commerce website, built with Next.js, Tailwind CSS, and RTK
            Query, provides a seamless platform for users to purchase articles
            online. The site leverages functional components for a modern,
            efficient design. Tailwind CSS ensures a responsive.
          </p>
          <div>
            <a href="https://wabisabiproject.com/" className={style.button}>
              Live Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
