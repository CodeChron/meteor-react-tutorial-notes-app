import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { DeleteBtn }  from '../buttons/delete_btn'

export const List = props => {

	const listFeatures = {
  	itemTitle: item => <span className="flex-main-content">{item.title}</span>,
  	linkItem: (item, linkRoute) => <a href={FlowRouter.path(linkRoute , { _id: item._id })} className="flex-main-content">{item.title}</a>,
  	deleteBtn: (item, handleDelete) => <DeleteBtn handleDelete={handleDelete} size={"btn-small"} itemToDelete={item} />
	}
  
  const
    displayList = props.collection.map((item) => 
    	<li key={item._id} className="flex-vertical-middle">
    	  {props.linkItem? listFeatures.linkItem(item, props.linkRoute) : listFeatures.itemTitle(item)}
	 	    {props.deleteItem? listFeatures.deleteBtn(item, props.handleDelete) : null }
    	</li>)

    return <ul className="list">
        {props.displayEmptyListMsg()}
        {props.addItem? props.addItem : null }
        {displayList}
      </ul>
}

List.propTypes = {
	collection:   React.PropTypes.array.isRequired,
	addItem:      React.PropTypes.object,
	linkItem:     React.PropTypes.bool,
	deleteItem:   React.PropTypes.bool,
  linkRoute:    React.PropTypes.string
}

List.defaultProps = {
	addItem:      null,
	linkItem:     false,
	linkRoute:    null,
	deleteItem:   false
}
