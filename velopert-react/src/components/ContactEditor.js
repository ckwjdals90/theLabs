import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ContactEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.contact.name,
      phone: nextProps.contact.phone
    });
  }

  handleClick() {
    if(!this.props.isSelected) {
      console.log("contact not selected");
      return;
    }

    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    return(
      <div>
        <p>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Edit</button>
        </p>
      </div>
    )
  }
}

export default ContactEditor;
