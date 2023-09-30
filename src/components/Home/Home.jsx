import React from "react";
import Landing from "../Landing/Landing";
import IntroSection from "../IntroSection/IntroSection";
import Guidelinesection from "../GuidelineSection/GuidelineSection";
import CriteriaSection from "../CriteriaSection/CriteriaSection";
import FaqSection from "../FaqSection/FaqSection";
import TimelineSection from "../TimelineSection/TimelineSection";
import RewardSection from "../RewardSection/RewardSection";
import SponsorSection from "../SponsorSection/SponsorSection";
import PolicySection from "../PolicySection/PolicySection";


export default function Home() {
  return (
    <>
      <Landing />
      <IntroSection />
      <Guidelinesection />
      <CriteriaSection />
      <FaqSection />
      <TimelineSection />
      <RewardSection />
      <SponsorSection />
      <PolicySection />
    </>
  )
}