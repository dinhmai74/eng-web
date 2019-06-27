import React from 'react'
import { Table } from 'semantic-ui-react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const StyledCell = styled(Table.Cell)`
  display: flex;
  flex-flow: column wrap;
  text-align: left;
`

const TableQuestion = () => (
  <Table stackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Topic :(e.g.) Product Life Cycle</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Stages</Table.HeaderCell>
        <Table.HeaderCell>INFORMATION PROVIDED</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell style={{ paddingTop: '50px' }}>Growth Stage</Table.Cell>
        <StyledCell>
          <Table.Cell>
            This state is the most
            <TextField
              id="standard-name"
              style={{ color: 'red', marginLeft: '5px' }}
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
            <TextField
              id="standard-name"
              style={{ color: 'red', marginLeft: '5px' }}
            />
          </Table.Cell>

          <Table.Cell>
            Businesses can invest more money in the
            <TextField
              id="standard-name"
              style={{ color: 'red', marginLeft: '5px' }}
            />
          </Table.Cell>
        </StyledCell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={{ paddingTop: '50px' }}>
          <TextField
            id="standard-name"
            style={{ color: 'red', marginLeft: '5px' }}
          />
        </Table.Cell>
        <StyledCell>
          <Table.Cell>The product is established.</Table.Cell>
          <Table.Cell>
            Manufacturers aim to
            <TextField
              id="standard-name"
              style={{ color: 'red', marginLeft: '5px' }}
            />
            the market share they have built up.
          </Table.Cell>
          <Table.Cell>
            This is probably the most
            <TextField
              id="standard-name"
              style={{ color: 'red', marginLeft: '5px' }}
            />
            time for most products.
          </Table.Cell>
        </StyledCell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={{ paddingTop: '50px' }}>Decline stage</Table.Cell>
        <StyledCell>
          <Table.Cell>
            The market for a product will start to shrink.
          </Table.Cell>
          <Table.Cell>
            Companies can make some profit by switching to
            <TextField
              id="standard-name"
              style={{ color: 'red', marginLeft: '5px' }}
            />
            production methods and cheaper markets.
          </Table.Cell>
        </StyledCell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableQuestion
