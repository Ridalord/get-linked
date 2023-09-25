import {React, useState, useEffect} from "react";
import classes from "../SectionTemplate/SectionTemplate.module.css"
import styles from "./TimelineSection.module.css"
import TimelineItem from "./TimelineItem";


export default function TimelineSection(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);
  const timelineContents = [
    {
      id: 1,
      header: "Hackathon Announcement",
      date: "November 18, 2023",
      text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
    },
    {
      id: 2,
      header: "Teams Registration begins",
      date: "November 18, 2023",
      text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
    },
    {
      id: 3,
      header: "Teams Registration ends",
      date: "November 18, 2023",
      text: "Interested Participants are no longer Allowed to register"
    },
    {
      id: 4,
      header: "Announcement of the accepted teams and ideas",
      date: "November 18, 2023",
      text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
    },
    {
      id: 5,
      header: "Getlinked Hackathon 1.0 Offically Begins",
      date: "November 18, 2023",
      text: "Accepted teams can now proceed to build their ground breaking skill driven solutions"
    },
    {
      id: 6,
      header: "Demo Day",
      date: "November 18, 2023",
      text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
    }
  ]
  return (
    <section className={`${classes.sectionWrap} ${props.reversed && "flex-row-reverse"} ${styles.timelineWrap}`}>
      <div className={styles.header}>
        <h3>Timeline</h3>
        <p>Here is the breakdown of the time we anticipate
          using for the upcoming event.</p>
      </div>
      <div>
        {timelineContents.map((item) => (
          <TimelineItem
            key={item.id}
            header={item.header}
            date={item.date}
            text={item.text}
            index={item.id}
            className={(parseInt(item.id)%2 === 0) && !isMobile ? styles.switchDate : ""}
          />
        ))}
      </div>
    </section>
  )
}