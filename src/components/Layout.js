// import React from 'react';
// import { Link } from 'react-router-dom';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-600 text-white flex-shrink-0 p-4">
//         <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//         <nav>
//           <ul>
//             <li className="mb-2">
//               <Link to="/create" className="hover:bg-blue-500 p-2 block rounded">Create</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/edit" className="hover:bg-blue-500 p-2 block rounded">Edit</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/view" className="hover:bg-blue-500 p-2 block rounded">View</Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow p-4 flex items-center justify-between">
//           <h1 className="text-xl font-semibold">Header</h1>
//         </header>
        
//         {/* Page Content */}
//         <main className="p-6 flex-1 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
