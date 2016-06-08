import React from 'react'

export const AppHeader = (props) => {

	return  <div id="app-header" className="l-flex-row l-flex-centered l-flex-vertical-middle t-inverted">
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