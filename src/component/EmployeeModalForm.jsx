import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const defaultFormData = {
  username: "",
  name: "",
  department: "",
  position: "",
};

function EmployeeModalForm(props) {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState(defaultFormData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { employeeData, isEdit, hadnleEmployeeData } = props;

  useEffect(() => {
    if (isEdit && employeeData) {
      setFormData({
        username: employeeData.username,
        name: employeeData.name,
        department: employeeData.department,
        position: employeeData.position,
      });
    }
  }, [isEdit, employeeData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEdit) {
      setFormData({
        ...formData,
        username: employeeData.username,
      });
    }
    hadnleEmployeeData(formData);
    setFormData(defaultFormData);
    handleClose();
  };

  return (
    <>
      <Button
        className={`${isEdit && "btn-warning"}`}
        variant="primary"
        onClick={handleShow}
      >
        {isEdit ? "Edit" : "Add"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${isEdit ? "Edit" : "Add"} Employee`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form onSubmit={handleSubmit}>
            {
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  disabled={isEdit}
                  name="username"
                  type="text"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>
            }
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control
                name="department"
                type="text"
                placeholder="Enter Department"
                value={formData.department}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                name="position"
                type="text"
                placeholder="Enter Position"
                value={formData.position}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div className=" d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EmployeeModalForm;
