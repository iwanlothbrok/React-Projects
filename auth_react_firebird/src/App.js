import React from "react";
import Singin from "./components/Singin";
import Singup from "./components/Singup";
import Account from "./components/Account";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline flex justify-center">
        FIREBASE AUTH
      </h1>
      <Routes>
        <Route path="/" element={<Singin />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
