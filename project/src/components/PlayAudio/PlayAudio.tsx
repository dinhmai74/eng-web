import { Container } from '@front10/landing-page-book/dist/components'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import ButtonPlay from 'components/CustomButtonPlay/ButtonPlay'
import * as React from 'react'
import { controls, Media, Player } from 'react-media-player'
import styled from 'styled-components'
const { PlayPause, MuteUnmute } = controls
import { connect } from 'react-redux'
import { images } from 'themes'

export interface IQuestionState {
  value: string
}

const Containers = styled(Container)`
  display: flex;
  flex-flow: column wrap;
`

const Dot = styled(Media)`
  margin-top: -100px;
`
const Wrapper = styled.div`
  display: flex;
`
class CheckboxAudio extends React.Component<any, IQuestionState> {
  state = {
    value: 'female'
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value })
    if (event.target.value === this.props.correctAnswer) {
      this.props.dispatch({ type: 'INCREASE_POINT' })
    }
    return
  }
  render() {
    const { question } = this.props
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={question} />
          </div>
          <div className="media-controls">
            <ButtonPlay images={images.redIconSound} />
          </div>
        </div>
      </Media>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(CheckboxAudio)
