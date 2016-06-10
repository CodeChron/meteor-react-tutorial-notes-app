import { Meteor } from 'meteor/meteor'
import { Note } from '../notes'

//When publishing data to the server, you should always be specific about the fields you are publishing, to prevent unintentionally publishing, say, an internal id.  Here is an example of creating a field definition for each publication.  '1' (ie 'true') means that the field will be published.
const
  notesListFields = {
    title:     1,
    updatedAt: 1
  },
  noteDetailsFields = {
    title:     1,
    content:   1
  } 

//Here, we are using the same naming convention as with Meteor.methods.  See /imports/collections/notes.js
Meteor.publish('notes.list', function() {
  //By including a 'field' parameter in our query, the data that is published will include only the fields listed.  Without it, all fields would be published, which is basically a security risk.
  return Note.find({}, { fields: notesListFields })
})


//Here, we are technically only publishing one document.  However, you can't use findOne() to do that.  You must always publish a cursor, which is why use find() Learn more about cursors: https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/
Meteor.publish('note.details', function(id) {
  return Note.find({ _id: id }, { fields: noteDetailsFields })
})