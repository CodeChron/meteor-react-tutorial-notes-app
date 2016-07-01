import React from 'react'
import { LoginButtons } from '../accounts/login_buttons'

export const AppHeader = props => {

	return  <div id="app-header" className="flex-row flex-vertical-middle color-inverted">
	          <div className="flex-main-content">{props.middleCol}</div>
	          <div><LoginButtons align="right" /></div>
	        </div>
}

AppHeader.propTypes = {
  middleCol: React.PropTypes.object,
  rightCol:  React.PropTypes.object
}