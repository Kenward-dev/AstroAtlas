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
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(formData);
  }

  return (
    <form>
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
          <label htmlFor="">
            Full Name <span className="asterics">*</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              id=""
              placeholder="Full name"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Email<span className="asterics">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              id=""
              placeholder="example@example.com"
              required
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="flexGroup second">
          <label htmlFor="">
            Phone Number<span className="asterics">*</span>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              id=""
              placeholder="Please enter a valid phone number."
              required
              onChange={handleChange}
            />
          </label>

          <label htmlFor="">
            Message<span className="asterics">*</span>
            <input
              type="text"
              name="message"
              value={formData.message}
              id=""
              className="message"
              placeholder="Enter your message"
              required
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <button type="submit" className="submitBtn">
        Submit &nbsp; &gt;
      </button>
    </form>
  );
}
