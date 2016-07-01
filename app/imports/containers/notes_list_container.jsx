import React from 'react' 
import { createContainer } from 'meteor/react-meteor-data'
import { Count } from 'meteor/tmeasday:publish-counts'

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

	    notesCount = subReady? Counts.get('note_count') : null
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
      //Here we are setting props to be used in the List component below depending on if a user is signed in or not, ie if currentUser is truthy or not.
      addItemPlaceholder = props.currentUser? "Type something and hit return to add a note..." : "New Note..."
    , addItem = props.currentUser? <SingleFieldSubmit handleSubmit={handleCreate} placeholder={addItemPlaceholder} /> : null
    , deleteItem = props.currentUser? true : false

    , linkItem = props.currentUser? true : false

    , displayEmptyListMsg = () => {
        const
           msg =  "Please sign in or register to add notes."
        ,  msgBlock = <li className="helper-full-width help-text">{msg}</li>
        ,  displayMsg = notesCount === 0 && props.currentUser === null

        return displayMsg? msgBlock : null
    }
    , list = <List collection={notes} addItem={addItem} linkRoute={"noteDetails"} deleteItem={deleteItem} linkItem={linkItem} handleDelete={handleDelete} itemCount={notesCount} displayEmptyListMsg={displayEmptyListMsg} />


		//This is where we return, or make available data to child components. In this case, we are returning a list component with all the props set.
		//The single token object syntax (eg 'subReady') is a feature of ES6, and is shorthand for 'token:token' eg 'subReady:subReady'  
	  return {
      component: list,
      subReady
	  }
  },
  //We are wrapping this container around a "loading wrapper" which will display a loading animation until data is ready to be displayed, and will then display the component we are returning.
  LoadingWrapper
)

//NEXT: Header over to the /imports/components/utility/loading_wrapper.jsx
