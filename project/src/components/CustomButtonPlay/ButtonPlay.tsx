import {
  Button,
  Container,
  Image
} from '@front10/landing-page-book/dist/components'
import * as React from 'react'
import { controls, Media, Player } from 'react-media-player'
import styled from 'styled-components'
const { PlayPause, MuteUnmute } = controls
import { withMediaProps } from 'react-media-player'

const StyleImage = styled(Image) `
  /* width: 50%;
  height: auto; */
`

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
    const { className, style, media, images } = this.props
    return (
      <Containers style={style}>
        <StyledButton onClick={this.handlePlayPause}>
          {media.isPlaying ? '' : ''}
          <StyleImage src={images} />
        </StyledButton>
      </Containers>
    )
  }
}
export default withMediaProps(ButtonPlay)
