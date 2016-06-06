import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Class } from 'meteor/jagi:astronomy'

const Notes = new Mongo.Collection('notes')

export const Note = Class.create({
	name: 'Note',
	collection: Notes,
	fields: {
    title: String,
    content: {
      type: String,
      default: ''
    },
    updatedAt: Date 
  }
})

Meteor.methods({

	'note.create': (title) => {
      const note = new Note()
			note.set({
			  title,
			  updatedAt: new Date()
			})
			note.save()
			return note
  }
  ,

	'note.delete': (id) => Note.remove(id)
  

})