import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { mount } from 'react-mounter'

//A page component. 
const Homepage = props => <div>The Homepage. We now have access to top-level props (eg user data here.)</div>

//A minimal app component.
const App = props => props.page(props)

//Our top-level app container
const AppContainer = createContainer(() => {
  return {
    reactiveData: "A reactive data source" 
  }
},
App)

//Putting it all together
FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {    
      page: props => <Homepage {...props} />
    })
  }
})
