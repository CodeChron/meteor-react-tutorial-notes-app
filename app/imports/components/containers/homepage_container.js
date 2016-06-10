//This is where we connect Meteor's real-time reactive data sources with our React components. To use it, we need to install both a Meteor package: 'react-meteor-data', and an npm package: 'react-addons-pure-render-mixin'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

//Here, we are importing our MongoDb collection and a data schema.  Head over there to check that out and then come back here: /imports/collections/note.js and then come back here. (Yes, I know you are already inside another return loop to the routes page -  Inception anyone? https://www.youtube.com/watch?v=7yshUmxuEjE)
import { Note } from '../../collections/notes'

//Here, we are importing a 'layout' component.  In our case, that component simply passes along data. Follow the import path and check it out.
import { App } from '../app'

//Here is an example of a default module export.  When importing this you would not use curly braces and you can name it anything you want on import.
export default createContainer(
	() => {

		const
			//Here, we are creating a subcription to the 'notes.list' publication.  See /imports/collections/server/publications.js - the 'server' directory is significant. It is one of Meteor's special directories, and by calling it that we ensure that the code inside that directory will only run on the server.
			sub = Meteor.subscribe('notes.list')
			,
			//Here, we are defining our collection based on if the above subscription is ready or not. By ready, we mean that a connection has been established to the reactive data source.  Until it is ready, we are simply returning an empty array.
			//The reason we need to append the fetch() method to the end is because we want array and not a cursor. Fetch() handles that for us.
	    notes = sub.ready()? Note.find({}, { sort: { updatedAt: -1} }).fetch() : []
	    ,
	    //Here, we are creating an interface to a Meteor db operation.  This file will run both on the client and the server side, which allows for the db operation to run 'optimistically' on the client side, but is retracted if it fails on the server side.  What this means, in terms of user experience, is that when, for example, you enter some data, you see the update on your screen immediately, because the app optimistically assumes your change will be approved on the server side.  In the unlikely event that you are doing something unapproved, the change would be reverted.
		  handleCreateNote = title => {
		    Meteor.call('note.create', title, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }
		  ,
		  handleDeleteNote = note => {
		    Meteor.call('note.delete', note._id, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }

		//This is where we return, or make available data to child components, the first of which is the App component you see below.  The single token object syntax (eg 'notes') is a feature of ES6, and is shorthand for 'token:token' eg 'notes:notes'  
	  return {
	  	notes,
	  	handleCreateNote,
	  	handleDeleteNote,
	  	subsReady:         sub.ready(),
      placeholder:       "New Note...",
      linkItem:          true,
      linkRoute:         "noteDetails",
      deleteItem:        true,
      addItem:           true
	  }
  },
  App
)

//NEXT: return to the routes file.