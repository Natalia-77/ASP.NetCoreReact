
import React from 'react';

import Navbar from "./Navbar";

export default props => (
    <>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
    </>
  );