import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { EditableContent } from '../content/editable_content'
import { LoadingFeedback } from '../utility/loading_feedback'
import { IconBtn } from '../buttons/icon_btn'

export const NoteDetailsPage = (props) => {

	const
    handleBackBtnClick = () => history.back(),
    backBtn = <IconBtn
              icon="arrow_back"
              handleClick={handleBackBtnClick}
            />
    ,
	  pageTitle = props.subsReady? <PageTitle title={props.note.title} /> : null,
	  noteContent = () => props.subsReady? <EditableContent contentValue={props.note.content}  handleUpdates={props.handleUpdateNote} field={"content"} {...props} /> : <LoadingFeedback />

  return <div id="app-container" className="l-app-full-height l-app-centered">
           <AppHeader leftCol={backBtn} middleCol={pageTitle} />
           <div id="main-content">
           {noteContent()}
           </div>
         </div>	
}
