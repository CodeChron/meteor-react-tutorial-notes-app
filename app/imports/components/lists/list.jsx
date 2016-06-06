import React from 'react'
import { DeleteBtn }  from '../buttons/delete_btn'

export const List = (props) => {
  
  const displayList = props.collection.map((item) => 
    	<li key={item._id}>
    	  {item.title}
    	   <DeleteBtn handleDelete={props.handleDeleteNote} itemToDelete={item} />
    	</li>)

  return <ul>{displayList}</ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired
}