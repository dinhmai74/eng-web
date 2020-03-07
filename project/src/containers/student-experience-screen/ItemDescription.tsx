import { tran } from 'localization/i18n'
import React from 'react'
import { Item } from 'semantic-ui-react'
import styled from 'styled-components'
import { colors, images } from 'themes/index'

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
          <p>{tran('contentFeedback1')}</p>
          <StyledName>{tran('nameFemale')}</StyledName>
          <p>{tran('ageFemale')}</p>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size="small" src={images.userAvatar2} />
      <Item.Content>
        <Item.Description>
          <Item.Image size="small" src={images.speech} />
          <p>{tran('contentFeedback2')}</p>
          <StyledName> {tran('nameMale')}</StyledName>
          <p>{tran('ageMale')}</p>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemDescriptions
