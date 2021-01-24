import React, { useState, useEffect } from 'react'
import Converter from './components/Coverter'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Header />
      <div className="mx-20 my-5 flex">
        <div className="w-1/3 w-fu bg-white justify-center align-center p-4 rounded-lg mx-auto">
          <div>
            <span className="bg-gray-50 text-gray-500 text-sm font-semibold px-4 py-1 rounded-full">From</span>
            <Converter />
          </div>
          <div className="mt-6">
            <span className="bg-gray-50 text-gray-500 text-sm font-semibold px-4 py-1 rounded-full">To</span>
            <Converter />
          </div>
        </div>
      </div>
    </div>
  );
}

