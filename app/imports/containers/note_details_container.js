import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Note } from '/imports/collections/notes'
import { NoteDetailsPage } from '../components/pages/note_details_page'

export const NoteDetailsContainer = createContainer(props => {
		
		const
		  sub = Meteor.subscribe('note.details', props.noteId)
		,
      subReady = sub.ready()
    ,
			note = subReady? Note.findOne({ _id: props.noteId }) : {}
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