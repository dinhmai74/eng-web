import * as React from 'react'
import { Container } from '@front10/landing-page-book/dist/components'
import styled from 'styled-components'
import { Media, Player, controls } from 'react-media-player'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import ButtonPlay from 'components/CustomButtonPlay/ButtonPlay'
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
  flex-flow: row wrap;
  padding-bottom: 20px;
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
    const { firstQuestion, secondQuestion } = this.props
    return (
      <Containers>
        <FormControl>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            value={this.state.value}
            onChange={this.handleChange}
            style={{ display: 'flex', flexFlow: 'column wrap' }}
          >
            <Wrapper>
              <FormControlLabel
                value={firstQuestion}
                control={<Radio />}
                label={''}
              />
              <Media>
                <div className="media">
                  <div className="media-player">
                    <Player src={firstQuestion} />
                  </div>
                  <div className="media-controls">
                    <ButtonPlay images={images.iconSound} />
                  </div>
                </div>
              </Media>
            </Wrapper>
            <Wrapper>
              <FormControlLabel
                value={secondQuestion}
                control={<Radio />}
                label={''}
              />
              <Media>
                <div className="media">
                  <div className="media-player">
                    <Player src={secondQuestion} />
                  </div>
                  <div className="media-controls">
                    <ButtonPlay images={images.iconSound} />
                  </div>
                </div>
              </Media>
            </Wrapper>
          </RadioGroup>
        </FormControl>
      </Containers>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(CheckboxAudio)
