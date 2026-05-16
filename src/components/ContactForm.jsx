import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [submitMessage, setSubmitMessage] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitMessage("Form submitted successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formDetails">
        <h1 className="formHeading">Have Questions About Planetary Science?</h1>

        <p className="formText">
          Interested in learning more about space,astronomy, or how planetary
          data is collected and analyzed?{" "}
          <span className="text-wrap">
            Reach out and we'll get back to you.
          </span>
        </p>
      </div>

      <div className="formInput">
        <div className="flexGroup">
          <label htmlFor="fullName">
            Full Name <span className="asterics">*</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              id="fullName"
              placeholder="Full name"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email<span className="asterics">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              placeholder="example@example.com"
              required
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="flexGroup second">
          <label htmlFor="phone">
            Phone Number<span className="asterics">*</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              id="phone"
              placeholder="Please enter a valid phone number."
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="message">
            Message<span className="asterics">*</span>
            <input
              type="text"
              name="message"
              value={formData.message}
              id="message"
              className="message"
              placeholder="Enter your message"
              required
              onChange={handleChange}
            />
            <p className="characterText">100 characters</p>
          </label>
        </div>
      </div>

      {submitMessage && <p className="submitMessage">{submitMessage}</p>}

      <button type="submit" className="submitBtn">
        Submit &nbsp; &gt;
      </button>
    </form>
  );
}
