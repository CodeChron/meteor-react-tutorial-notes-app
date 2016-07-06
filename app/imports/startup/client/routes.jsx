import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Our top-level component. Get the page "region" via props, and pass along props into the region.
const App = props => props.page

//A page component.  We pass in props from the top-level component.  However, there is currently nothing to pass in.  We can fix that by wrapping the top-level component in a (data) container.
const Homepage = () => <div>The Homepage</div>

FlowRouter.route('/', {
  name: 'homepage',
  action() {

    //Props are passed into the page using the spread operator
    mount(App, {    
      page: <Homepage />
    })
  }
})
