import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'

export const Homepage = props => {

	const pageTitle = <PageTitle title={"A Notes App"} />

  const signedInMsg = props.currentUser? "You are signed in." : "You are not signed in."

  return <div id="app-container">
           <AppHeader middleCol={pageTitle} rightCol={props.loginButtons} />
           <div id="main-content">
             {signedInMsg}
           </div>
         </div>	
}


