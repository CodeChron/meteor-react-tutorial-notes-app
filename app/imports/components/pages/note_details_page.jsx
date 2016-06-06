import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'

export const NoteDetailsPage = (props) => {

	const pageTitle = props.subsReady? <PageTitle title={props.note.title} /> : null

  return <div id="app-container" className="l-app-full-height l-app-centered">
           <AppHeader middleCol={pageTitle} />
           <div id="main-content">
           {"Note details content."}
           </div>
         </div>	
}
