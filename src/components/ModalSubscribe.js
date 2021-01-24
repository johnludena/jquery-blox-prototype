import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-modal";
import Mailchimp from "react-mailchimp-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

Modal.setAppElement("#root"); // set #root container to 'aria-hidden' while modal is active (a11y)

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "800px",
    padding: "30px",
  },
};

class ModalSubscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActiveStatus: this.props.isModalSubscribeVisible,
    };    

  }

  closeModal = () => {
    this.props.dispatch({
      type: "TOGGLE_SUBSCRIBE_MODAL",
      payload: {
        isVisible: false,
      }
    });
  };

  render = () => {
    return (
      <Modal
        isOpen={this.props.isModalSubscribeVisible}
        style={customModalStyles}
        onRequestClose={this.closeModal}
      >
        <button onClick={this.closeModal} className="button--close-modal">
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h1>Get updates on the next version of jQueryBlox</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          repellendus culpa exercitationem. Exercitationem explicabo sed quidem?
          Hic amet, reiciendis omnis, deleniti odio, voluptatem eos totam
          corporis ipsum illo fugit vel!
        </p>

        <Mailchimp
          className="form--submission"
          action="https://boldpixelmedia.us5.list-manage.com/subscribe/post?u=d6c6ce7da87357b90e9859e81&amp;id=2091bdd722"
          fields={[
            {
              name: "FNAME",
              placeholder: "Your first name",
              type: "text",
              required: false,
            },
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          messages={{
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!",
          }}
        />
      </Modal>
    );
  };
}

const mapStateToProps = (state) => {
  const { isModalSubscribeVisible } = state.modalsReducer;
  return { isModalSubscribeVisible }
};

export default connect(mapStateToProps)(ModalSubscribe);
