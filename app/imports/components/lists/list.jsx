import React from 'react'

export const List = (props) => {
  
  const list_rows = props.collection.map((row) => <li key={row._id}>{row.title}</li>)

  return <ul>{list_rows}</ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired
}