import React from 'react'
import { AppHeader } from '../layouts/app_header'
import { PageTitle } from '../content/page_title'
import { List } from '../lists/list'
import { LoadingFeedback } from '../utility/loading_feedback'

//This is an example of a basic React component
// Yes, it does look like just a normal (ES6) JS function.  However, React is rewriting the parts that look like HTML
//We can use this for 'stateless' components

export const Homepage = props => {

	const
  //Here we are instantiating a PageTitle component and passing a value for the 'title' prop.  I recommend heading over to /content/page_title to see how this corresponds to the component itself.
	  pageTitle = <PageTitle title={"My Notes App"} />
	  ,

    //Here we are creating a function that return something different depending on if subscriptions are ready or not. If subscriptions are ready, it returns a list.  If not, it returns a loading animation. If you're not familiar with this syntax, check out: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

    //TODO: pass in listProps
    // You could have done this: displayList = () => props.subsReady? - DON'T, this is bad. You are calling a variable directly that is outside the scope of the function rather than passing it in as an argument. Avoid doing so when possible.
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
  //Here we are passing in the <PageTitle /> component into the AppHeader
 //TODO: refactor to pass in props here - it is good practice to pass in props as an argument in a function and not call it directly.  This makes the function more 'pure' and can also prevent 'props undefined' issues
//It also means we do not actually pass in props
  return <div id="app-container">
         
           <AppHeader middleCol={pageTitle} />
           <div id="main-content">
             {displayList(props)}
           </div>
         </div>	
}

//This is what React actually converts this to... see https://babeljs.io/docs/plugins/transform-react-jsx/
