import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemName && itemQuantity) {
      const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: itemQuantity
      };
      setItems([...items, newItem]);
      setItemName('');
      setItemQuantity('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <h1>Grocery Store Management System</h1>
      <form onSubmit={handleAddItem}>
        <div>
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>
      <h2>Grocery List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
