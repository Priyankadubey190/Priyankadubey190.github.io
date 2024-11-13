import Calender from "./Calender";
import Contact from "./Contact";
import style from "./home.module.css";
import Projects from "./Projects";
//import Projects from './Projects.jsx'

export default function Home() {
  return (
    <div>
      <div id="home" className={style.tophome}>
        <center className={style.topcen}>Priyanka Dubey</center>
        <p className={style.text}>
          A passionate, ambitious individual
          <br />
          and learning Full-Stack Web Development course from <br />
          Masai.
        </p>
        <a href="#more" className={style.texta}>
          SEE MORE
        </a>
      </div>
      <div id="more" className={style.mymore}>
        <h2 className={style.myheading}>About Me</h2>
        <div className={style.homeflex}>
          <div className={style.myimg}>
            <img
              src="https://github.com/Priyankadubey190/Priyankadubey190.github.io/raw/master/myportfolio/public/Screenshot_20231104_105643_Gmail.jpg"
              alt="myprofilepic"
              height="300px"
            />
          </div>
          <div>
            <h2>
              Hi I'm Priyanka, and I recently completed a 30 week coding classes
              from Masai.
            </h2>
            <br />
            <p className={style.mytext}>
              I believe practice makes perfect. A Diploma holder in Information
              Technology, I interned at Infosoft Network asp.net and worked in
              Panna Infotech for 3 months before the pandemic hit. Around that
              time, I got to know about Masai School and its Web Development
              program from a friend. I believed this to be a career that I would
              excel in and registered for this course. Now, I am working on
              various projects and have improved my skills in MERN Stack, HTML,
              CSS, JavaScript, Node.js, MongoDB, Mongoose, etc. I have a keen
              interest in DSAs and love collaborating with others and using my
              problem-solving skills while working on projects.
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1XP4NfTRZCxFkT9fM2Fu5H7mtbcCzYUR_/view?usp=sharing",
                  "_blank"
                );
              }}
              className={style.resbtn}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <div id="skills" className={""}>
        <center>
          {" "}
          <h2 className={style.skillhed}>Skills</h2>
          <div className={style.skils}>
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
              alt=""
            />
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
              alt=""
            />
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
              alt=""
            />
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
              alt=""
            />
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
              alt=""
            />
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
              alt=""
            />
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
              alt=""
            />
            <img
              src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg"
              alt=""
            />
            <img
              src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_200x200.jpg"
              alt=""
            />
            <img
              src="https://img.icons8.com/color/140/material-ui.png"
              alt=""
            />
          </div>
        </center>
      </div>
      <Projects />
      <Calender />
      <Contact />
    </div>
  );
}
