import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { DeleteBtn }  from '../buttons/delete_btn'

export const List = (props) => {

	 const listFeatures = {
  	linkItem: (item) => <a href={FlowRouter.path(props.linkRoute , {_id: item._id})}>{item.title}</a>,
  	deleteItem: (item) => <DeleteBtn handleDelete={props.handleDeleteNote} itemToDelete={item} />	
	}
  
  const displayList = props.collection.map((item) => 
    	<li key={item._id}>
    	  {props.linkItem? 
	 	      listFeatures.linkItem(item)
	 	      :
	 	       item.title
	 	    }
	 	    {props.deleteItem? 
	 	      listFeatures.deleteItem(item)
	 	      :
	 	       null
	 	    }
    	</li>)

  return <ul>{displayList}</ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired,
	linkItem: React.PropTypes.bool,
	deleteItem: React.PropTypes.bool,
  linkRoute: React.PropTypes.string
}

List.defaultProps = {
	linkItem: false,
	linkRoute: null,
	deleteItem: false
}