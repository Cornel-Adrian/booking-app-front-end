import './App.css';
import Login from './pages/Login';
import Search from './pages/Search';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
        <Search />
      </div>

    </div>
  );
}

export default App;
