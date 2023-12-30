export const getEmployees = async () => {
  const url = "http://localhost:3001/api/employee";
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message + '.');
  }
};

export const deleteEmployee = async (employeeUserName) => {
  try {
    const url = `http://localhost:3001/api/employee/${employeeUserName}` ;
    const respons = await fetch(url, {
      method: "DELETE",
    });
    const data = await respons.json();
    return data;
  } catch (err) {
    console.log(err.message + '.');
  }
};

export const addEmployee = async (employeeData) => {
  try {
    const url = `http://localhost:3001/api/employee` ;
    const respons = await fetch(url, {
      method: "POST",  
      headers:{
        "Content-Type": "application/json",       
      },
      body: employeeData
    });

    const data = await respons.json();
    return data;
  } catch (err) {
    console.log(err.message + '.');
  }
};
