//Here we see examples of importing packages.  By doing this, we gain access to some of the package's functionality in this file, by way of the token inside the curly braces. (Eg. we can then write things like FlowRouter.route...)
//To import Meteor packages, we need to use the 'pseudo-global' prefix 'meteor/'
import { FlowRouter } from 'meteor/kadira:flow-router'

//Here we are importing an npm package.  For those, there is no need for a prefix. The lack of curly braces tells us we are importing the default module exported from the 'react' package.
import React from 'react'
import { mount } from 'react-mounter'

//Here we are importing 'modules' exported from other files. It may seem like a lot of work to have to import everything, but the benefits are significant. A HUGE advantage is that anyone can now look at a file and trace the source of any function, object, etc., which is great both for debugging and for people who are new to a project.

//Here are are importing a reactive data container.  Head over to /imports/containers/app_container.jsx to learn more
import { AppContainer } from '/imports/containers/app_container'
import { NoteDetailsContainer } from '/imports/containers/note_details_container'
import { Homepage } from '/imports/components/pages/homepage'

//Here we are defining the 'root' route, or the default view of the app.
FlowRouter.route('/', {
  name: 'homepage',
  action() {

    //Inside the action() method, we tell FlowRouter what it should do when users access this route.  Because we are using React, we need to use the 'mount' method (imported above from 'react-mounter') to render React components.  The mount methods takes two parameters: a 'layout' and a collection of 'regions'.  For our 'layout' we are using the "pass-through" App we just created above.
    mount(AppContainer, {

      //Here we are defining the region and its associated content for this route.  We are naming the region 'page' since we want everything to be enclosed in a single component. The component that is being rendered is the "Homepage" component.  The 'props => ' arrow function allows us to pass in attributes from a parent into this component. Notice the use of "...props" which effectively passes along all props that are passed to it into the component.  It is the '...' part that does the magic here. To learn more, read about ES6 spread operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    
      page: props => <Homepage {...props} />
      //The above <Homepage ... /> part might look funny. This is JSX syntax and allows us to write HTML-like syntax.  The react package we imported translates this into JavaScript.
    })

    //NEXT: head over to the homepage component: /imports/components/pages/homepage.jsx
  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetails',
  action() {
    mount(AppContainer, {
      page: props => <NoteDetailsContainer {...props} />
    })
  }
})