import GitHubCalendar from "react-github-calendar";
import React from "react";
import style from "./calendar.module.css"; // Use an external CSS file for better responsiveness

function Calender() {
  return (
    <div className={style.calendarContainer}>
      <h2 className={style.heading}>GitHub Contributions</h2>
      <GitHubCalendar
        username="Priyankadubey190"
        color="teal"
        blockSize={17}
        fontSize={20}
        className={style.githubCalendar}
      />
      <div className={style.statsContainer}>
        <p>
          <a
            className="stat"
            href="https://github.com/Priyankadubey190/github-readme-stats"
          >
            <img
              alt="Top Languages"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Priyankadubey190&langs_count=8&count_private=true&layout=compact&theme=vue-dark"
              className={style.statImage}
            />
          </a>
        </p>
        <p>
          <a
            className="stat"
            href="https://github.com/Priyankadubey190/github-readme-streak-stats"
          >
            <img
              title="🔥 Streak stats"
              alt="Streak Stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Priyankadubey190&hide_border=true&theme=vue-dark"
              className={style.statImage}
            />
          </a>
        </p>
        <p>
          <a
            className="stat"
            href="https://github.com/Priyankadubey190/github-readme-stats"
          >
            <img
              alt="GitHub Stats"
              src="https://github-readme-stats.vercel.app/api?username=Priyankadubey190&show_icons=true&locale=en&theme=vue-dark"
              className={style.statImage}
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Calender;
