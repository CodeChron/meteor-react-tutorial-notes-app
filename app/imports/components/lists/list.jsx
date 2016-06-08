import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { DeleteBtn }  from '../buttons/delete_btn'

export const List = (props) => {

	 const listFeatures = {
  	itemTitle: (item) => <span className="l-flex-main-content">{item.title}</span>,
  	linkItem: (item) => <a href={FlowRouter.path(props.linkRoute , {_id: item._id})} className="l-flex-main-content">{item.title}</a>,
  	deleteItem: (item) => <span className="l-flex-icon-column"><DeleteBtn handleDelete={props.handleDeleteNote} size={"btn-small"} itemToDelete={item} /></span>
	}
  
  const displayList = props.collection.map((item) => 
    	<li key={item._id} className="l-flex-vertical-middle">
    	  {props.linkItem? 
	 	      listFeatures.linkItem(item)
	 	      :
	 	       listFeatures.itemTitle(item)
	 	    }
	 	    {props.deleteItem? 
	 	      listFeatures.deleteItem(item)
	 	      :
	 	       null
	 	    }
    	</li>)

  return <ul className="l-list">{displayList}</ul>
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