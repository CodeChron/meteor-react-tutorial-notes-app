import React from 'react'
import { Loading } from './loading'

export const LoadingWrapper = props => props.subReady? props.component :  <Loading />

LoadingWrapper.propTypes = {
  component: React.PropTypes.object.isRequired,
  subReady: React.PropTypes.bool.isRequired
}
