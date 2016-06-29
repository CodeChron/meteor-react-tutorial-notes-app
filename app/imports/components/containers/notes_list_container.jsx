//This is a container or "data wrapper" around our list component, in which we manage Notes list data. This allows the list to be a "dumb" (and more reusable) recipient of data, and also allows us to use this container to render the same data in a different component (maybe a grid view?) 
import { createContainer } from 'meteor/react-meteor-data'
import { Note } from '../../collections/notes'
import { SingleFieldSubmit }  from '../forms/single_field_submit'
import { List }  from '../lists/list'
import { LoadingWrapper }  from '../utility/loading_wrapper'



export const NotesListContainer = createContainer(props => {
		
		const
			//Here, we are creating a subcription to the 'notes.list' publication.  See /imports/collections/server/publications.js - the 'server' directory is significant. It is one of Meteor's special directories, and by calling it that we ensure that the code inside that directory will only run on the server.
			sub = Meteor.subscribe('notes.list')
		,
		  //Here we are defining a boolean for checking if our subscription is ready (ie we have connected to the server publication and are receiving our real-time subscription stream)
		  subReady = sub.ready()
		,
			//Here, we are defining our collection based on if the above subscription is ready or not. By ready, we mean that a connection has been established to the reactive data source.  Until it is ready, we are simply returning an empty array. The reason we need to append the fetch() method to the end is because we want array and not a cursor. Fetch() handles that for us.
	    notes = subReady? Note.find({}, { sort: { updatedAt: -1} }).fetch() : []
	  ,
	    //Here, we are handling db operations relating to notes.  This is an interface to a Meteor db operation.  This file will run both on the client and the server side, which allows for the db operation to run 'optimistically' on the client side, but is retracted if it fails on the server side.  What this means, in terms of user experience, is that when, for example, you enter some data, you see the update on your screen immediately, because the app optimistically assumes your change will be approved on the server side.  In the unlikely event that you are doing something unapproved, the change would be reverted.
		  handleCreate = title => {
		    Meteor.call('note.create', title, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }
		,
		  handleDelete = note => {
		    Meteor.call('note.delete', note._id, (err, result) => {
          if (err) {
            console.log('error: ' + err.reason)
          }
        })
		  }
    ,
      //Here we are defining a component for an optional list feature - adding items, which we will then pass into the list component below
      addItem = <SingleFieldSubmit handleSubmit={handleCreate} placeholder={"New Note..."} />

		//This is where we return, or make available data to child components. The single token object syntax (eg 'notes') is a feature of ES6, and is shorthand for 'token:token' eg 'notes:notes'  
	  return {
	  	handleDeleteNote,
      linkItem:          true,
      deleteItem:        true,
      addItem:           true,
      component:         <List collection={notes} addItem={addItem} deleteItem={deleteItem} handleDelete={handleDelete} />,
      subReady

	  }
  },
  //We are wrapping this container around a "loading wrapper" which will display a loading animation until data is ready to be displayed, and will then display the list component
  LoadingWrapper
)