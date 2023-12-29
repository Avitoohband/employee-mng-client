import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import React from 'react'

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
  return (      
    <div class="d-flex flex-column">
    <Table responsive striped boardered hover variant="dark">
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Department</th>
          <th>Position</th>
         
        </tr>
      </thead>

        <tbody>{
          demoData.map(demo => (
            <tr key={demo.username}>
              <td>{demo.username}</td>
              <td>{demo.name}</td>
              <td>{demo.department}</td>
              <td>{demo.position}</td>
              <td class="d-flex justify-content-evenly"><Button className="btn-warning">Remove</Button><Button className="btn-warning">Edit</Button></td>
            </tr>
          ))
          }</tbody>
    </Table>
    <div class="d-flex justify-content-end">
    <Button style={{width:'10%'}}>Add Employee</Button>

    </div>
    </div>
  );
};
export default EmployeeTable;
