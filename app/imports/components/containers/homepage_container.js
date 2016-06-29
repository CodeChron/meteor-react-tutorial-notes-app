//This is where we connect Meteor's real-time reactive data sources with our React components. To use it, we need to install both a Meteor package: 'react-meteor-data', and an npm package: 'react-addons-pure-render-mixin'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

//Here, we are importing our MongoDb collection and a data schema.  Head over there to check that out and then come back here: /imports/collections/note.js and then come back here. (Yes, I know you are already inside another return loop to the routes page -  Inception anyone? https://www.youtube.com/watch?v=7yshUmxuEjE)
import { Note } from '../../collections/notes'

//Here, we are importing a 'layout' component.  In our case, that component simply passes along data. Follow the import path and check it out.
import { App } from '../app'

//Here is an example of a default module export.  When importing this you would not use curly braces and you can name it anything you want on import.
export default HomepageContainer = createContainer(
	() => {

		const

  },
  App
)

//NEXT: return to the routes file.