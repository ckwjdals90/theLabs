import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ContactInfo extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return(JSON.stringify(nextProps) != JSON.stringify(this.props));
  }

  handleClick() {
    this.props.onSelect(this.props.contactKey);
  }

  render() {

      let getStyle = isSelect => {
        if(!isSelect) return;

        let style = {
          fontWeight: 'bold',
          backgroundColor: '#4efcd8'
        };

        return style;
      }

    return(
      <li style={getStyle(this.props.isSelected)} onClick={this.handleClick}>
      {this.props.name} {this.props.phone}
      </li>
    );
  }

}

export default ContactInfo;
