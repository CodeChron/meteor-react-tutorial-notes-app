import React from 'react'
import classNames from 'classnames'

export const IconBtn = (props) =>
  <button
    onClick={props.handleClick}
    title={props.title}
    alt={props.title}
    className={classNames('icon-btn', props.size)}
  >
    <i className="material-icons">{props.icon}</i>
  </button>

IconBtn.propTypes = {
	handleClick: React.PropTypes.func.isRequired,
	icon: React.PropTypes.string.isRequired,
	title: React.PropTypes.string,
  size:          React.PropTypes.string
}