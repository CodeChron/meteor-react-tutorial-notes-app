import React from 'react'

export const IconBtn = (props) =>
  <button
    onClick={props.handleClick}
    title={props.title}
    alt={props.title}
  >
    <i className="material-icons">{props.icon}</i>
  </button>

IconBtn.propTypes = {
	handleClick: React.PropTypes.func.isRequired,
	icon: React.PropTypes.string.isRequired,
	title: React.PropTypes.string
}