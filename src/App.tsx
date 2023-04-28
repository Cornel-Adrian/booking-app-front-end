import './App.css';
import Login from './pages/Login';
import Company from './pages/Company';
import Search from './pages/Search';
import Service from './pages/Service';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import OrderDone from './pages/OrderDone';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path='company/:companyId' element={<Company />}></Route>
        <Route path='service' element={<Service />}></Route>
        <Route path='orderdone' element={<OrderDone />}></Route>
      </Routes>
    </div>
  );
}

export default App;
