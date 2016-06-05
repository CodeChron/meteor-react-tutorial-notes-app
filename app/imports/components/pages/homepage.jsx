import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'

export const Homepage = (props) => {

	const pageTitle = <PageTitle title={"My Notes App"} />

  return <div id="app-container" className="l-app-full-height l-app-centered">
           <AppHeader middleCol={pageTitle} />
           <div id="main-content">
             {"Homepage content goes here"}
           </div>
         </div>	
}


