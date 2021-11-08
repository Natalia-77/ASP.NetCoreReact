import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React from 'react';
import Navbar from "../../navbar/navbar";

export default props => (
    <>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
    </>
  );