import * as React from 'react'

import './styles.css'

export interface IProps {
  image: string
  title: string
  content: string
}

export interface IState {}

export default class Block extends React.Component<IProps, IState> {
  render() {
    const { image, title, content } = this.props
    return (
      <div>
        <div id="outer-box">
          <img src={image} />
          <h3>{title}</h3>
          <div id="inner-box">
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}
