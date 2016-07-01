import React from 'react'

export const AppHeader = props => {

	return  <div id="app-header" className="flex-row flex-vertical-middle color-inverted">
	          <div>{props.leftCol}</div>
	          <div className="flex-main-content">{props.middleCol}</div>
	          <div>{props.rightCol}</div>
	        </div>
}

AppHeader.propTypes = {
  leftCol: React.PropTypes.object,
  middleCol: React.PropTypes.object,
  rightCol:  React.PropTypes.object
}