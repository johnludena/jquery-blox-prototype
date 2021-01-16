// libs
import React from "react";
import GameGrid from './GameGrid';
import Modal from 'react-modal';
import ChatBubble from './ChatBubble';
import FeedbackForm from './FeedbackForm';
import Mailchimp from 'react-mailchimp-form';

const customModalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '800px',
    padding               : '30px'
  }
};

Modal.setAppElement('#root'); // set #root container to 'aria-hidden' while modal is active

class RightCol extends React.Component {

  constructor() {
    super();

    this.state = {
      modalActiveStatus: false
    }
  }

  openModal = () => {
    this.setState({
      modalActiveStatus: true
    })
  }

  closeModal = () => {
    this.setState({
      modalActiveStatus: false
    })
  }

  render() {

    return (
      <div className="RightCol col">
        <div className="grids-outter-wrapper">
            <GameGrid lessonKey={this.props.lessonKey} />
        </div>

        {/* <Modal isOpen={this.state.modalActiveStatus} style={customModalStyles} onRequestClose={this.closeModal}>
            <button onClick={this.closeModal}>close modal</button>
            <h1>Modal content test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus culpa exercitationem. Exercitationem explicabo sed quidem? Hic amet, reiciendis omnis, deleniti odio, voluptatem eos totam corporis ipsum illo fugit vel!</p>

            <FeedbackForm />
        </Modal> */}

        <Modal isOpen={this.state.modalActiveStatus} style={customModalStyles} onRequestClose={this.closeModal}>
            <button onClick={this.closeModal}>close modal</button>
            <h1>MailChimp Signup Form</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repellendus culpa exercitationem. Exercitationem explicabo sed quidem? Hic amet, reiciendis omnis, deleniti odio, voluptatem eos totam corporis ipsum illo fugit vel!</p>

            <Mailchimp
              className="form--submission"
              action='https://boldpixelmedia.us5.list-manage.com/subscribe/post?u=d6c6ce7da87357b90e9859e81&amp;id=2091bdd722'
              fields={[
                {
                  name: 'FNAME',
                  placeholder: 'Your first name',
                  type: 'text',
                  required: false
                },
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true
                }
              ]}

              messages = {
                {
                  sending: "Sending...",
                  success: "Thank you for subscribing!",
                  error: "An unexpected internal error has occurred.",
                  empty: "You must write an e-mail.",
                  duplicate: "Too many subscribe attempts for this email address",
                  button: "Subscribe!"
                }
              }
              />
        </Modal>

        {/* <button onClick={this.openModal}>Open Modal</button> */}

        <ChatBubble />
      </div>
    );
  }
}

export default RightCol;


