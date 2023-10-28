import { TransTable, TableHead, HeadItem, Item } from "./TransactionHistory.styled"


export const TransactionHistory = ({items}) => {
    return (
        <TransTable>
  <TableHead>
    <tr>
      <HeadItem>Type</HeadItem>
      <HeadItem>Amount</HeadItem>
      <HeadItem>Currency</HeadItem>
    </tr>
  </TableHead>

  <tbody>
    {items.map( item => {
        return (
            <tr key={item.id}>
            <Item>{item.type}</Item>
            <Item>{item.amount}</Item>
            <Item>{item.currency}</Item>
          </tr> 
        )
    })}
  </tbody>
</TransTable>
    )
}