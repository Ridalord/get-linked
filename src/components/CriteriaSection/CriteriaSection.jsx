import React from "react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import CriteriaImage from "./criteriaImage.png"
import CriteriaContent from "./CriteriaContent";


export default function CriteriaSection() {
  return (
    <>
      <SectionTemplate sectionImage={CriteriaImage} topHeader="Judging Criteria" buttomHeader="Key attributes" sectionContent={<CriteriaContent/>} />
    </>
  )
}