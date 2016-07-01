import React from 'react'
import ReactDOM from 'react-dom'
import { Blaze } from 'meteor/blaze'

export class LoginButtons extends React.Component{
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.renderWithData(Template.loginButtons, {align: this.props.align},
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount(){
    Blaze.remove(this.view);
  }

  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
}

LoginButtons.propTypes = {
  align: React.PropTypes.string
}

LoginButtons.defaultProps = {
  align: "left"
}