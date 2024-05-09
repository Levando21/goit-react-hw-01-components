import './transaction-history.css';

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

const Transaction = ({ transaction }) => {
  return (
    <tr className="table-item">
      <td className="table-cell">{transaction.type}</td>
      <td className="table-cell">{transaction.amount}</td>
      <td className="table-cell">{transaction.currency}</td>
    </tr>
  );
};

export default TransactionTable;
