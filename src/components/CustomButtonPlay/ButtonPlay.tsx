import * as React from 'react'
import {
  Container,
  Image,
  Button
} from '@front10/landing-page-book/dist/components'
import styled from 'styled-components'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute } = controls
import { withMediaProps } from 'react-media-player'
import { images } from 'themes'

export interface IQuestionState {}

interface IQuestionProps {}
const Containers = styled(Container)`
  display: flex;
  flex-flow: column wrap;
`
const StyledButton = styled(Button)`
  width: 100%;
  height: auto;
  background-color: transparent;
`
class ButtonPlay extends React.Component<any, any> {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }
  handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { className, style, media } = this.props
    return (
      <Containers style={style}>
        <StyledButton onClick={this.handlePlayPause}>
          {media.isPlaying ? '' : ''}
          <Image src={images.iconSound} />
        </StyledButton>
      </Containers>
    )
  }
}
export default withMediaProps(ButtonPlay)
