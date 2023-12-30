import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import EmployeeData from "./EmployeeData";
import {getEmployees} from "../util/EmployeeUtil";

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

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeData = await getEmployees();
      if (employeeData) {
        setEmployess(employeeData);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div class="d-flex flex-column">
      <Table responsive striped hover variant="dark">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
          </tr>
        </thead>

        <tbody>{<EmployeeData data={employees} />}</tbody>
      </Table>
      <div class="d-flex justify-content-end">
        <Button style={{ width: "10%" }}>Add</Button>
      </div>
    </div>
  );
};
export default EmployeeTable;
