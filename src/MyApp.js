import App from "./App";
import History from './components/History'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function MyApp() {
    return (
        <BrowserRouter>
        <div>
          <Routes>
          <Route path="/App" element={<App />} /> 
          <Route path="/History" element={<History />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    );
}