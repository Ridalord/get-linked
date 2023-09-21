import React from "react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import GuidlineContent from "./GuidleineContent";
import GuidelineImage from "./guidlineImage.png"
import classes from "./GuidelineImage.module.css"


export default function Guidelinesection() {
  return (
    <>
      <SectionTemplate reversed={true} sectionImage={GuidelineImage} topHeader="Rules and" buttomHeader="Guidelines" sectionContent={<GuidlineContent />} className={classes.guidelineImage} />
    </>
  )
}