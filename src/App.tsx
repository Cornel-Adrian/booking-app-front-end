import './App.css';
import Login from './pages/Login';
import Company from './pages/Company';
import Search from './pages/Search';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Order from './pages/Order';
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Register from './pages/Register';
import { AuthProvider } from 'react-auth-kit'




function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
      <QueryClientProvider client={queryClient}>
        <div className="App" >
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='company/:companyId' element={<Company />}></Route>
            <Route path='order' element={<Order />}></Route>
          </Routes>
        </div>
      </QueryClientProvider >
    </AuthProvider>
  );
}

export default App;
