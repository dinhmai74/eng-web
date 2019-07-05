import React from 'react'
import { Box } from 'rebass'

export const withBox = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  return class extends React.Component<P> {
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <Box>
          <Component {...this.props} />
        </Box>
      )
    }
  }
}
