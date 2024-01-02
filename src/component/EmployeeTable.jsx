import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import EmployeeData from "./EmployeeData";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
} from "../util/EmployeeUtil";
import EmployeeModalForm from "./EmployeeModalForm";
import FlexContainer from "./FlexContainer";

const EmployeeTable = () => {
  const [employees, setEmployess] = useState([]);
  const [hasEmployees, setHasEmployees] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      getEmployeeHandler();
    };
    fetchEmployees();
  }, []);

  const getEmployeeHandler = async () => {
    try {
      const employeeData = await getEmployees();
      if (employeeData) {
        setEmployess([...employeeData]);
        setHasEmployees(true);
      }
    } catch (err) {
      console.error("Failed to fetch employees: ", err.message);
    }
  };

  const addEmployeeHandler = async (employeeData) => {
    try {
      const emp = await addEmployee(employeeData);
      if (emp) {
        const updatedEmployees =
          employees && employees.length > 0 ? [...employees, emp] : [emp];
        setEmployess([...updatedEmployees]);
        setHasEmployees(true);
      }
    } catch (err) {
      console.error("Failed to add employee: ", err.message);
    }
  };

  const editHandler = (employeeData) => {
    if(employeeData){      
    }
  };

  const removeHandler = async (employeeUserName) => {
    try {
      const emp = await deleteEmployee(employeeUserName);

      if (emp) {
        const updatedEmployees = employees.filter(
          (e) => e.username !== emp.username
        );

        if (updatedEmployees && updatedEmployees.length > 0) {
          setEmployess([...updatedEmployees]);
        } else {
          setHasEmployees(false);
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <FlexContainer>
      {!hasEmployees ? (
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
              {
                <EmployeeData
                  data={employees}
                  onRemove={removeHandler}
                  onEdit={editHandler}
                />
              }
            </tbody>
          </Table>
        </div>
      )}
      <div
        className={`d-flex ${
          hasEmployees ? "justify-content-end" : "justify-content-center"
        }`}
      >
        <EmployeeModalForm hadnleEmployeeData={addEmployeeHandler} />
      </div>
    </FlexContainer>
  );
};

export default EmployeeTable;
