
import './App.scss';
import Header from './component/header/Header';
import { Outlet, Link } from "react-router-dom";


const App = () => {

  return (
    <div className="app-container">
      <Header />
      <div>
        test link
      </div>
      <div>
        <button>
          <Link to="/users">go to User</Link>
        </button>
        <button>
          <Link to="/admins">go to Admin</Link>
        </button>
      </div>
    </div>

  );
}

export default App;
