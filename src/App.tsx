import './App.css';
import Login from './pages/Login';
import Company from './pages/Company';
import Search from './pages/Search';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Order from './pages/Order';
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" >
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='company/:companyId' element={<Company />}></Route>
          <Route path='order' element={<Order />}></Route>
        </Routes>
      </div>
    </QueryClientProvider >
  );
}

export default App;
