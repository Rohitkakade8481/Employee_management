import React, { useEffect, useState } from 'react'
import { AddEmployees, GetEmployees, UpdateEmployee } from '../employeeservice';
import { useNavigate, useParams } from 'react-router-dom';
import "./AddEmployee.css";


const AddEmployee = () => {

    const [form, setForm] = useState({ name: "",salary: "",role: ""});
    const { id } = useParams();   
    const navigate = useNavigate();

   useEffect(() => {
    if (id) {
      GetEmployees(id).then((res) => {
        const emp = res.data;
       setForm({
       name: emp.name,       
       salary: emp.salary,  
       role: emp.role    
  });
      });
    }else {
    setForm({ name: "", salary: "", role: "" });
  }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm =()=>{
    setForm({ name: "", salary: "", role: ""});
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
       if (id) {
      UpdateEmployee(id, form)
        .then((res) => {
          window.alert("Employee Updated Successfully");
          navigate("/showall");
        })
        .catch((err) => console.log(err));
    } else {
      AddEmployees(form)
        .then((res) => {
          window.alert("Employee Added Successfully");
          resetForm();
          navigate("/showall")
        })
        .catch((err) => console.log(err));
    }
  };
    
  return (
    <div  >
      
      <div className="employee-container">
      <center>

         <h2>{id ? "Edit Employee" : "Add Employee"}</h2>

     <form onSubmit={handleSubmit}>
    
     
     <input type="text" name="name" value={form.name} required onChange={handleChange} placeholder='enter name'/> <br /> <br />

    
     <input type="number" name="salary"  value={form.salary} required onChange={handleChange} placeholder='salary'/> <br /> <br />

    
     <input type="text"  name="role" value={form.role} required onChange={handleChange} placeholder='role' /> <br /> <br />

       <button type="submit">
          {id ? "Update Employee" : "Add Employee"}
        </button>
    
      </form>
      </center>
      </div>
    </div>
  )
}

export default AddEmployee
