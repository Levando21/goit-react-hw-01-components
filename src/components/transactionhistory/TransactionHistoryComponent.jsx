const Transaction = ({ transaction }) => {
  return (
    <tr className="table-item">
      <td className="table-cell">{transaction.type}</td>
      <td className="table-cell">{transaction.amount}</td>
      <td className="table-cell">{transaction.currency}</td>
    </tr>
  );
};
export default Transaction;
