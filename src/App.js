import './App.css';
import { useContext } from 'react';
import EmployeeTable from './component/EmployeeTable';
import Footer from './component/Footer';
import Header from './component/Header';
import UserContext from './context/user-context';
import Login from './component/Login';




function App() {
  const userContext = useContext(UserContext);

  return (
    <div>
      <Header />     
      {userContext.user ? <EmployeeTable/> : <Login />}                
      <Footer />
    </div>
  );
}

export default App;
