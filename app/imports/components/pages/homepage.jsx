import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { SingleFieldSubmit } from '../forms/single_field_submit'
import { List } from '../lists/list'
import { LoadingFeedback } from '../utility/loading_feedback'

export const Homepage = (props) => {

	const
	  pageTitle = <PageTitle title={"My Notes App"} />
	  ,
	  displayList = () => props.subsReady? <List collection={props.notes} {...props} /> : <LoadingFeedback />


  return <div id="app-container" className="l-app-full-height l-app-centered">
           <AppHeader middleCol={pageTitle} />
           <div id="main-content">
             <SingleFieldSubmit
               handleSubmit={props.handleCreateNote}
               placeholder={"New Note..."}
             />
            {displayList()}
           </div>
         </div>	
}


