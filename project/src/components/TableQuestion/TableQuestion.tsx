import { TextField } from '@material-ui/core'
import InputAnswer from 'components/Input/InputAnswer'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Table } from 'semantic-ui-react'
import styled from 'styled-components'
const StyledCell = styled(Table.Cell)`
  display: flex;
  flex-flow: column wrap;
  text-align: left;
`

export interface IGeneralCourseState {
  value: string
}
class TableQuestion extends Component<any, IGeneralCourseState> {
  static defaultProps: {}
  state = {
    value: 'abc'
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value })
    if (event.target.value === this.props.correctAnswer) {
      this.props.dispatch({ type: 'INCREASE_POINT' })
    }
    return
  }
  render() {
    return (
      <Table stackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Topic :(e.g.) Product Life Cycle
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Stages</Table.HeaderCell>
            <Table.HeaderCell>INFORMATION PROVIDED</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell style={{ paddingTop: '50px' }}>
              Introduction Stage
            </Table.Cell>
            <StyledCell>
              <Table.Cell>
                This state is the most
                <InputAnswer
                  style={{ marginTop: '-5px', marginLeft: '3px' }}
                  correctAnswer={'important'}
                />
              </Table.Cell>

              <Table.Cell>The size of the market is small.</Table.Cell>
              <Table.Cell>Sales are slow.</Table.Cell>
            </StyledCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{ paddingTop: '50px' }}>Growth Stage</Table.Cell>
            <StyledCell>
              <Table.Cell>
                This stage is characterized by a strong growth in
                <InputAnswer
                  style={{ marginTop: '-5px', marginLeft: '3px' }}
                  correctAnswer={'two month'}
                />
              </Table.Cell>
              <Table.Cell>
                Businesses can invest more money in the
                <InputAnswer
                  style={{ marginTop: '-5px', marginLeft: '3px' }}
                  correctAnswer={'company'}
                />
              </Table.Cell>
            </StyledCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{ paddingTop: '50px' }}>
              <InputAnswer
                style={{ marginTop: '-5px', marginLeft: '3px' }}
                correctAnswer={'production stage'}
              />
            </Table.Cell>
            <StyledCell>
              <Table.Cell>The product is established.</Table.Cell>
              <Table.Cell>
                Manufacturers aim to
                <InputAnswer
                  style={{ marginTop: '-5px', marginLeft: '3px' }}
                  correctAnswer={'develope'}
                />
                the market share they have built up.
              </Table.Cell>
              <Table.Cell>
                This is probably the most
                <InputAnswer
                  style={{ marginTop: '-5px', marginLeft: '3px' }}
                  correctAnswer={'spending'}
                />
                time for most products.
              </Table.Cell>
            </StyledCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{ paddingTop: '50px' }}>
              Decline stage
            </Table.Cell>
            <StyledCell>
              <Table.Cell>
                The market for a product will start to shrink.
              </Table.Cell>
              <Table.Cell>
                Companies can make some profit by switching to
                <InputAnswer
                  style={{ marginTop: '-5px', marginLeft: '3px' }}
                  correctAnswer={'the'}
                />
                production methods and cheaper markets.
              </Table.Cell>
            </StyledCell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    point: state.point
  }
}

export default connect(mapStateToProps)(TableQuestion)
