import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Meteor } from 'meteor/meteor'
import { Note } from '../../collections/notes'
import { NoteDetailsPage } from '../pages/note_details_page'

export const NoteDetailsContainer = createContainer(() => {
		
		const
		  noteId = FlowRouter.getParam('_id')
		,
		  sub = Meteor.subscribe('note.details', noteId)
		,
      subReady = sub.ready()
    ,
			note = subReady? Note.findOne({ _id: noteId }) : {}
			,
			handleUpdateNote = (collection, field, value) => {
			  const doc = {}
			  doc[field] = value
			  collection.set(doc)
		
	      Meteor.call('note.update', collection, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }

	  return {
	  	note,
	  	handleUpdateNote,
	  	subReady
	  }
  },
  NoteDetailsPage
)