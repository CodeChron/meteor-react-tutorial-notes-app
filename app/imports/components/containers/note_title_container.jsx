import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Note } from '../../collections/notes'
import { PageTitle } from '../content/page_title'
import { ClickToEdit } from '../forms/click_to_edit'
import { LoadingWrapper } from '../utility/loading_wrapper'

export const NoteTitleContainer = createContainer(props => {
		
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
		,
		  noteTitle = <PageTitle title={subReady? note.title : ""} />

	  return {
	  	subReady,
	  	component: <ClickToEdit
	      clickableComponent={noteTitle}
	      field={"title"}
	      contentValue={subReady? note.title : ""}
	      handleUpdates={handleUpdateNote}
	    />
	  }
  },
  LoadingWrapper
)

