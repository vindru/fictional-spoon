import React from 'react';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import descriptionFetch from '../../../utils/descriptionFetch';

import theme from './theme.module.scss';
import { Transaction } from '../../../models/transaction';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxHeight: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#000',
    fontWeight: 700,
    border: 'none',
  },
  body: {
    borderColor: '#525252',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#FFF',
  },
  head: {
    backgroundColor: '#C5C5C5',
  },
  hover: {
    cursor: 'pointer',
  },
  selected: {
    borderLeft: '5px solid #525252',
  },
}))(TableRow);

function TransactionTable({
  transactions,
  selectedTransaction,
  onTransactionSelect,
}: {
  transactions: Transaction[];
  selectedTransaction?: Transaction;
  onTransactionSelect: (activityId: Transaction) => void;
}) {
  const classes = useStyles();
  return (
    <div className={theme.tableContainer}>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Transaction</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Balance</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <br />
          <TableBody>
            {transactions.map((transaction) => (
              <StyledTableRow
                key={transaction.activity_id}
                onClick={() => onTransactionSelect(transaction)}
                hover={true}
                selected={selectedTransaction?.activity_id === transaction.activity_id}
              >
                <StyledTableCell>
                  <div className={theme.dateContainer}>
                    <span>{moment(transaction.date).format('DD MMMM YYYY')}</span>
                    <span className={theme.time}>
                      {moment(transaction.date).format('hh:mm:ss A')}
                    </span>
                  </div>
                </StyledTableCell>
                <StyledTableCell>{transaction.type}</StyledTableCell>
                <StyledTableCell>{descriptionFetch(transaction)}</StyledTableCell>
                <StyledTableCell>
                  <span className={transaction.amount > 0 ? theme.credit : theme.debit}>
                    $ {transaction.amount}
                  </span>
                </StyledTableCell>
                <StyledTableCell>$ {transaction.balance}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TransactionTable;
