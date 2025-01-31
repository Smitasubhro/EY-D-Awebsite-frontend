
import React,{lazy,Suspense} from "react";

import './App.css';
import { Routes, Route } from "react-router-dom"
import {Navbar} from './Components/Navbar';
import Footer from './Components/Footer';
// import Sidebar from './Components/Sidebar';
const Home=lazy(()=>import('./Pages/Home'));
const Usecase=lazy(()=>import('./Pages/Usecase'));
const Zone=lazy(()=>import('./Pages/Zone'));
const Assets=lazy(()=>import('./Pages/Assets'));
const UseCaseDetail=lazy(()=>import('./Pages/UseCaseDetail'));
const AssetDetail=lazy(()=>import('./Pages/AssetDetail'));
const AddUseCase=lazy(()=>import('./Pages/AddUseCase'));
const AddAsset=lazy(()=>import('./Pages/AddAsset'));

function App() {
  return (
    
    <div className="grid-container">
      
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading....</div>}><Home /></Suspense>} />
        <Route path="/zone" element={<Suspense fallback={<div>Loading....</div>}><Zone /></Suspense>} />
        <Route path="/usecases" element={<Suspense fallback={<div>Loading....</div>}><Usecase /></Suspense> }/>
        <Route path="/assets" element={<Suspense fallback={<div>Loading....</div>}><Assets /></Suspense>} />
        <Route path="/usecases/:caseid/:casetitle" element={<Suspense fallback={<div>Loading....</div>}><UseCaseDetail /></Suspense>} />
        <Route path="/addusecase" element={<Suspense fallback={<div>Loading....</div>}><AddUseCase /></Suspense>} />
        <Route path="/addasset" element={<Suspense fallback={<div>Loading....</div>}><AddAsset /></Suspense>} />
        <Route path="/assets/:assetid/:assettitle" element={<Suspense fallback={<div>Loading....</div>}><AssetDetail /></Suspense>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
