import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'themes'
import LevelNumber from './LevelNumber'

interface IProps {}

interface IState {}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const TableChart = styled.div`
  border: 0;
  margin-left: 100px;
  margin-right: 100px;
  border-collapse: separate;
  margin-bottom: 30px;
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
class Chart extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <Container>
        <div>
          <TableChart>
            <thead>
              <tr>
                <Th>
                  <div>
                    <LevelNumber number={1} />
                    <LevelNumber number={2} />
                  </div>
                </Th>
                <Th>
                  <div>
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
                  </div>
                </Th>
                <Th>
                  <div>
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
                  </div>
                </Th>
                <Th>
                  <div>
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
                  </div>
                </Th>
                <Th>
                  <div>
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
                  </div>
                </Th>
                <Th>
                  <div>
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
                  </div>
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
        </div>
      </Container>
    )
  }
}

Chart.defaultProps = {}

export default Chart
