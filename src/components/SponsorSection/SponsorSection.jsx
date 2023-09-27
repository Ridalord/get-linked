import React from "react";
import sectionStyle from "../SectionTemplate/SectionTemplate.module.css"
import headerStyles from "../TimelineSection/TimelineSection.module.css"
import classes from "./SponsorSection.module.css"


export default function SponsorSection() {
  return (
    <section className={`${sectionStyle.sectionWrap} ${classes.sponsorWrap}`}>
      <div className={headerStyles.header}>
        <h3>Partners and Sponsors</h3>
        <p>Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors</p>
      </div>
      <div className={`${classes.sponsorContainer} d-flex justify-content-center`}>
        <div className={`${classes.liberty} ${classes.sponsor} col-4`}>
          <div></div>
        </div>
        <div className={`${classes.libertyPay} ${classes.sponsor} col-4`}>
          <div></div>
          <div className={`${classes.centerMargin} ${classes.right}`}></div>
          <div className={`${classes.centerMargin} ${classes.left}`}></div>
        </div>
        <div className={`${classes.winWise} ${classes.sponsor} col-4`}>
          <div></div>
        </div>
        <div className={`${classes.whishSpersms} ${classes.sponsor} col-4`}>
          <div></div>
        </div>
        <div className={`${classes.paybox} ${classes.sponsor} col-4`}>
          <div></div>
        </div>
        <div className={`${classes.vusualPlus} ${classes.sponsor} col-4`}>
          <div></div>
        </div>
      </div>
    </section>
  )
}