import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import UserContext from "../context/user-context";
import { getEmployee } from "../util/EmployeeUtil";
import FlexContainer from "./FlexContainer";

const initialFormData = {
  username: "",
  password: "",
};

const Login = () => {
  const userContext = useContext(UserContext);

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {    
    e.preventDefault()
    try {
      const userData = await getEmployee(formData.username);
      console.log(userData);
      userContext.setUser(userData);
    } catch (err) {
      console.error("Unable to login: ", err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FlexContainer className='w-25'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter Username"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="name"
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </Form.Group>
        <div className=" d-flex justify-content-end gap-2">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </FlexContainer>
  );
};

export default Login;
