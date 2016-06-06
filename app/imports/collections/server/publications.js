import { Meteor } from 'meteor/meteor'
import { Note } from '../notes'

const
  notesListFields = {
    title: 1,
    updatedAt: 1
  },
  noteDetailsFields = {
    title: 1,
    content: 1
  } 

Meteor.publish('notes.list', function() {
  return Note.find({}, { fields: notesListFields})
})

Meteor.publish('note.details', function(id) {
  return Note.find({_id: id }, { fields: noteDetailsFields})
})