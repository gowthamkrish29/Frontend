
const Employee = (props) => {

    const employee = props.employee;

  return (<>
  
  <h1 className="bg-black text-white m-3 p-3 font-bold text-2xl">Employee Details</h1>

  <div className="bg-pink-400 m-3 p-3 text-4xl font-semibold">
    <p className="mb-2">Name: {employee.name}</p>
    <p className="mb-2">Role: {employee.role}</p>
    <p className="mb-2">Salary: {employee.salary}</p>
    <p>City: {employee.city}</p>
  </div>
  
  
  </>)
}

export default Employee