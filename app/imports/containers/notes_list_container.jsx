import React from 'react'

//This is a container or "data wrapper" around our list component, in which we manage Notes list data. This is where we connect Meteor's real-time reactive data sources with our React components. To use it, we need to install both a Meteor package: 'react-meteor-data', and an npm package: 'react-addons-pure-render-mixin'
//This allows the list to be a "dumb" (and more reusable) recipient of data, and also allows us to use this container to render the same data in a different component (maybe a grid view?) 
import { createContainer } from 'meteor/react-meteor-data'

//Here, we are importing our MongoDb collection and a data schema.  Head over there to check that out and then come back here: /imports/collections/note.js and then come back here. 
import { Note } from '/imports/collections/notes'

//Here, we are importing components we will be using inside the container.
import { SingleFieldSubmit }  from '/imports/components/forms/single_field_submit'
import { List }  from '/imports/components/lists/list'
import { LoadingWrapper }  from '/imports/components/utility/loading_wrapper'

export const NotesListContainer = createContainer(props => {
		
		const
			//Here, we are creating a subcription to the 'notes.list' publication.  See /imports/collections/server/publications.js - the 'server' directory is significant. It is one of Meteor's special directories, and by naming that way we ensure that code inside that directory will only run on the server.
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
      addItem = props.currentUser? <SingleFieldSubmit handleSubmit={handleCreate} placeholder={"New Note..."} /> : null
    ,
      deleteItem = props.currentUser? true : false
    ,
      linkItem = props.currentUser? true : false


		//This is where we return, or make available data to child components. In this case, we are returning a list component with all the props set.
		//The single token object syntax (eg 'subReady') is a feature of ES6, and is shorthand for 'token:token' eg 'subReady:subReady'  
	  return {
      component: <List collection={notes} addItem={addItem} linkRoute={"noteDetails"} deleteItem={deleteItem} linkItem={linkItem} handleDelete={handleDelete} />,
      subReady

	  }
  },
  //We are wrapping this container around a "loading wrapper" which will display a loading animation until data is ready to be displayed, and will then display the component we are returning.
  LoadingWrapper
)

//NEXT: Header over to the /imports/components/utility/loading_wrapper.jsx
