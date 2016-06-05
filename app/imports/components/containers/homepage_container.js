import { createContainer } from 'meteor/react-meteor-data'
import { Note } from '../../collections/notes'
import { App } from '../app'

export default createContainer(
	() => {
		
		// const handleCreateNote = (title) => {
		// 	Meteor.call('/note/create', title, (err, result) => {
  //       if (err) {
  //         console.log('error: ' + err.reason)
  //       }
  //     })
	 //  }

	  return {
      
      placeholder: "New Note..."
	  }
  },
  App
)