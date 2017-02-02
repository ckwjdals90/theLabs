// the main Route component where all nested Route components will be rendering within
const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;

// instead of directly exporting the component, assign it to a variable
var Layout = React.createClass({
  // displayName: 'Layout',   // the variable name is the component's default displayName, therefore this redundant property can be removed
  _handleClick: function() {
    alert();
  },
  render: function() {
    let custom = this.props.custom
    console.log("CUSTOM@@@@@@@@@@@@@@@@@:", custom);
    return (
      <html>
        <head>
          <title>{custom.title}</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <h1>{custom.title}</h1>
          <p>Isn't server-side rendering remarkable?</p>
          <button onClick={this._handleClick}>Click Me</button>
          {/* this special prop allows it yo reference the component's children elements */}
          {this.props.children}
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(custom)
          }} />
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
});

const wrapper = connect(
  function(state) {
    return { custom: state };
  }
);

module.exports = wrapper(Layout);
