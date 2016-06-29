//Here we see examples of importing packages.  By doing this, we gain access to some of the package's functionality in this file, by way of the token inside the curly braces. (Eg. we can then write things like FlowRouter.route...)
//To import Meteor packages, we need to use the 'pseudo-global' prefix 'meteor/'
import { FlowRouter } from 'meteor/kadira:flow-router'

//Here we are importing an npm package.  For those, there is no need for a prefix.
//The lack of curly braces tells us we are importing the default module exported from the 'react' package.
import React from 'react'
import { mount } from 'react-mounter'

//Here we are importing 'modules' exported from other files. It may seem like a lot of work to have to import everything, but the benefits are significant. A HUGE advantage is that anyone can now look at a file and trace the source of any function, objects, etc., which is great both for debugging and for people who are new to a project.
// import { App } from '/imports/components/containers/app_container'
// import HomepageContainer from '/imports/components/containers/homepage_container'
import { NoteDetailsContainer } from '/imports/components/containers/note_details_container'
import { Homepage } from '/imports/components/pages/homepage'

const App = props => props.page(props)

//Here we are defining the 'root' route, or the default view of the app.
FlowRouter.route('/', {
  name: 'homepage',
  action() {

    //Inside the action() method, we tell FlowRouter what it should do when users access this route.  Because we are using React, we need to use the 'mount' method (imported above from 'react-mounter') to render React components.  The mount methods takes two parameters: a 'layout' and a collection of 'regions'  Unfortunately, that model is one more suited for template-based rendering, such as Blaze, where you tend to have a fixed global wrapper and then you have regions which 'yield' to view-specific content. With React's component-based model, we want to have a single top-down hierarchy, so we need to coax FlowRouter into this model.  We do this by first replacing the 'layout' with a top-level data container.  In turn the data container does not dictate layout at all, but just passes data down to the homepage component, which effectively is the top-level container.
    //NEXT: Check out the data container at /imports/components/containers/homepage_container.js and then return here. 

    mount(App, {
      // As we saw in the container file, it return parameters and reactive data. Those values are passed down, in the form of a 'props' object, 'through' the App component into the region below. Then, we pass in that object as an argument when 'page(props)' gets called. (See the App component) In turn, that object gets passed into the homepage component using {...props} which effectively passes along all props that are passed to it into the component.  It is the '...' part that does the magic here. To learn more, read about ES6 spread operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
      //The above <Homepage ... /> part might look funny. This is JSX syntax and allows us to write HTML-like syntax.  The react package we imported translates this into plain JavaScript.
      page: props => <Homepage {...props} />
    })

    //NEXT: head over to the homepage component: /imports/components/pages/homepage.jsx
  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetails',
  action() {
    mount(App, {
      page: () => <NoteDetailsContainer />
    })
  }
})