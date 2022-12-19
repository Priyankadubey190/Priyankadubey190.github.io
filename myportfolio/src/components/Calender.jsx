import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip"
import React from "react";

function Calender() {
    // const selectLastHalfYear = contributions => {
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    //     const shownMonths = 8;
      
    //     return contributions.filter(day => {
    //       const date = new Date(day.date);
    //       const monthOfDay = date.getMonth();
      
    //       return (
    //         date.getFullYear() === currentYear &&
    //         monthOfDay > currentMonth - shownMonths &&
    //         monthOfDay <= currentMonth
    //       );
    //     });
    //   }
  return (
    <div align="center" style={{padding:"5%"}}
      // style={{align:"center",marginLeft:"10%",marginRight:"5%"}}
    >
      <h2>GitHub Contributions</h2>
      <GitHubCalendar
        username="Priyankadubey190"
        color="teal"
        blockSize={17}
        fontSize={20}
        >

      {/* <ReactTooltip delayShow={20} /> */}
        </GitHubCalendar>
      <div>
      <p align="center">
        <br />
        <br />
          <a
            className="stat"
            href="https://github.com/Priyankadubey190/github-readme-stats"
          >
            <img
              alt="Pd-041298-DEV Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Priyankadubey190&langs_count=8&count_private=true&layout=compact&theme=vue-dark"
            />
          </a>
        </p>
        <br />
        <p align="center">
          <a
            className="stat"
            href="https://github.com/Priyankadubey190/github-readme-streak-stats"
          >
            <img
              title="🔥 Get streak stats for your profile at git.io/streak-stats"
              alt="Pd-041298-DEV streak"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Priyankadubey190&hide_border=true&theme=vue-dark"
            />
          </a>
        </p>

        <br />
        <br />
        <p align="center">
          <a
            className="stat"
            href="https://github.com/Priyankadubey190/github-readme-stats"
          >
            <img
              alt="Pd Github Stats"
              src="https://github-readme-stats.vercel.app/api?username=Priyankadubey190&show_icons=true&locale=en&theme=vue-dark"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Calender;