import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Meteor } from 'meteor/meteor'
import { Note } from '../../collections/notes'
import { App } from '../app'

export default createContainer(
	() => {
		
		const
		  noteId = FlowRouter.getParam('_id'),
		  sub = Meteor.subscribe('note.details', noteId),
			note = sub.ready()? Note.findOne({_id: noteId }) : {}
		

	  return {
	  	note,
	  	subsReady: sub.ready()
	  }
  },
  App
)