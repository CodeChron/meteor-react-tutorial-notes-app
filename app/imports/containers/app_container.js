import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { LoginButtons } from '/imports/components/accounts/login_buttons'

//This is a container or "data wrapper", where we connect Meteor's real-time reactive data sources with our React components.
//In this case, we are passing it into a minimal "App" component, that simply passes along any props we pass into it. The props that are passed in are those that are returned from this container. The only reason this is created is because we need to accomodate the structure imposed by FlowRouter, which is one targeted more towards a template-based paradigm (ie one where you have static layouts with dynamic regions) rather than a component-based paradigm, which is what we are using in the form of React, in which you have a single top-down hierarchy.  

const App = props => props.page(props)

//To clarify, this is the data container.  The second argument of createContainer() accepts the component into which data is passed.

export const AppContainer = createContainer(() => {

  //Here we providing a 'currentUser' prop that will update reactively depending on if a user is signed in.  We are also defining and returning a login ui that can be used in child components.
  return {
	  currentUser: Meteor.user(),
	  loginButtons: <LoginButtons align="right" />
  }
},
App)

//NEXT: Head back to the routes page.