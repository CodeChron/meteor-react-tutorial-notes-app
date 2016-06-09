import React from 'react'
import { IconBtn } from './icon_btn'

export const DeleteBtn = props => {

  const handleDelete = (item, msg, handler) => {
    const confirmDelete = confirm(msg)
    if (confirmDelete) { handler }
  }

  return <IconBtn handleClick={()=> handleDelete(props.itemToDelete, props.confirmMsg, props.handleDelete(props.itemToDelete))}
            {...props}
          />
}

DeleteBtn.propTypes = {
  itemToDelete:   React.PropTypes.object.isRequired,
	handleDelete:   React.PropTypes.func.isRequired,
  confirmMsg:     React.PropTypes.string,
}

DeleteBtn.defaultProps = {
  icon:        "delete",
  title:       "Delete...",
  confirmMsg:  "Really delete this?"
}