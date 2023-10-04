import {React, useState} from "react";
import regCss from "../Register/Register.module.css"
import Instagram from "./insta.svg"
import X from "./x.svg"
import Linkedin from "./linkedIn.svg"
import Facebook from "./facebook.svg"
import Button from "../Button/Button";
import classes from "./Contact.module.css"



export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    message: "",
    email: "",
    projectTopic: "",
    category: "",
    groupSize: "",
    check: false,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  return (
    <div className={`${regCss.regWrap} ${classes.regWrap} d-flex`}>
      <div className={`col-lg-6 col-sm-12 ${classes.contactInfo} d-flex`}>
        <h1>Get in touch</h1>
        <p>Contact Information</p>
        <p>27,Alara Street Yaba 100012 Lagos State</p>
        <p>Call Us : 07067981819</p>
        <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
        <div className={`${classes.socialLinks} d-flex`}>
          <div>Share on</div>
          <div className={`${classes.linkList} d-flex`}>
            <span>
              <a href="#insta">
                <img src={Instagram} alt="Instagram" />
              </a>
            </span>
            <span>
              <a href="#x">
                <img src={X} alt="X" />
              </a>
            </span>
            <span>
              <a href="#linkedin">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </span>
            <span>
              <a href="#facebook">
                <img src={Facebook} alt="Facebook" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={`${regCss.formContainer} ${classes.formContainer} d-flex col-lg-6 col-sm-12`}>
        <div className={`${classes.formHeader} d-flex`}>
          <span>Questions or need assistance?</span>
          <span>Let us know about it!</span>
        </div>
        <form action="" method="post" className={`${classes.formWrap} d-flex`}>
          <p>Email us below to any question related to our event</p>
          <label htmlFor="firstName" className={`${regCss.formInput} col-lg-5 col-sm-12`}>First Name
            <input type="text" name="firstName" id="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleInputChange} />
          </label>
          <label htmlFor="email" className={`${regCss.formInput} col-lg-5 col-sm-12`}>Email
            <input type="email" name="email" id="email" placeholder="Enter your phone number" required value={formData.email} onChange={handleInputChange} />
          </label>
          <label htmlFor="message" className={`${regCss.formInput} col-lg-5 col-sm-12`}>Message
            <textarea type="tel" name="message" id="message" placeholder="Enter your phone number" required value={formData.message} onChange={handleInputChange} ></textarea>
          </label>
          <Button name="Submit" className={classes.button} />
        </form>
      </div>
    </div>
  )
}