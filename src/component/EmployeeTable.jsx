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
      getEmployeeHelper();
    };
    fetchEmployees();
  }, []);

  const getEmployeeHelper = async () => {
    try {
      const employeeData = await getEmployees();
      if (employeeData) {
        setEmployess(employeeData);
        setHasEmployees(true);
      } else {
        setHasEmployees(false);
      }
    } catch (err) {
      console.error("Failed to fetch employees: ", err.message);
    }
  };

  const addEmployeeHelper = async (employeeData) => {
    try {
      await addEmployee(employeeData);
      await getEmployeeHelper();
    } catch (err) {
      console.error("Failed to add employee: ", err.message);
    }
  };
  const removeHandler = async (employeeUserName) => {
    await deleteEmployee(employeeUserName);
    await getEmployeeHelper();
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
              {<EmployeeData data={employees} remove={removeHandler} getEmployeeHandler={getEmployeeHelper} />}
            </tbody>
          </Table>
        </div>
      )}
      <div
        className={`d-flex ${
          hasEmployees ? "justify-content-end" : "justify-content-center"
        }`}
      >
        <EmployeeModalForm hadnleEmployeeData={addEmployeeHelper} />
      </div>
    </FlexContainer>
  );
};

export default EmployeeTable;
