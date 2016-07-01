import React from 'react'
import classNames from 'classnames'

export const AppHeader = props => {

	const
	  hasLeftCol = props.leftCol? "helper-left-padding" : null
	,
	  middleColStyling = classNames("flex-main-content", hasLeftCol) 

	return  <div id="app-header" className="flex-row flex-vertical-middle color-inverted">
	          <div>{props.leftCol}</div>
	          <div className={middleColStyling}>{props.middleCol}</div>
	          <div>{props.rightCol}</div>
	        </div>
}

AppHeader.propTypes = {
  leftCol: React.PropTypes.object,
  middleCol: React.PropTypes.object,
  rightCol:  React.PropTypes.object
}
