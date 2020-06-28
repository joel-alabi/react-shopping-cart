import React from 'react';
import './App.css';
import Sidebar from './Side';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
            <div className="col-2" style={{backgroundColor:'whitesmoke'}}>
      <Sidebar/>
        </div>
       <div className="col-10" style={{backgroundColor:'whitesmoke'}}>
      <Product/>
     </div>
      </div>
   </div>
 </div>
  );
}

export default App;
