import App from "./App";
import History from './components/History'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file


export default function MyApp() {
  return (
    <BrowserRouter>
      <div >
      <button className="btn-link"><Link to="http://localhost:3000/History" target="_blank">HISTORY</Link></button>  
        <Routes>
          <Route path="/App" element={<App />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}