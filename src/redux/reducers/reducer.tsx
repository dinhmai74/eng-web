import * as React from 'react'

function reducers(state: IState = blankState(), action) {
  switch (action.type) {
    case 'INCREASE_POINT':
      return {
        point: state.point + 1
      }
    case 'RESET_POINT':
      return {
        point: state.point = 0
      }
  }
  return state
}

export interface IState {
  point: number
}

export const blankState = () => ({
  point: 0
})

export default reducers
