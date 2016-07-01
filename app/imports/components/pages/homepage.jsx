import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { NotesListContainer }  from '/imports/containers/notes_list_container'

//This is an example of a basic React component. Yes, it is actually just a normal (ES6) JS function.  However, React is rewriting the parts that look like HTML using React.createElement()  It is recommended that you write most of your components like this, and only use React.Component in cases where your component has state. (You should try to keep your components 'dumb' so only a minority of your components should have state.)
export const Homepage = props => {

  //Here we are instantiating a PageTitle component and passing in a value for the 'title' prop.  I recommend heading over to /content/page_title to see how this corresponds to the component itself.
	const pageTitle = <PageTitle title={"My Notes App"} />

  //This what this component actually renders (or 'returns') in the UI
  //Here we are passing in the <PageTitle /> component into the AppHeader.  Below that, we are rendering the <NotesListContainer />
  //NEXT: Head over to the /imports/containers/notes_list_container.jsx
  return <div id="app-container">
           <AppHeader middleCol={pageTitle} rightCol={props.loginButtons} />
           <div id="main-content">
             <NotesListContainer {...props} />
           </div>
         </div>	
}


