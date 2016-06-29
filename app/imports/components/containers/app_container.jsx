//THIS CAN BE REMOVED

//This is where we connect Meteor's real-time reactive data sources with our React components. To use it, we need to install both a Meteor package: 'react-meteor-data', and an npm package: 'react-addons-pure-render-mixin'
// import { createContainer } from 'meteor/react-meteor-data'

//Here, we are importing our MongoDb collection and a data schema.  Head over there to check that out and then come back here: /imports/collections/note.js and then come back here. (Yes, I know you are already inside another return loop to the routes page -  Inception anyone? https://www.youtube.com/watch?v=7yshUmxuEjE)
// import { Note } from '../../collections/notes'

//Here, we are importing a 'layout' component.  In our case, that component simply passes along data. Follow the import path and check it out.
// import { App } from '../app'

// export const App = props => props.page(props)
//Here is an example of a default module export.  When importing this you would not use curly braces and you can name it anything you want on import.
// export const AppContainer = createContainer(() => {

// 		const

//   },
//   App
// )

// export { AppContainer }

//NEXT: return to the routes file.


//This is our top-level React component. All this component does is to pass in the 'props' object returned from the data container into a region ('page' - see the ----> arrow below) that correponds to what we named it in our route, and then continuing to pass in the props as an argument.  The 'page' region then passes that into the page-specific component.

//Why are we doing this?  Well, because FlowRouter requires that you have a top-level 'layout' which you wrap around page-specific regions. This is a model that is designed more for Template-based UI frameworks, like Blaze, and doesn't really jive with the React model. Therefore, we basically make this part as tiny as possible and just have it pass on data.

// export const App = (props) => props.page(props)


// 'Copied' from the routes file, for reference
// FlowRouter.route('/notes/:_id', {
//   name: 'noteDetails',
//   action() {
//     mount(NoteDetailsContainer, {
// ---->  page: (props) => <NoteDetailsPage {...props} />
//     })
//   }
// })
