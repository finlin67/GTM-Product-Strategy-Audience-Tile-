import React from 'react';
import ProductGTMTile from './components/ProductGTMTile';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-4">
      {/* 
        The ProductGTMTile is designed to be a rigid 600x600 component.
        It is self-contained and handles its own internal layout.
      */}
      <ProductGTMTile />
    </div>
  );
}