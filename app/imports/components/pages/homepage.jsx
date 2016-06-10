import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { List } from '../lists/list'
import { LoadingFeedback } from '../utility/loading_feedback'

//This is an example of a basic React component. Yes, it does look like just a normal (ES6) JS function.  However, React is rewriting the parts that look like HTML.  It is recommended that you write most of your components like this, and only use React.Component in cases where your component has multiple states. (You should try to keep your components 'dumb' so only a minority of your components should have state.)
export const Homepage = props => {

	const
  //Here we are instantiating a PageTitle component and passing in a value for the 'title' prop.  I recommend heading over to /content/page_title to see how this corresponds to the component itself.
	  pageTitle = <PageTitle title={"My Notes App"} />
	  ,

    //Here we are creating a function that return something different depending on if subscriptions are ready or not. If subscriptions are ready, it returns a list.  If not, it returns a loading animation. If you're not familiar with this syntax, check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
	  displayList = args => args.subsReady? 
      <List
        collection={args.notes}
        placeholder={"New Note..."}
        handleSubmit={args.handleCreateNote}
        {...args}
      />
      : 
      <LoadingFeedback />

  //This what this component actually renders (or 'returns') in the UI
  //Here we are passing in the <PageTitle /> component into the AppHeader. It is good practice to pass in props as an argument in a function and not call it directly.  This makes the function more 'pure' and can also prevent 'props undefined' issues.
  return <div id="app-container">
           <AppHeader middleCol={pageTitle} />
           <div id="main-content">
             {displayList(props)}
           </div>
         </div>	
}

//NEXT: Head over to the List component /imports/components/lists/list.jsx
