import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Note } from '../../collections/notes'
import { App } from '../app'

export default createContainer(
	() => {
		
		const
			sub = Meteor.subscribe('notes.list')
			,
	    notes = sub.ready()? Note.find({}, { sort: { updatedAt: -1} }).fetch() : []
	    ,
		  handleCreateNote = (title) => {
		    Meteor.call('note.create', title, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }
		  ,
		  handleDeleteNote = (note) => {
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
	  	subsReady: sub.ready(),
      placeholder: "New Note...",
      linkItem: true,
      linkRoute: "noteDetails",
      deleteItem: true
	  }
  },
  App
)