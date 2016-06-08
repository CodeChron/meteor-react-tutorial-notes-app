import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { List } from '../lists/list'
import { LoadingFeedback } from '../utility/loading_feedback'

export const Homepage = (props) => {

	const
	  pageTitle = <PageTitle title={"My Notes App"} />
	  ,
	  displayList = () => props.subsReady? 
      <List
        collection={props.notes}
        placeholder={"New Note..."}
        handleSubmit={props.handleCreateNote}
        {...props}
      />
      : 
      <LoadingFeedback />

  return <div id="app-container">
           <AppHeader middleCol={pageTitle} />
           <div id="main-content">

           {displayList(props)}
           </div>
         </div>	
}

