import CartItem from "./CartItem";

export default function CartList({ items, onRemove, onIncrease, onDecrease }) {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const total = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <p><b>Всего товаров:</b> {totalItems}</p>
      <p><b>Итого:</b> ${total}</p>

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
}
