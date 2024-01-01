import {useContext, useEffect, useState} from 'react'
import UserContext from '../context/user-context';

const Header = () => {

  const [userName, setUserName] = useState(null)
  const userContext = useContext(UserContext);


  useEffect(()=>{
    if(useContext){
      setUserName(userContext.username)
    }  
  }, [userContext])

  return (
    <header className="mb-2">
      <nav className="navbar bg-secondary">
        <div className="container-fluid">          
          <a className="navbar-brand" href="/">Employee Dashboard</a>
          <span className="d-flex gap-2" role="search">     
          <span className="navbar-brand">{userName}</span>     
            <button className="btn btn-info">
              Log Out
            </button>
          </span>
        </div>
      </nav>
    </header>
  );
};
export default Header;
