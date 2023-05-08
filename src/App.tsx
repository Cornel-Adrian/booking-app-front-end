import './App.css';
import Login from './pages/Login';
import Company from './pages/Company';
import Search from './pages/Search';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Order from './pages/Order';
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RequireAuth } from 'react-auth-kit'



function App() {
  const queryClient = new QueryClient();


  return (

      <QueryClientProvider client={queryClient}>
        <div className="App" >
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="search" element={
              <RequireAuth loginPath='/login'>
                <Search />
              </RequireAuth>
            } />
            <Route path="company/:companyId" element={
              <RequireAuth loginPath='/login'>
                <Company />
              </RequireAuth>
            } />
            <Route path="order" element={
              <RequireAuth loginPath='/login'>
                <Order />
              </RequireAuth>
            } />
          </Routes>
        </div>
      </QueryClientProvider >
  );
}

export default App;
