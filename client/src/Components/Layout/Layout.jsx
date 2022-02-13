/* eslint-disable react/prop-types */
import React from 'react';

import Navbar from '../Navbar/Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">
        {children}
      </main>
    </>
  );
}

export default Layout;
