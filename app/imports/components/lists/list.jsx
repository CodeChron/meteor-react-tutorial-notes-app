import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { DeleteBtn }  from '../buttons/delete_btn'

//This is a somewhat more advanced but still 'stateless' component
export const List = props => {

  //Here is an example of having a collection of optional component features
  //Each feature can be turned on by setting its prop to true (see 'List.propTypes' below.)
  //Doing so, will call the function corresponding to the feature name, pass in any props needed, and return the corresponding content block.
	const listFeatures = {
  	itemTitle: item => <span className="flex-main-content">{item.title}</span>,
  	linkItem: (item, linkRoute) => <a href={FlowRouter.path(linkRoute , { _id: item._id })} className="flex-main-content">{item.title}</a>,
  	deleteItem: (item, handleDelete) => <DeleteBtn handleDelete={handleDelete} size={"btn-small"} itemToDelete={item} />
	}
  
  //This is where we generate our list, using the map() method, which returns an array that will be assigned to 'displayList'  Here, we are using the ternary operator to check if a given optional feature, eg 'linkItem' has been turned on.  See the top-level container component, in which turn these features on by returning true for the corresponding props.
  const displayList = props.collection.map((item) => 
    	<li key={item._id} className="flex-vertical-middle">
    	  {props.linkItem? listFeatures.linkItem(item, props.linkRoute) : listFeatures.itemTitle(item)}
	 	    {props.deleteItem? listFeatures.deleteItem(item, props.handleDeleteNote) : null }
    	</li>)

  return <ul className="list">
      	  {props.addItem? props.addItem : null }
          {displayList}
         </ul>
}

//This is where we set the props which this component supports.  One can think of this as a mini api for this component.  A developer can quickly look at this and see how to interface with the compoenent.
List.propTypes = {
	collection:   React.PropTypes.array.isRequired,
	addItem:      React.PropTypes.object,
	linkItem:     React.PropTypes.bool,
	deleteItem:   React.PropTypes.bool,
  linkRoute:    React.PropTypes.string
}

//This is where we set default values for props.  Props for which a default value is not set will default to null.  However, for any props that are not required you shuold set a default value.
List.defaultProps = {
	addItem:      null,
	linkItem:     false,
	linkRoute:    null,
	deleteItem:   false
}

//NEXT: head over to the SingleFieldSubmit component - you should be able to find it by looking at the import statement on top.