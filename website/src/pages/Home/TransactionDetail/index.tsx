import React from 'react';
import moment from 'moment';

import theme from './theme.module.scss';
import { Transaction } from '../../../models/transaction';

function TransactionDetail({
  transaction,
}: {
  transaction: Transaction;
}) {

  return (
    <div className={theme.transactionDetail}>
      <div className={theme.content}>
        <p className={theme.label}>Activity Id</p>
        <p className={theme.value}>{transaction.activity_id}</p>
        <p className={theme.label}>Date</p>
        <p className={theme.value}>{moment(transaction.date).format('hh:mm:ss A, DD MMMM YYYY')}</p>
        <p className={theme.label}>Type</p>
        <p className={theme.value}>{transaction.type}</p>
        <p className={theme.label}>Method</p>
        <p className={theme.value}>{transaction.method ? transaction.method : '-'}</p>
        <p className={theme.label}>Requester Type</p>
        <p className={theme.value}>{transaction.requester ? transaction.requester.type : '-'}</p>
        <p className={theme.label}>Source Type</p>
        <p className={theme.value}>{transaction.source.type}</p>
        <p className={theme.label}>Source Description</p>
        <p className={theme.value}>
          {transaction.source.description ? transaction.source.description : '-'}
        </p>
        <p className={theme.label}>Destination Type</p>
        <p className={theme.value}>{transaction.destination.type}</p>
        <p className={theme.label}>Destination Description</p>
        <p className={theme.value}>{transaction.destination.description}</p>
      </div>
    </div>
  );
}

export default TransactionDetail;
