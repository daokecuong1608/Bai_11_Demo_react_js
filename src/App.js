
import './App.scss';
import Header from './component/header/Header';
import { Outlet, Link } from "react-router-dom";


const App = () => {

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='mani-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-container'>

        </div>
      </div>
      <Outlet />
    </div>

  );
}

export default App;
