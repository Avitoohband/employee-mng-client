import React from "react";
import { Button } from "react-bootstrap";

const EmployeeData = (props) => {
  const { data } = props;
  return data.map((employee) => (
    <tr key={employee.username}>
      <td>{employee.username}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.position}</td>
      <td class="d-flex justify-content-evenly">
        <Button className="btn-warning">Remove</Button>
        <Button className="btn-warning">Edit</Button>
      </td>
    </tr>
  ));
};

export default EmployeeData;