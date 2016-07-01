import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

const App = props => props.page(props)

export const AppContainer = createContainer(() => {
	const
	  currentUserData = Meteor.subscribe("currentUser")
    currentUser = currentUserData.ready()? Meteor.user() : null

  return {
	  currentUser
  }
},
App)
