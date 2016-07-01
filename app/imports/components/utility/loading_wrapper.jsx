import React from 'react'
import { Loading } from './loading'

//this is a very simple yet useful component.  It accepts a loading animation and a component and a subsReady boolean.  The loading animation displays until subscriptions are ready.  That's it.
//If you wanted to make this component a little more fancy, you could support different animations, such as a tiny animation for smaller elements.
export const LoadingWrapper = props => props.subReady? props.component : <Loading />

LoadingWrapper.propTypes = {
  component: React.PropTypes.object.isRequired,
  subReady: React.PropTypes.bool.isRequired
}

//NEXT: head over to /imports/components/pages/note_details_page.jsx


