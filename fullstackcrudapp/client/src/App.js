import React, { useEffect, useState } from 'react';
import { getItems, createItem, updateItem, deleteItem, signup, login } from './services/api';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log(items)

  // Add the following new methods

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      await signup({ email, password });
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await login({ email, password });
      setToken(response.data.token);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    setToken('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isEditing) {
      try {
        await updateItem(editItemId, { name, description }, token);
        fetchItems();
        // resetForm();
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      try {
        await createItem({ name, description }, token);
        fetchItems();
        // resetForm();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // ...

  return (
    <div>
      {!token ? (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>

          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>My CRUD App</h1>

          <button onClick={handleLogout}>Logout</button>

          <form onSubmit={handleSubmit}>
            {/* ... */}

            <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
          </form>

          <ul>
            {/* ... */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
