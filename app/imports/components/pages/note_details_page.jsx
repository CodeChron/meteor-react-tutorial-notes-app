import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { EditableContent } from '../content/editable_content'
import { LoadingFeedback } from '../utility/loading_feedback'

export const NoteDetailsPage = (props) => {

	const
	  pageTitle = props.subsReady? <PageTitle title={props.note.title} /> : null,
	  noteContent = () => props.subsReady? <EditableContent contentValue={props.note.content} /> : <LoadingFeedback />


  return <div id="app-container" className="l-app-full-height l-app-centered">
           <AppHeader middleCol={pageTitle} />
           <div id="main-content">
           {noteContent()}
           </div>
         </div>	
}
