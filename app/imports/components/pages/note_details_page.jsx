//REFACTOR: this should get the id param and pass into the note details container

import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { IconBtn } from '../buttons/icon_btn'
// import { NoteTitleContainer } from '../containers/note_title_container'

export const NoteDetailsPage = props => {

	const
    backBtn = <IconBtn icon="arrow_back" handleClick={() => history.back()} />
  ,
    pageTitle = <PageTitle title={props.subReady? props.note.title : ""} />
  // ,
	 //  editableComponent = (clickableComponent, contentValue, field, multiline) => <ClickToEdit
	 //      clickableComponent={clickableComponent}
	 //      field={field}
	 //      contentValue={contentValue}
	 //      handleUpdates={props.handleUpdateNote}
	 //      multiline={multiline}
	 //      {...props}
	 //    />
  // ,
  //   displayEditableComponent = <LoadingWrapper subsReady={props.subsReady} component={editableComponent} />

  // if (props.subsReady){

  	// const
  	//   noteTitleComponent = <PageTitle title={props.note.title} />
    // ,
	    // noteContentComponent = <ContentBlock contentValue={props.note.content} emptyMsg={"Empty Note"} {...props} />

	 //  return <div id="app-container">
  //            <AppHeader leftCol={backBtn} middleCol={displayEditableComponent(noteTitleComponent, props.note.title, "title", false)} />
  //              <div id="main-content">
  //                {displayEditableComponent(noteContentComponent, props.note.content, "content", true)}
  //            </div>
  //          </div>

  // } else {
    
     return <div id="app-container">
              <AppHeader 
                leftCol={backBtn}
                middleCol={pageTitle}
              />
              <div id="main-content">
               {"Note details"}
              </div>
            </div>
  // }
}

 // middleCol={displayEditableComponent(noteTitleComponent, props.note.title, "title", false)} 