/** @jsx React.DOM */

var React   = require('react');
var Profile = require('./Profile.jsx');

React.renderComponent(
    <Profile
        username="Simon"
        bio="My name is Simon. I make websites"
        avatar="img/simon.jpg"
    />,
    document.getElementById('root')
);
