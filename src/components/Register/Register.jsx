import React, { useState, useEffect } from "react";
import classes from "./Register.module.css";
import Button from "../Button/Button";

export default function Register() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    teamName: "",
    phone: "",
    email: "",
    projectTopic: "",
    category: "",
    groupSize: "",
    check: false,
  });
  console.log(formData)

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://backend.getlinked.ai/hackathon/categories-list", requestOptions)
      .then(response => response.json()) // Parse the response as JSON
      .then(result => setCategories(result))
      .catch(error => console.log('error', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? !formData.check : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a JSON payload from the form data
    const payload = {
      email: formData.email,
      phone_number: formData.phone,
      team_name: formData.teamName,
      group_size: parseInt(formData.groupSize),
      project_topic: formData.projectTopic,
      category: parseInt(formData.category), // Assuming category is an integer
      privacy_policy_accepted: formData.check,
    };

    // Make a POST request to your API
    fetch("https://backend.getlinked.ai/hackathon/registration", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
        // Handle success or any additional actions here
      })
      .catch(error => {
        console.log('error', error);
        // Handle errors here
      });
  };

  return (
    <div className={`${classes.regWrap} d-flex`} >
      <div className={`${classes.regImage} col-lg-6 col-sm-12`}></div>
      <div className={`${classes.formContainer} col-lg-6 col-sm-12`}>
        <h2>Register</h2>
        <div className={`${classes.movement} d-flex`}>
          <div>Be part of this movement!</div>
          <div className={`${classes.movementImage} d-flex justify-content-center`}>
            <div></div>
            <div></div>
          </div>
        </div>
        <h3>CREATE YOUR ACCOUNT</h3>
        <form action="" method="post" className={`${classes.regForm} d-flex`} onSubmit={handleSubmit}>
          <label htmlFor="teamName" className={`${classes.formInput} col-lg-5 col-sm-12`}>Team's Name
            <input type="text" name="teamName" id="teamName" placeholder="Enter the name of your group" required value={formData.teamName} onChange={handleInputChange}/>
          </label>
          <label htmlFor="phone" className={`${classes.formInput} col-lg-5 col-sm-12`}>Phone
            <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" required value={formData.phone} onChange={handleInputChange}/>
          </label>
          <label htmlFor="email" className={`${classes.formInput} col-lg-5 col-sm-12`}>Email
            <input type="email" name="email" id="email" placeholder="Enter your phone number" required value={formData.email} onChange={handleInputChange}/>
          </label>
          <label htmlFor="projectTopic" className={`${classes.formInput} col-lg-5 col-sm-12`}>Project Topic
            <input type="text" name="projectTopic" id="projectTopic" placeholder="What is your group project topic" required value={formData.projectTopic} onChange={handleInputChange}/>
          </label>
          <label htmlFor="category" className={`${classes.formInput} col-lg-5 col-sm-12`}>Category
            <select name="category" id="category" defaultValue={'Select your category'} required value={formData.category} onChange={handleInputChange}>
              <option value="" selected>Select your category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="category" className={`${classes.formInput} col-lg-5 col-sm-12`}>Group Size
            {/* <input type="text" name="projectTopic" id="projectTopic" placeholder="What is your group project topic" /> */}
            <select name="groupSize" id="groupSize" defaultValue={"Select"} required value={formData.groupSize} onChange={handleInputChange}>
              <option value="" selected> Selected</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
         
          <em className={`col-12`}>Please review your registration details before submitting</em>
          <label htmlFor="check" className={`${classes.checkbox} col-12`}>
            <input type="checkbox" name="check" id="check" required value={formData.check} onChange={handleInputChange}/>
            I agreed with the event terms and conditions and privacy policy
          </label>
          <Button name="Register Now" className={`col-12`} />
        </form>
      </div>
    </div>
  )
}