import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Component/Header";
import axios from "axios";
import HomePage from "./components/Component/HomePage";
import UploadPage from "./components/Component/UploadPage";
import { useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/videos" element={<HomePage />} />
          <Route path="/videos/:id" element={<HomePage />} />
          <Route path="/uploads" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
