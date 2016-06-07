import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { ContentBlock } from '../content/content_block'
import { ClickToEditContainer } from '../forms/click_to_edit_container'
import { EditablePageTitle } from '../content/editable_page_title'
import { EditableContent } from '../content/editable_content'
import { LoadingFeedback } from '../utility/loading_feedback'
import { IconBtn } from '../buttons/icon_btn'


export const NoteDetailsPage = (props) => {

	const
    handleBackBtnClick = () => history.back()
    ,
    backBtn = <IconBtn icon="arrow_back" handleClick={handleBackBtnClick} />
    ,
	  displayEditableComponent = (clickableComponent, contentValue, field, multiline) => <ClickToEditContainer
	      clickableComponent={clickableComponent}
	      field={field}
	      contentValue={contentValue}
	      handleUpdates={props.handleUpdateNote}
	      multiline={true}
	      {...props}
	    />

  if (props.subsReady){

  	const
  	  noteTitleComponent = <PageTitle title={props.note.title} />,
	    noteContentComponent = <ContentBlock contentValue={props.note.content} />

	  return <div id="app-container" className="l-app-full-height l-app-centered">
           <AppHeader leftCol={backBtn} middleCol={displayEditableComponent(noteTitleComponent, props.note.content, "title", false)} />
           <div id="main-content">
           {displayEditableComponent(noteContentComponent, props.note.content, "content", true)}
           </div>
         </div>

  } else {
     return <div id="app-container" className="l-app-full-height l-app-centered">
             <LoadingFeedback />
           </div>
  }
}