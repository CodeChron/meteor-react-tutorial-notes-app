import { createContainer } from 'meteor/react-meteor-data'
import { Note } from '../../collections/notes'
import { App } from '../app'

export default createContainer(
	() => {
		
		const handleCreateNote = (title) => {
			const note = new Note()
			note.set({
				title,
			  updatedAt: new Date()
			})
			note.save()
		cont  }

	  return {
	  	handleSubmit: handleCreateNote,
        placeholder: "New Note..."
	  }
  },
  App
)