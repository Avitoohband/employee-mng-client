import "./App.css";
import { useContext, useEffect } from "react";
import EmployeeTable from "./component/EmployeeTable";
import Footer from "./component/Footer";
import Header from "./component/Header";
import UserContext from "./context/user-context";
import Login from "./component/Login";

function App() {
  const userContext = useContext(UserContext);

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user");

    if (userFromLocalStorage) {
      userContext.setUserOnly(userFromLocalStorage);
    }
  }, [userContext]);

  return (
    <div>
      <Header />
      {userContext.user ? <EmployeeTable /> : <Login />}
      <Footer />
    </div>
  );
}

export default App;
