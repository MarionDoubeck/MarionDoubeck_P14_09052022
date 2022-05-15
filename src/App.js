import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/globals/Header';
import EmployeesList from './components/pages/EmployeesList';
import ErrorPage from './components/pages/ErrorPage';
import Main from "./components/pages/Main";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/employees-list"} element={<EmployeesList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router> 
  );
}

export default App;
