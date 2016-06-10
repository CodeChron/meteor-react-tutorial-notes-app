import React from 'react'

//This is our top-level React component. All this component does is to pass in the 'props' object returned from the data container into a region ('page' - see the ----> arrow below) that correponds to what we named it in our route, and then continuing to pass in the props as an argument.  The 'page' region then passes that into the page-specific component.

//Why are we doing this?  Well, because FlowRouter requires that you have a top-level 'layout' which you wrap around page-specific regions. This is a model that is designed more for Template-based UI frameworks, like Blaze, and doesn't really jive with the React model. Therefore, we basically make this part as tiny as possible and just have it pass on data.

export const App = (props) => props.page(props)


// 'Copied' from the routes file, for reference
// FlowRouter.route('/notes/:_id', {
//   name: 'noteDetails',
//   action() {
//     mount(NoteDetailsContainer, {
// ---->  page: (props) => <NoteDetailsPage {...props} />
//     })
//   }
// })
