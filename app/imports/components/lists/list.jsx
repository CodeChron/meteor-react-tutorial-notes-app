import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { DeleteBtn }  from '../buttons/delete_btn'
import { SingleFieldSubmit }  from '../forms/single_field_submit'

export const List = props => {

	 const listFeatures = {
  	itemTitle: item => <span className="flex-main-content">{item.title}</span>,
  	addItem: args => <li><SingleFieldSubmit {...args} /></li>,
  	linkItem: (item, linkRoute) => <a href={FlowRouter.path(linkRoute , { _id: item._id })} className="flex-main-content">{item.title}</a>,
  	deleteItem: (item, handleDelete) => <DeleteBtn handleDelete={handleDelete} size={"btn-small"} itemToDelete={item} />
	}
  
  const displayList = props.collection.map((item) => 
    	<li key={item._id} className="flex-vertical-middle">
    	  {props.linkItem? listFeatures.linkItem(item, props.linkRoute) : listFeatures.itemTitle(item)}
	 	    {props.deleteItem? listFeatures.deleteItem(item, props.handleDeleteNote) : null }
    	</li>)

  return <ul className="list">
      	  {props.addItem? listFeatures.addItem(props) : null }
          {displayList}
         </ul>
}

List.propTypes = {
	collection:   React.PropTypes.array.isRequired,
	addItem:      React.PropTypes.bool,
	linkItem:     React.PropTypes.bool,
	deleteItem:   React.PropTypes.bool,
  linkRoute:    React.PropTypes.string
}

List.defaultProps = {
	addItem:      false,
	linkItem:     false,
	linkRoute:    null,
	deleteItem:   false
}