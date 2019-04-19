import { tran } from 'localization/i18n'
import React from 'react'
import {
  Button,
  Divider,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Segment
} from 'semantic-ui-react'

import './styles.css'

export interface IProps {
  isFirstItem?: boolean
  isLastItem?: boolean
  image: string
  content: string
  title: string
  reason: string
  ref1?: string
  ref2?: string
  ref?: string
  contentRef1?: string
  contentRef2?: string
  contentRef?: string
}

function ReasonCard(props: IProps) {
  const {
    content,
    image,
    title,
    isFirstItem,
    isLastItem,
    reason,
    ref1,
    ref2,
    ref,
    contentRef1,
    contentRef2,
    contentRef
  } = props

  const groupButton = isFirstItem ? (
    <div>
      <a className="card-left__groupButton" href={ref1}>
        <p>
          <Icon name="arrow alternate circle right" color="red" size="big" />
          {contentRef1}
        </p>
      </a>
      <a className="card-left__groupButton" href={ref2}>
        <p>
          <Icon name="arrow alternate circle right" color="red" size="big" />
          {contentRef2}
        </p>
      </a>
    </div>
  ) : isLastItem ? (
    <div>
      <a className="card-left__groupButton" href={ref}>
        <p>
          <Icon name="arrow alternate circle right" color="red" size="big" />
          {contentRef}
        </p>
      </a>
    </div>
  ) : null

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-left">
          <Image src={image} />
          <Label key="big" size="big">
            {reason}
          </Label>
        </div>
        <div className="card-right">
          <Header as="h3">{title}</Header>
          <p>{content}</p>
          {groupButton}
        </div>
      </div>
      {isLastItem ? null : <Divider />}
    </div>
  )
}

export default ReasonCard
