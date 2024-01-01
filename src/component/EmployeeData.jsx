import React from "react";
import { Button } from "react-bootstrap";
import EmployeeModalForm from "./EmployeeModalForm";
import { editEmployee } from "../util/EmployeeUtil";

const EmployeeData = (props) => {   
  const { data, getEmployeeHandler } = props;

  const editEmployeeData = async (employeeData) =>{
      await editEmployee(employeeData);
      await getEmployeeHandler();
  }


  return data.map((employee) => (
    <tr key={employee.username}>
      <td>{employee.username}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.position}</td>
      <td className="d-flex justify-content-evenly">
        <EmployeeModalForm isEdit hadnleEmployeeData={editEmployeeData} employeeData={employee}/>
        <Button className="btn-danger" onClick={()=>{
          props.remove(employee.username)
        }}>Remove</Button>
      </td>
    </tr>
  ));
};

export default EmployeeData;
