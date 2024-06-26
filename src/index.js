import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import User from './component/user/User';
import Admin from './component/admin/Admin';
import HomePage from './component/home/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
          <Route path="admins" element={<Admin />} />
        </Route>
      </Routes>

    </BrowserRouter>

    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
