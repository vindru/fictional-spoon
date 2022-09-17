import simpleTransactions from '../data/simple_ledger.json';
import duplicateTransactions from '../data/duplicate_ledger.json';
import complicatedTransactions from '../data/complicated_ledger.json';
import moment from 'moment';
import { Transaction } from '../models/transaction';

function fetchJSONByLedger(ledgerType: string): Transaction[] {
  switch (ledgerType) {
    case 'simple':
      return simpleTransactions.map((t) => new Transaction(t));
    case 'duplicate':
      return duplicateTransactions.map((t) => new Transaction(t));
    case 'complicated':
      return complicatedTransactions.map((t) => new Transaction(t));
    default:
      return simpleTransactions.map((t) => new Transaction(t));
  }
}

function removeDuplicates(transactions: Transaction[]) {
  return transactions.filter(
    (tr, i, a) => a.findIndex((t) => t.activity_id === tr.activity_id) === i
  );
}

function sortChronologically(transactions: Transaction[]) {
  return transactions.sort((a, b) => {
    if (moment(a.date) > moment(b.date)) return -1;
    if (moment(a.date) < moment(b.date)) return 1;
    if (a.activity_id > b.activity_id) return 1;
    if (a.activity_id < b.activity_id) return -1;
    return 0;
  });
}

function transactionFetch(ledgerType: string) {
  return sortChronologically(removeDuplicates(fetchJSONByLedger(ledgerType)));
}

export default transactionFetch;
