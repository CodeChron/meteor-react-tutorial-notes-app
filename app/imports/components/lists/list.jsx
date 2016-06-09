import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { DeleteBtn }  from '../buttons/delete_btn'
import { SingleFieldSubmit }  from '../forms/single_field_submit'

export const List = (props) => {

	 const listFeatures = {
  	itemTitle: (item) => <span className="flex-main-content">{item.title}</span>,
  	addItem: () =>  <li><SingleFieldSubmit {...props} /></li>,
  	linkItem: (item) => <a href={FlowRouter.path(props.linkRoute , {_id: item._id})} className="flex-main-content">{item.title}</a>,
  	deleteItem: (item) => <DeleteBtn handleDelete={props.handleDeleteNote}  size={"btn-small"} itemToDelete={item} />
	}
  
  const displayList = props.collection.map((item) => 
    	<li key={item._id} className="flex-vertical-middle">
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

  return <ul className="list">
      	  {props.addItem? 
	 	        listFeatures.addItem()
	 	      :
	 	       null
	 	      }
          {displayList}
         </ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired,
	addItem: React.PropTypes.bool,
	linkItem: React.PropTypes.bool,
	deleteItem: React.PropTypes.bool,
  linkRoute: React.PropTypes.string
}

List.defaultProps = {
	addItem: false,
	linkItem: false,
	linkRoute: null,
	deleteItem: false
}