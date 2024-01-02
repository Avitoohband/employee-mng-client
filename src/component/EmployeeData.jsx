import React from "react";
import { Button } from "react-bootstrap";
import EmployeeModalForm from "./EmployeeModalForm";
import { editEmployee } from "../util/EmployeeUtil";

const EmployeeData = (props) => {
  const { data, onEdit } = props;

  const editEmployeeData = async (employeeData) => {
    try {
      const emp = await editEmployee(employeeData);
      onEdit(emp);
    } catch (err) {
      console.error("Cannot remove Employee!");
    }
  };

  return data.map((employee) => (
    <tr key={employee.username}>
      <td>{employee.username}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.position}</td>
      <td className="d-flex justify-content-evenly">
        <EmployeeModalForm
          isEdit
          hadnleEmployeeData={editEmployeeData}
          employeeData={employee}
        />
        <Button
          className="btn-danger"
          onClick={() => {
            props.onRemove(employee.username);
          }}
        >
          Remove
        </Button>
      </td>
    </tr>
  ));
};

export default EmployeeData;
