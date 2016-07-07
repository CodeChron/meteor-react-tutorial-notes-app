import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { LoginButtons } from '/imports/components/accounts/login_buttons'

//This is the component into which data is passed
const App = props => props.page(props)

export const AppContainer = createContainer(() => {
  //Here, we have access to Meteor data
  return {
	  currentUser: Meteor.user(),
	  loginButtons: <LoginButtons align="right" />
  }
},
App)
