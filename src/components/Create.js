import React, { useState } from 'react';
import Message from './Message';
const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

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
      // Simulate an API call with fetch
      const response = await fetch('https://api.example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Registration successful!' });
        setFormData({ name: '', email: '', password: '' });
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Registration failed.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create - Registration Form</h2>
      {/* Display Message Component */}
      {message.text && <Message type={message.type} text={message.text} />}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Field */}
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

        {/* Email Field */}
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

        {/* Password Field */}
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
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white rounded py-2 px-4 mt-4">
        {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Create;
