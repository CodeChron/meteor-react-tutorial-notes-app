import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Class } from 'meteor/jagi:astronomy'


//Here we are creating a collection - just with this one line, we can conduct db operations. It's one of the great examples of the power of Meteor.
const Notes = new Mongo.Collection('notes')

//By default a Mongo db collection does not impose any type of structure.  I can insert a value into a field named 'foo' and if the field doesn't exist, Mongo will just create it.  By using this package, Astronomy - URL - we can explicitly model our data.  There is much more, like validation and other niceties.

export const Note = Class.create({
	name:        'Note',
	collection:   Notes,
	fields: {
    title:   String,
    content: {
      type:    String,
      default: ''
    },
    updatedAt: Date 
  }
})


//Here, we are defining the db operations that are supported for Notes.  We can insert, update and delete a note. (We can also view notes - see publications)
Meteor.methods({

  //The naming of these methods are purely a convention, ie we could call this 'foo' if we wanted.  However, it's key to have a good naming convention here, since the Meteor.methods is not specific to Notes. In other words, if were to just call this the 'create' method, that could become a problem if we had another collection and also wanted a create method there as well. Therefore we prefix it with the collection name to ensure uniqueness
	'note.create': title => {

      const note = new Note()
			note.set({
			  title,
			  updatedAt: new Date()
			})
			note.save()
			return note
  }
  ,
	'note.update': note => {
			note.set({
			  updatedAt: new Date()
			})
			note.save()
			return note
  }
  ,
	'note.delete': id => Note.remove(id)
})