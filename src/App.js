import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DBConfig } from "./DBConfig";
import { initDB } from "react-indexed-db";
import Home from "./Components/Home";

import NewComponent from "./Components/NewComponent";
import TemplateDesign from "./Components/TemplateDesign";
initDB(DBConfig);
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/NewComponent" element={<NewComponent />} />
        </Routes>
        <Routes>
          <Route path="/TemplateDesign" element={<TemplateDesign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
