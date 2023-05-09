import './App.css';
import Login from './pages/Login';
import Company from './pages/Company';
import Search from './pages/Search';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Order from './pages/Order';
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Register from './pages/Register';
import { RequireAuth } from 'react-auth-kit'
import Orders from './pages/Orders';
import Buynow from './pages/Buynow';
import Logout from './pages/Logout';



function App() {
  const queryClient = new QueryClient();


  return (

    <QueryClientProvider client={queryClient}>
      <div className="App" >
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={
            <RequireAuth loginPath='/login'>
              <Search />
            </RequireAuth>
          } />
          <Route path="company/:companyId" element={
            <RequireAuth loginPath='/login'>
              <Company/>
            </RequireAuth>
          } />
          <Route path="order-done/:id" element={
            <RequireAuth loginPath='/login'>
              <Order />
            </RequireAuth>
          } />
          <Route path="orders" element={
            <RequireAuth loginPath='/login'>
              <Orders />
            </RequireAuth>
          } />
          <Route path="company/:companyId/buynow/:name/:description/:price" element={
            <RequireAuth loginPath='/login'>
              <Buynow />
            </RequireAuth>
          } />
           <Route path="logout" element={
            <RequireAuth loginPath='/login'>
              <Logout />
            </RequireAuth>
          } />
        </Routes>
      </div>
    </QueryClientProvider >
  );
}

export default App;
