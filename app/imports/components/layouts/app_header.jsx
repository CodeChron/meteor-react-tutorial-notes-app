import React from 'react'

export const AppHeader = (props) => {

	return  <div className="l-flex-row-centered">
	          <div className="l-flex-icon-column">{props.leftCol}</div>
	          <div className="l-flex-main-content">{props.middleCol}</div>
	          <div className="l-flex-icon-column">{props.rightCol}</div>
	        </div>
}

AppHeader.propTypes = {
  leftCol: React.PropTypes.object,
  middleCol: React.PropTypes.object,
  rightCol: React.PropTypes.object
}