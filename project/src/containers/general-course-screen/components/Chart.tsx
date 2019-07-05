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
    const { style, color, name, ...rest } = this.props
    if (name === 'SURVIVAL') {
      return (
        <Container style={style}>
          <TableChart>
            <thead>
              <tr>
                <Th>
                  <Col>
                    <LevelNumber number={1} color={colors.transparentOrange} />
                    <LevelNumber number={2} color={colors.transparentOrange} />
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
    } else if (name === 'WAYSTAGE') {
      return (
        <Container style={style}>
          <TableChart>
            <thead>
              <tr>
                <Th>
                  <Col>
                    <LevelNumber number={3} color={colors.salmon} />
                    <LevelNumber number={4} color={colors.salmon} />
                    <LevelNumber number={5} color={colors.salmon} />
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
    } else if (name === 'UPPER WAYSTAGE') {
      return (
        <Container style={style}>
          <TableChart>
            <thead>
              <tr>
                <Th>
                  <Col>
                    <LevelNumber number={6} color={colors.lightRed} />
                    <LevelNumber number={7} color={colors.lightRed} />
                    <LevelNumber number={8} color={colors.lightRed} />
                    <LevelNumber number={9} color={colors.lightRed} />
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
    } else if (name === 'THRESHOLD') {
      return (
        <Container style={style}>
          <TableChart>
            <thead>
              <tr>
                <Th>
                  <Col>
                    <LevelNumber number={10} color={colors.lightCyan} />
                    <LevelNumber number={11} color={colors.lightCyan} />
                    <LevelNumber number={12} color={colors.lightCyan} />
                    <LevelNumber number={13} color={colors.lightCyan} />
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
    } else if (name === 'MILESTONE') {
      return (
        <Container style={style}>
          <TableChart>
            <thead>
              <tr>
                <Th>
                  <Col>
                    <LevelNumber number={14} color={colors.darkCyan} />
                    <LevelNumber number={15} color={colors.darkCyan} />
                    <LevelNumber number={16} color={colors.darkCyan} />
                    <LevelNumber number={17} color={colors.darkCyan} />
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
    return (
      <Container style={style}>
        <TableChart>
          <thead>
            <tr>
              <Th>
                <Col>
                  <LevelNumber number={18} color={colors.darkBLue} />
                  <LevelNumber number={19} color={colors.darkBLue} />
                  <LevelNumber number={20} color={colors.darkBLue} />
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
