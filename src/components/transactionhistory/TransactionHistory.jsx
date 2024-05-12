import './transaction-history.css';
import Transaction from './TransactionHistoryComponent';

const TransactionTable = ({ transactions }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="main-row">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
