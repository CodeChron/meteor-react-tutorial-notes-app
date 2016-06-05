import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
import { App } from '/imports/components/app'
import HomepageContainer from '/imports/components/containers/homepage_container'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(App, {
      page: (props) => <HomepageContainer {...props} />
    })
  }
})