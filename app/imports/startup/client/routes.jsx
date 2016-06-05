import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
import HomepageContainer from '/imports/components/containers/homepage_container'
import { Homepage } from '/imports/components/pages/homepage'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(HomepageContainer, {
      page: (props) => <Homepage {...props} />
    })
  }
})