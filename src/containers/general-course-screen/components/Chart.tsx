import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes'
import LevelNumber from './LevelNumber'

interface IProps {}

interface IState {}

const Container = styled.div`
  display: flex;
  padding-top: 130px;
`
const TableChart = styled.div`
  border-collapse: separate;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Th = styled.th`
  padding-left: 40px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TBody = styled.tbody`
  text-align: center;
`
const Td = styled.td`
  border: 1px solid #ddd;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Col = styled.div``
class Chart extends Component<any, any> {
  // static defaultProps: {}
  state = {}
  constructor(props: any) {
    super(props)
  }

  render() {
    const { style, color, ...rest } = this.props
    return (
      <Container style={style}>
        <TableChart>
          <thead>
            <tr>
              <Th>
                <Col>
                  <LevelNumber number={this.props.number} color={color} />
                  <LevelNumber number={this.props.number} color={color} />
                  <LevelNumber number={this.props.number} color={color} />
                  <LevelNumber number={this.props.number} color={color} />
                </Col>
              </Th>
            </tr>
          </thead>
          <TBody>
            <Td>{this.props.name}</Td>
          </TBody>
        </TableChart>
      </Container>
    )
  }
}

// Chart.defaultProps = {}

export default Chart
