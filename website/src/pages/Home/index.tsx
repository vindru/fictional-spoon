import React, { useState, useEffect } from 'react';

import HomeLayout from '../../components/HomeLayout';

import BalanceWidget from './BalanceWidget';
import TransactionTable from './TransactionTable';
import TransactionDetail from './TransactionDetail';
import LedgerSwitch from './LedgerSwitch';

import transactionFetch from '../../utils/transactionFetch';

import theme from './theme.module.scss';
import { Transaction } from '../../models/transaction';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(transactionFetch('simple'));
  const [ledgerType, setLedgerType] = useState<'simple' | 'duplicate' | 'complicated'>('simple');

  const [selectedTransaction, setSelectedTransaction] = useState<Transaction>();

  useEffect(() => {
    setTransactions(transactionFetch(ledgerType));
  }, [ledgerType]);

  return (
    <HomeLayout>
      <div className={theme.homeContainer}>
        <div className={theme.tabs}>
        </div>
        <div className={theme.tabContent}>
          <div className={theme.container}>
            <div className={theme.transactionsContainer}>
              <BalanceWidget balance={selectedTransaction?.balance||transactions[0].balance} />
              <LedgerSwitch ledgerType={ledgerType} onTypeSelect={setLedgerType} />
              <TransactionTable
                transactions={transactions}
                selectedTransaction={selectedTransaction}
                onTransactionSelect={(selectedTransaction: any) => setSelectedTransaction(selectedTransaction)}
              />
              </div>
            {selectedTransaction && <TransactionDetail transaction={selectedTransaction} />}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default App;
