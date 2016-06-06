import { Meteor } from 'meteor/meteor'
import { Note } from '../notes'

const
  notesListFields = {
    title: 1,
    updatedAt: 1
  }

Meteor.publish('notes.list', function() {
  return Note.find({}, { fields: notesListFields})
})