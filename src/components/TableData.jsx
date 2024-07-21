export default function TableData({
  orderId,
  status,
  transactionId,
  date,
  amount,
}) {
  return (
    <tr className="text-base">
      <td className="text-blue-500 font-semibold">{orderId}</td>
      <td>{status}</td>
      <td>{transactionId}</td>
      <td>{date}</td>
      <td>{amount}</td>
    </tr>
  );
}
