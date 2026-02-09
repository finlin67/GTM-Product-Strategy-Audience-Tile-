import React from 'react';
import GTMAudienceTile from './components/GTMAudienceTile';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-4">
      {/* 
        The GTMAudienceTile is designed to be a rigid 600x600 component.
        It is self-contained and handles its own internal layout.
      */}
      <GTMAudienceTile />
    </div>
  );
}