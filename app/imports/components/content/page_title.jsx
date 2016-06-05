import React from 'react'

export const PageTitle = (props) => <h1>{props.title}</h1>

PageTitle.propTypes = {
	title: React.PropTypes.string.isRequired
}