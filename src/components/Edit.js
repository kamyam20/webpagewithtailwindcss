import React, { useState, useEffect } from 'react';
import Message from './Message';

const Edit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    // Fetch initial data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/user/1'); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setFormData({
            name: data.name,
            email: data.email,
            password: '', // For security, usually password is not fetched
          });
        } else {
          setMessage({ type: 'error', text: 'Failed to load data' });
        }
      } catch (error) {
        setMessage({ type: 'error', text: 'An error occurred while fetching data' });
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://api.example.com/user/1', { // Replace with your actual API endpoint
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Update successful!' });
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Update failed.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while updating data' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>

      {/* Display Message Component */}
      {message.text && <Message type={message.type} text={message.text} />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="w-full sm:w-1/4 text-gray-700 mb-2 sm:mb-0" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full sm:w-3/4 border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="w-full sm:w-1/4 text-gray-700 mb-2 sm:mb-0" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full sm:w-3/4 border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <label className="w-full sm:w-1/4 text-gray-700 mb-2 sm:mb-0" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full sm:w-3/4 border-gray-300 rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 px-4 mt-4"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default Edit;
