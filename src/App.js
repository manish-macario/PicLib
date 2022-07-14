import React from 'react';
import './App.css';
import PicLib from './component/controller/PicLib';
import LibList from './component/controller/LibList';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Emptyview from './component/view/EmptyView';


const App = () => {
  let navigate = useNavigate();

  return (
    <>

      <Routes>
        <Route exact path="/" element={<PicLib navigate={navigate} />} />
        <Route exact path="/home" element={<PicLib navigate={navigate} />} />
        <Route path="/imageList" element={<LibList />} />
        <Route path="/nofound" element={<Emptyview />} />

        
        
      </Routes>



    </>
  );
}

export default App;
