import React from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { tableName } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Details for {tableName}</h2>
      <p>This page shows details for the table: {tableName}</p>
      {/* Display additional details here based on tableName */}
    </div>
  );
};

export default ViewDetails;
