import React from 'react'
import { Item } from 'semantic-ui-react'
import { colors, images } from 'themes/index'
import styled from 'styled-components'

const StyledName = styled.p`
  font-weight: bold;
`
const ItemDescriptions = () => (
  <Item.Group style={{ display: 'flex', flexDirection: 'row' }}>
    <Item>
      <Item.Image size="small" src={images.userAvatar1} />
      <Item.Content>
        <Item.Description>
          <Item.Image size="small" src={images.speech} />
          <p>
            Interesting conversations between characters help me learn English
            is so much more.
          </p>
          <StyledName> Nhung Phan</StyledName>
          <p>27 years old, Office staff</p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size="small" src={images.userAvatar2} />
      <Item.Content>
        <Item.Description>
          <Item.Image size="small" src={images.speech} />
          <p>
            I really like modern features from the new Study Program. Thanks to
            it, I checked my progress and progressed faster.
          </p>
          <StyledName> Minh Nguyễn</StyledName>
          <p>45 years old, Business owner</p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemDescriptions
