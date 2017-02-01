const React = require('react');

module.exports = React.createClass({
  _handleClick: () => {
    alert();
  },
  
  render: () => {
    return(
      <div>
        <h1>Hello World!</h1>
        <p>Isn't server-side rendering remarkable?</p>
        <button onClick={this._handleClick}>Click Me!</button>
      </div>
    )
  }
});
