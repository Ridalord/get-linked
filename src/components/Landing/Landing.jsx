import React, { useEffect, useState } from "react";
import classes from "./Landing.module.css";
import Button from "../Button/Button";

export default function Landing() {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const textToType = "Igniting a Revolution in HR Innovation";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setCursorVisible(false);
      }
    }, 100); // Adjust typing speed (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section className={classes.landingSection}>
      <div className="container">
        <div className={`${classes.intro} d-grid justify-content-center`}>
          <div className={`col-sm-12 ${classes.animatedText}`}>
            <div className={classes.typingAnimation}>
              <span>{typedText}</span>
              {cursorVisible && <span className={classes.cursor}>|</span>}
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="117" height="11" viewBox="0 0 117 11" fill="none">
                <path d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9" stroke="#FF26B9" stroke-width="3" />
              </svg>
            </div>
          </div>
          <div className={classes.mainIntro}>
            <div className="d-flex">
              <span>getlinked Tech <span className={classes.bulb}></span></span>
              <span>Hackathon <span className={classes.version}>1.0</span><span className={classes.chain}></span><span className={classes.bang}></span></span>
            </div>
            <p>
              Participate in getlinked tech Hackathon
              2023 stand a chance to win a Big prize
            </p>
            <Button name="Register" />
            <div className="time d-flex justify-content-between">
              <div className="hour">00<span>H</span></div>
              <div className="minute">00<span>M</span></div>
              <div className="second">00<span>S</span></div>
            </div>
          </div>
          <div className={`${classes.landingImage1} col-sm-12`}>
            <div className={classes.landingImage2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
