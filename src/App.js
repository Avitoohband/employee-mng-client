import './App.css';
import EmployeeTable from './component/EmployeeTable';
import FlexContainer from './component/FlexContainer';
import Footer from './component/Footer';
import Header from './component/Header';


function App() {
  return (
    <div>
      <Header />
      
      <FlexContainer>        
      <EmployeeTable/>    
      </FlexContainer>
      <Footer />
    </div>
  );
}

export default App;
