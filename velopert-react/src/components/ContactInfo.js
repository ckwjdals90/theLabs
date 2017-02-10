import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ContactInfo extends Component {
  render() {
    return(
      <li>{this.props.name} {this.props.phone}</li>
    );
  }
}

export default ContactInfo;
