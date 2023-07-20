import React from "react";
import Singin from "./components/Singin";
import Singup from "./components/Singup";
import Account from "./components/Account";
import { Routes, Route } from 'react-router-dom'
import ProtectedRouter from "./components/ProtectedRouter";


function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline flex justify-center">
        FIREBASE AUTH
      </h1>
      <Routes>
        <Route path="/" element={<Singin />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/account" element={
          <ProtectedRouter>
            <Account />
          </ProtectedRouter>
        } />
      </Routes>
    </div>
  );
}

export default App;
