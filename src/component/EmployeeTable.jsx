import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import EmployeeData from "./EmployeeData";
import { addEmployee, deleteEmployee, getEmployees } from "../util/EmployeeUtil";
import EmployeeModalForm from './EmployeeModalForm'

const demoData = [
  {
    username: "testusername",
    name: "testname",
    department: "testdepartment",
    position: "testposition",
  },
  {
    username: "testusername1",
    name: "testname1",
    department: "testdepartment1",
    position: "testposition1",
  },
  {
    username: "testusername2",
    name: "testname2",
    department: "testdepartment2",
    position: "testposition2",
  },
  {
    username: "testusername3",
    name: "testname3",
    department: "testdepartment3",
    position: "testposition3",
  },
];

const EmployeeTable = () => {
  const [employees, setEmployess] = useState([]);
  const [isEmployees, setIsEmployees] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      await getEmployeeHelper();
    };
    fetchEmployees();
  }, []);

  const getEmployeeHelper = async () => {
    const employeeData = await getEmployees();
    if (employeeData) {          
      setEmployess(employeeData);
      setIsEmployees(true);
    }else{     
      setIsEmployees(false);
    }
  };

  const addEmployeeHelper = async (employeeData) =>{
    const data = await addEmployee(employeeData);
    await getEmployeeHelper();    
  }

  const removeHandler = async (employeeUserName) => {
    await deleteEmployee(employeeUserName);    
    await getEmployeeHelper();    
  };

  return (
    <>
      {!isEmployees ? (
        <h2 className="text-center">No Employeses!</h2>
      ) : (
        <div className="d-flex flex-column">
          <Table className="rounde " responsive striped hover variant="dark">
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Department</th>
                <th>Position</th>
              </tr>
            </thead>

            <tbody>
              {<EmployeeData data={employees} remove={removeHandler} />}
            </tbody>
          </Table>
        </div>
      )}
      <div className={`d-flex ${isEmployees ? 'justify-content-end': 'justify-content-center'}`} >
        <EmployeeModalForm addEmployee={addEmployeeHelper} />
      </div>
    </>
  );
};

export default EmployeeTable;
