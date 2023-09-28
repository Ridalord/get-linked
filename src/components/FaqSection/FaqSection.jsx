import React from "react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import FaqContent from "./FaqContent";
import classes from "./FaqContent.module.css"


export default function FaqSection() {
  return (
    <>
      <SectionTemplate topHeader="Frequently Asked" buttomHeader="Questions" reversed={true} className={classes.faqImage} sectionImage="./FaqImage.png" sectionContent={<FaqContent />} policySection={classes.faqSection}  />
    </>
  )
}