export class Transaction{
  activity_id: string;
  date: string;
  type: string;
  method?: string;
  amount: number;
  balance: number;
  requester?: {
    type: string;
  };
  source: {
    id?: number;
    type: string;
    description: string;
  };
  destination: {
    id?: number;
    type: string;
    description: string;
  }

  constructor(transaction: any){
    this.activity_id = transaction.activity_id;
    this.date = transaction.date;
    this.type = transaction.type;
    this.method = transaction.method;
    this.requester = transaction.method;
    this.source = transaction.source;
    this.destination = transaction.destination;
    this.amount = transaction.amount;
    this.balance = transaction.balance;
  }
}
