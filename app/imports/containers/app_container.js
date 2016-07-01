import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

const App = props => props.page(props)

export const AppContainer = createContainer(() => {

  return {
	  currentUser: Meteor.user()
  }
},
App)
