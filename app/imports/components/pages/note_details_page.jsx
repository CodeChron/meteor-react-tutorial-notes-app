import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { ContentBlock } from '../content/content_block'
import { ClickToEdit } from '../forms/click_to_edit'
import { LoadingFeedback } from '../utility/loading_feedback'
import { IconBtn } from '../buttons/icon_btn'

export const NoteDetailsPage = (props) => {

	const
    handleBackBtnClick = () => history.back()
    ,
    backBtn = <IconBtn icon="arrow_back" handleClick={handleBackBtnClick} />
    ,
	  displayEditableComponent = (clickableComponent, contentValue, field, multiline) => <ClickToEdit
	      clickableComponent={clickableComponent}
	      field={field}
	      contentValue={contentValue}
	      handleUpdates={props.handleUpdateNote}
	      multiline={multiline}
	      {...props}
	    />

  if (props.subsReady){

  	const
  	  noteTitleComponent = <PageTitle title={props.note.title} />,
	    noteContentComponent = <ContentBlock contentValue={props.note.content} emptyMsg={"Empty Note"} />

	  return <div id="app-container">
           <AppHeader leftCol={backBtn} middleCol={displayEditableComponent(noteTitleComponent, props.note.title, "title", false)} />
           <div id="main-content">
           {displayEditableComponent(noteContentComponent, props.note.content, "content", true)}
           </div>
         </div>

  } else {
     return <div id="app-container" className="l-app-full-height l-app-centered">
         <div id="main-content">
             <LoadingFeedback />
          </div>
        </div>
  }
}