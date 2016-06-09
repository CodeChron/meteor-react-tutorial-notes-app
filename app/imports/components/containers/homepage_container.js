//This is where we connect Meteor's real-time reactive data sources with our React components.
//To use it, we need to install both a Meteor package: 'react-meteor-data', and an npm package: 'react-addons-pure-render-mixin'

import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'

//Here, we are importing our MongoDb collection and data schema.  Head over there first and then come back here. (Yes, I know you are already inside another return loop to the routes page - Inception anyone?)
import { Note } from '../../collections/notes'

//
import { App } from '../app'

export default createContainer(
	() => {
		
		const
			sub = Meteor.subscribe('notes.list')
			,
	    notes = sub.ready()? Note.find({}, { sort: { updatedAt: -1} }).fetch() : []
	    ,
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