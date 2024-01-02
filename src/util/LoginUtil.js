const login = async (employeeData) => {
  try {    
    const response = await fetch("http://localhost:3001/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...employeeData }),
    });

    if (response.status === 400) {      
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {    
    
    console.error(err.message);
  }
};

export default login;
