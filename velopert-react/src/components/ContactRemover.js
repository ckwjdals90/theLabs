import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ContactRemover extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      Remove selected Contact
      </button>
    );
  }

}

export default ContactRemover
