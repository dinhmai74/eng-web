import * as React from 'react'

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE_POINT':
      return {
        point: state.point + 1
      }
  }
  return state
}

const initialState = {
  point: 0
}

export default reducer
