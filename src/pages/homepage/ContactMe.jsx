import { useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const openLink = (link) => window.open(link);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      };

      await emailjs.send(
        'service_cdoua66',
        'template_kslk05s',
        templateParams,
        'NirjtW2bgWfrv6FsC'
      );

      setResponseMessage("Success sending email");
    } catch (error) {
      console.log(error);
      setResponseMessage("Error sending email");
    }
  };

  const closeDialog = () => {
    setResponseMessage("");
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="contact--title">Contact Me</h2>
        <p
          onClick={() =>
            openLink(
              "https://mail.google.com/mail/u/0/#inbox?compose=XBcJlKshkcCkMbnnCdWCrhdPFkvHfKsNNXKZghzlcCsdGqtWhCllVDZJGjZjcxpqzBRSWvccMGsRLzRb"
            )
          }
          className="contact--mail text-lg"
        >
          prasuhirpara@gmail.com
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="firstName" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lastName" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="mobile" className="contact--label">
            <span className="text-md">Mobile Number</span>
            <input
              type="text"
              className="contact--input text-md"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
      {responseMessage && (
        <div className="overlay" onClick={closeDialog}>
          <div className="response-message text-md">
            <p>{responseMessage}</p>
          </div>
        </div>
      )}
    </section>
  );
}