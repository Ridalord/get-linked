import React from "react";
import SectionTemplate from "../SectionTemplate/SectionTemplate";
import IntroContent from "./IntroContent";


export default function IntroSection() {
  return (
    <>
      <SectionTemplate topHeader="Introduction to getlinked" buttomHeader="tech Hackathon 1.0" sectionContent={<IntroContent />} sectionImage="./bigIdea.png" reversed={false} />
    </> 
  )
}