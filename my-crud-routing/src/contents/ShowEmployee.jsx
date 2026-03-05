import React, { useEffect, useState } from 'react'
import { DeleteEmployee, ShowAllEmployees } from '../employeeservice';
import { useNavigate } from 'react-router-dom';
import "./ShowEmployee.css";


const ShowEmployee = () => {

let [employees, setEmployees] = useState([]);
let [refresh,setRefresh]=useState(false)
const navigate = useNavigate();

  useEffect(() => {
    loademployees();
  }, [refresh]);

  const loademployees = () => {
    ShowAllEmployees().then((res)=>{
        setEmployees(res.data)
    }).catch((err)=>console.log("error ",err))
  };

 const OnDelete = (id) => {
  const result = window.confirm("Are you sure you want to delete?");
  if (result) {
    DeleteEmployee(id)
      .then((res) => {
        console.log("Deleted", res);
        setRefresh(!refresh);
        alert("Employee deleted successfully");
      })
      .catch((err) => console.log("error", err));
  } else {
    console.log("Cancelled");
  }
};

  return (
    <div>
        <center>
      <h2 className="employee-title">Employee information </h2>
      <table className="employee-table" border="1">
      <thead>
         <tr>
             <th>ID</th>
             <th>NAME</th>
             <th>SAlARY</th>
             <th>ROLE</th>
             <th>Actions</th>
         </tr>
      </thead>
      <tbody>
      {employees.map(emp=>(
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{emp.name}</td>
          <td>{emp.salary}</td>
          <td>{emp.role}</td>
          <td>
            <button className="btn-edit" onClick={() => navigate(`/add/${emp.id}`) }> Edit </button>
            <button className="btn-delete" onClick={()=>{OnDelete(emp.id)}}>DELETE</button>
          </td>
        </tr>
       
      ))
      }
      </tbody>
      </table>
</center>

    </div>
  )
}

export default ShowEmployee
