import { tran } from 'localization/i18n'
import _ from 'lodash'
import React, { Component } from 'react'
import { Divider, Tab } from 'semantic-ui-react'
import styled from 'styled-components'
import { images } from 'themes/images'
import MenuItem from '../../components/MenuItem/MenuItem'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey'
]

const panes = [
  {
    menuItem: ' LATEST',
    render: () => (
      <MenuItem
        title={tran('titleTab1')}
        describeTitle={tran('describeTitleTab1')}
        images={images.successinMeeting}
      />
    )
  },
  {
    menuItem: 'MOST POPULAR',
    render: () => (
      <MenuItem
        title={tran('titleTab2')}
        describeTitle={tran('describeTitleTab2')}
        images={images.likeAPro}
      />
    )
  }
]

class Tabs extends Component {
  state = { color: colors[0] }

  handleColorChange = (e) => this.setState({ color: e.target.value })

  render() {
    const { color } = this.state

    return (
      <div>
        <Tab menu={{ color, attached: false, tabular: false }} panes={panes} />
      </div>
    )
  }
}

export default Tabs
