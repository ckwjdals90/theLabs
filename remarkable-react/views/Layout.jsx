// the main Route component where all nested Route components will be rendering within
const React = require('react');
const Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'Layout',
  _handleClick: function() {
    alert();
  },
  render: function() {
    const custom = this.props.custom
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
