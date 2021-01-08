import React from "react";

// Netlify-powered form
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render = () => {
    const { name, email, message } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form--submission">
        <label for="message">Your message</label>
        <textarea name="message" id="message" value={message} onChange={this.handleChange} />
       
        <button type="submit">Send your feedback</button>
      </form>
    )
  };
}

export default FeedbackForm;
