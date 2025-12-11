export default function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">

      <div className="cart-left">
        <img src={item.image} alt={item.title} className="cart-img" />
      </div>

      <div className="cart-right">
        <p className="cart-title">{item.title}</p>

        <div className="qty-controls">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>

        <p className="cart-price">Цена: ${(item.price * item.quantity).toFixed(2)}</p>

        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          Удалить
        </button>
      </div>

    </div>
  );
}
