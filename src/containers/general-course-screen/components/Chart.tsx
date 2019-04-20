import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes'
import LevelNumber from './LevelNumber'

interface IProps {}

interface IState {}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 130px;
`
const TableChart = styled.div`
  /* border: 0; */
  border-collapse: separate;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
`
const Th = styled.th`
  padding-left: 40px;
  padding-bottom: 10px;

`
const TBody = styled.tbody`
  text-align: center;
`
const Td = styled.td`
  border: 1px solid #ddd;
  width: 200px;
  height: 40px;
`
const Col = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: start; */

`
class Chart extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
          <TableChart>
            <thead>
              <tr>
                <Th >
                  <Col >
                    <LevelNumber number={1} />
                    <LevelNumber number={2} />
                  </Col>
                </Th>
                <Th>
                  <Col >
                    <LevelNumber
                      number={3}
                      style={{ backgroundColor: colors.salmon }}
                    />
                    <LevelNumber
                      number={4}
                      style={{ backgroundColor: colors.salmon }}
                    />
                    <LevelNumber
                      number={5}
                      style={{ backgroundColor: colors.salmon }}
                    />
                  </Col>
                </Th>
                <Th>
                  <Col>
                    <LevelNumber
                      number={6}
                      style={{ backgroundColor: colors.lightRed }}
                    />
                    <LevelNumber
                      number={7}
                      style={{ backgroundColor: colors.lightRed }}
                    />
                    <LevelNumber
                      number={8}
                      style={{ backgroundColor: colors.lightRed }}
                    />
                    <LevelNumber
                      number={9}
                      style={{ backgroundColor: colors.lightRed }}
                    />
                  </Col>
                </Th>
                <Th>
                  <Col>
                    <LevelNumber
                      number={10}
                      style={{ backgroundColor: colors.lightCyan }}
                    />
                    <LevelNumber
                      number={11}
                      style={{ backgroundColor: colors.lightCyan }}
                    />
                    <LevelNumber
                      number={12}
                      style={{ backgroundColor: colors.lightCyan }}
                    />
                    <LevelNumber
                      number={13}
                      style={{ backgroundColor: colors.lightCyan }}
                    />
                  </Col>
                </Th>
                <Th>
                  <Col>
                    <LevelNumber
                      number={14}
                      style={{ backgroundColor: colors.darkCyan }}
                    />
                    <LevelNumber
                      number={15}
                      style={{ backgroundColor: colors.darkCyan }}
                    />
                    <LevelNumber
                      number={16}
                      style={{ backgroundColor: colors.darkCyan }}
                    />
                    <LevelNumber
                      number={17}
                      style={{ backgroundColor: colors.darkCyan }}
                    />
                  </Col>
                </Th>
                <Th>
                  <Col>
                    <LevelNumber
                      number={18}
                      style={{ backgroundColor: colors.darkBLue }}
                    />
                    <LevelNumber
                      number={19}
                      style={{ backgroundColor: colors.darkBLue }}
                    />
                    <LevelNumber
                      number={20}
                      style={{ backgroundColor: colors.darkBLue }}
                    />
                  </Col>
                </Th>
              </tr>
            </thead>
            <TBody>
              <Td>SURVIVAL</Td>
              <Td>WAYSTAGE</Td>
              <Td>UPPER WAYSTAGE </Td>
              <Td>THRESHOLD</Td>
              <Td>MILESTONE</Td>
              <Td>MASTERY</Td>
            </TBody>
          </TableChart>
      </Container>
    )
  }
}

Chart.defaultProps = {}

export default Chart
