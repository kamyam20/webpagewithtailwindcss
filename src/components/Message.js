import React from 'react';

const Message = ({ type, text }) => {
  const messageStyles =
    type === 'success'
      ? 'bg-green-100 border border-green-400 text-green-700'
      : 'bg-red-100 border border-red-400 text-red-700';

  return (
    <div className={`${messageStyles} px-4 py-3 rounded relative mb-4`}>
      <span className="block sm:inline">{text}</span>
    </div>
  );
};

export default Message;
