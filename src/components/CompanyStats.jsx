import React, { useEffect, useState } from "react";
import "../styles/CompanyStats.css";
import { BsTools, BsPeopleFill, BsEmojiSmileFill } from "react-icons/bs";

const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

const CompanyStats = () => {
  const [progress, setProgress] = useState(0);

  const statsData = [
    { id: 1, icon: <BsTools />, value: 3, suffix: "+", title: "Year of Jurney" },
    { id: 2, icon: <BsPeopleFill />, value: 91, suffix: "+", title: "Projects Completed" },
    { id: 3, icon: <BsEmojiSmileFill />, value: 6, suffix: "+", title: "Happy Clients" }
  ];

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 0.4 seconds total for all
    const stepTime = 10; // update every 10ms
    const steps = duration / stepTime;

    const timer = setInterval(() => {
      start += 1;
      const linearProgress = start / steps;
      setProgress(easeOutQuad(linearProgress));
      if (start >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="company-stats">
      {statsData.map((stat, index) => {
        const displayValue = Math.floor(stat.value * progress);
        return (
          <div
            key={stat.id}
            className="stat-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="icon-circle">{stat.icon}</div>
            <h3>
              {displayValue.toLocaleString()}
              {stat.suffix}
            </h3>
            <p>{stat.title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default CompanyStats;
