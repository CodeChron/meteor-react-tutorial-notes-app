import React from 'react'

export const AppHeader = (props) => {

	return  <div className="flex-row-centered">
	          <div className="flex-left-right-icons">{props.leftCol}</div>
	          <div classNbame="flex-main-content">{props.middleCol}</div>
	          <div className="flex-left-right-icons">{props.rightCol}</div>
	        </div>
}

AppHeader.propTypes = {
  leftCol: React.PropTypes.object,
  middleCol: React.PropTypes.object,
  rightCol: React.PropTypes.object
}