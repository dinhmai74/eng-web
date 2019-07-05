import { tran } from 'localization/i18n'
import React, { Component } from 'react'

import styled from 'styled-components'

import { colors } from 'themes'
import LevelNumber from './LevelNumber'

interface IProps {}

interface IState {}
const divStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const TableChart = styled.div`
  border: 0;
  margin-left: 100px;
  margin-right: 100px;
  border-collapse: separate;
  margin-bottom: 30px;
`
class Chart extends Component<IProps, IState> {
  static defaultProps: {}
  state = {}

  render() {
    return (
      <div style={divStyle}>
        <div>
          <TableChart>
            <thead>
              <tr>
                <th style={{ paddingLeft: '40px', paddingBottom: '10px' }}>
                  <div>
                    <LevelNumber number={1} />
                    <LevelNumber number={2} />
                  </div>
                </th>
                <th style={{ paddingLeft: '40px', paddingBottom: '10px' }}>
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
                </th>
                <th style={{ paddingLeft: '40px', paddingBottom: '10px' }}>
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
                </th>
                <th style={{ paddingLeft: '40px', paddingBottom: '10px' }}>
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
                </th>
                <th style={{ paddingLeft: '40px', paddingBottom: '10px' }}>
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
                </th>
                <th style={{ paddingLeft: '40px', paddingBottom: '10px' }}>
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
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                textAlign: 'center',
              }}
            >
              <td
                style={{
                  border: '1px solid #ddd',
                  width: '200px',
                  height: '40px',
                }}
              >
                SURVIVAL
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  width: '200px',
                  height: '40px',
                }}
              >
                WAYSTAGE
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  width: '200px',
                  height: '40px',
                }}
              >
                UPPER WAYSTAGE{' '}
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  width: '200px',
                  height: '40px',
                }}
              >
                THRESHOLD
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  width: '200px',
                  height: '40px',
                }}
              >
                MILESTONE
              </td>
              <td
                style={{
                  border: '1px solid #ddd',
                  width: '200px',
                  height: '40px',
                }}
              >
                MASTERY
              </td>
            </tbody>
          </TableChart>
        </div>
      </div>
    )
  }
}

Chart.defaultProps = {}

export default Chart
