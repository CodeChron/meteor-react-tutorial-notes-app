//Here we see examples of importing packages...

//By importing 'mount', for example, we can then call the mount() function.

import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//Here we are importing 'modules' exported from other files
//The reason for having curly braces or not
// It may seem like a lot of work to have to import everything, but that is only the case in the beginning.  A HUGE advantage is that anyone can now look at a file and trace the source of any function or objects, variables, etc., which is great both for debugging and for people who are new to a projectd
//In previous versions of Meteor, instead had magic globals

//NEXT: check out the homepage container, then return to this page

import HomepageContainer from '/imports/components/containers/homepage_container'
import NoteDetailsContainer from '/imports/components/containers/note_details_container'
import { Homepage } from '/imports/components/pages/homepage'
import { NoteDetailsPage } from '/imports/components/pages/note_details_page'


//Here we are defining the homepage route.


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    //The 'mount' method is specific to using React with FlowRouter.

    mount(HomepageContainer, {
      // Explain what is happening here: we have a data container. The data container returns reactive data and other attributes we can set in the form of a 'props' object
      //Then, we pass in that object as an argument when 'page(props)' gets called. (See app)
      // In turn that object gets passed into the homepage component using {...props} which effectively passes along all props that are passed to it into the component.  It is the '...' part that does the magic here. To learn more, read about ES6 spread operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator  
      page: (props) => <Homepage {...props} />
      //The above <Homepage ... /> part might look funny. This is JSX syntax and allows us to write HTML-like syntax.  The react package we imported translates this into plain JavaScript.
    })
    //  To learn more about using data with React and FlowRouter in a Meteor app, check out: http://coderchronicles.org/2016/04/15/using-data-in-meteor-with-react-and-flowrouter/

    //NEXT: head over to the homepage component
  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetails',
  action() {
    mount(NoteDetailsContainer, {
      page: (props) => <NoteDetailsPage {...props} />
    })
  }
})