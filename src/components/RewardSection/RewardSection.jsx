import React from "react";
import PrizesTemplate from "./prizesTemplate";
import sectionStyle from "../SectionTemplate/SectionTemplate.module.css"
import textStyle from "../FaqSection/FaqContent.module.css"
import classes from "./RewardSection.module.css"


export default function RewardSection() {
  const prizesContent = [
    {
      id: 2,
      medal: "./secondRunner.png",
      prize: "300,000",
      position: "2nd"
    },
    {
      id: 1,
      medal: "./firstRunner.png",
      prize: "400,000",
      position: "1st",
      isFirst: true
    },
    {
      id: 3,
      medal: "./thirdRunner.png",
      prize: "150,000",
      position: "3rd"
    }
  ]
  return (
    <>
      {/* <SectionTemplate topHeader="Prizes and" buttomHeader="Rewards" sectionContent={<RewardContent/>} sectionImage="./rewardImage.png" /> */}
      <section className={`${sectionStyle.sectionWrap} ${classes.rewardSection}`}>
        <div className={classes.header}>
          <div className={`${sectionStyle.sectionHeading}`}>
            <span>Prizes and</span>
            <span className={sectionStyle.coloredHeader}>Rewards</span>
          </div>
          <p className={textStyle.text}>Highlight of the prizes or rewards for winners and for participants.</p>
        </div>
        <div className={`${classes.prizesWrap} d-flex`}>
          <div className={classes.trophyWrap}></div>
          <div className={`${classes.prizesContainer} d-flex`}>
            {
              prizesContent.map(item => (
                <PrizesTemplate
                  key={item.id}
                  position={item.position}
                  prize={item.prize}
                  medal={item.medal}
                  isFirst={item.isFirst}
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}