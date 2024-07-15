import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import EmployeeData from './components/EmployeeData';
import ContextProvider from "./context/Context";

function App() {
  return (
    <div className="App">

    <ContextProvider>

    <BrowserRouter>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/employee" element={<EmployeeData />} />
    <Route path="/favorites/employee" element={<EmployeeData />} />


    <Route path="/*" element={<Page404 />} />

  </Routes>
  </BrowserRouter>
  </ContextProvider>
  </div>
  );
}

export default App;
