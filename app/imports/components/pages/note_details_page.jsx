import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { ClickToEdit } from '../forms/click_to_edit'
import { AutoSaveInput } from '../forms/auto_save_input'
import { ContentBlock } from '../content/content_block'
import { IconBtn } from '../buttons/icon_btn'
import { LoadingWrapper } from '../utility/loading_wrapper'

export const NoteDetailsPage = props => {

	const
    backBtn = <IconBtn icon="arrow_back" handleClick={() => history.back()} />
  ,  
    noteTitleValue = props.subReady? props.note.title : ""
  ,
    noteContentValue = props.subReady? props.note.content : ""
  ,
    pageTitle = <PageTitle title={noteTitleValue} />
  ,
    pageContent = <ContentBlock contentValue={noteContentValue} useMarkdown={true} emptyMsg={"Empty Note :-/"} />
  ,
    editableNoteTitle = <ClickToEdit
      component={pageTitle}
      field={"title"}
      contentValue={noteTitleValue}
      handleUpdates={props.handleUpdateNote}
      {...props}
    />
  ,
	  editableNoteContent = <ClickToEdit
      component={pageContent}
      field={"content"}
      contentValue={noteContentValue}
      handleUpdates={props.handleUpdateNote}
      multiline={true}
      {...props}
	  />


  return <div id="app-container">
          <AppHeader 
            leftCol={backBtn}
            middleCol={props.subReady? editableNoteTitle : null}
          />
          <div id="main-content">
           {editableNoteContent}
          </div>
        </div>
}