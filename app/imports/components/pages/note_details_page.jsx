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

// use lodash to check if any subscription returns true - turn into a util
// <EditableContent contentValue={props.note.content} contentBlock={object} multiline={true - set to false by default} handleUpdates={props.handleUpdateNote} field={"title"} {...props} />
// Create a multi line text block that can be passed in to contentBlock, eg PageTitle, or ContentBlock - which is just content enclosed by divs for now. Will need to pass in the content as a separate prop? Even though it already is included with the contentBlock?