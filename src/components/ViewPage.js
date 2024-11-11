
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  // Sample data for tables
  const allTableData = Array.from({ length: 150 }, (_, i) => ({ name: `Table ${i + 1}` }));

  // Filtered data based on search term
  const filteredData = allTableData.filter((table) =>
    table.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive match
  );

  // Calculate the total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleViewClick = (tableName) => navigate(`/view/${tableName}`);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">View Page</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search tables..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-400 p-2 mb-4 rounded w-full"
      />

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Table Name</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((table, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{table.name}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleViewClick(table.name)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls with Previous and Next buttons */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>
        <span className="flex items-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewPage;



//below with page number 1,2,3
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ViewPage = () => {
//   const navigate = useNavigate();

//   // Sample data for the tables (simulate 100+ tables)
//   const allTableData = Array.from({ length: 150 }, (_, i) => ({ name: `Table ${i + 1}` }));
  
//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');

//   const itemsPerPage = 10;
// // Filter tables by search term
// const filteredData = allTableData.filter((table) =>
// table.name.toLowerCase().includes(searchTerm.toLowerCase())
// );
//   // Calculate current items to display
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   //const currentItems = allTableData.slice(indexOfFirstItem, indexOfLastItem);
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   const handleViewClick = (tableName) => navigate(`/view/${tableName}`);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">View Page</h2>
//       <input
//         type="text"
//         placeholder="Search tables..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border border-gray-400 p-2 mb-4 rounded w-full"
//       />
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Table Name</th>
//             <th className="py-2 px-4 border-b">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((table, index) => (
//             <tr key={index}>
//               <td className="py-2 px-4 border-b">{table.name}</td>
//               <td className="py-2 px-4 border-b">
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded"
//                   onClick={() => handleViewClick(table.name)}
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination controls */}
//       <div className="flex justify-center mt-4">
//         {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
//           <button
//             key={index}
//             className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewPage;
