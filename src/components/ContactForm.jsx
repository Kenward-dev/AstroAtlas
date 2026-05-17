import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});
  const [submitMessage, setSubmitMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function validate() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 100) {
      newErrors.message = "Message cannot exceed 100 characters";
    }

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Form submitted successfully!");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="formDetails">
        <h1 className="formHeading">Have Questions About Planetary Science?</h1>
        <p className="formText">
          Interested in learning more about space, astronomy, or how planetary
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
              onChange={handleChange}
            />
            {errors.fullName && (
              <span className="errorText">{errors.fullName}</span>
            )}
          </label>

          <label htmlFor="email">
            Email <span className="asterics">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              placeholder="example@example.com"
              onChange={handleChange}
            />
            {errors.email && <span className="errorText">{errors.email}</span>}
          </label>
        </div>

        <div className="flexGroup second">
          <label htmlFor="phone">
            Phone Number <span className="asterics">*</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              id="phone"
              placeholder="Please enter a valid phone number"
              onChange={handleChange}
            />
            {errors.phone && <span className="errorText">{errors.phone}</span>}
          </label>

          <label htmlFor="message">
            Message <span className="asterics">*</span>
            <input
              type="text"
              name="message"
              value={formData.message}
              id="message"
              className="message"
              placeholder="Enter your message"
              onChange={handleChange}
            />
            <p className="characterText">
              {formData.message.length}/100 characters
            </p>
            {errors.message && (
              <span className="errorText">{errors.message}</span>
            )}
          </label>
        </div>
      </div>

      {submitMessage && <p className="submitMessage">{submitMessage}</p>}

      <button type="submit" className="submitBtn" disabled={loading}>
        {loading ? "Submitting..." : "Submit \u00a0 >"}
      </button>
    </form>
  );
}
