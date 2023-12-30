

export const getEmployees = async () => {
  const url = "http://localhost:3001/api/employee";
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Something went wrong!");
  }
};


