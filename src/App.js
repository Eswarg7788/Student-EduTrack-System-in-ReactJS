import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
function Student () {
    const [regularStudents, setRegularStudents] = useState(1);
    const [remedialStudents, setRemedialStudents] = useState(2);
    const [paidClubStudents, setPaidClubStudents] = useState(3);
  return (
   <div className='dashboard-container'>
    
    <div class="dashboard">
      <img src={logo} className='hicet'></img>
     <a href=""><div  className='vertical'>Student Management</div></a> 
     <a href=""> <div  className='vertical'>Financial Management</div></a>
     <a href=""><div  className='vertical'>Quality Control</div></a> 
     <a href=""> <div  className='vertical'>Report Delivery</div></a>
     <a href=""> <div  className='vertical'>Attendance</div></a>
</div>
<div className='content'>
      <h2>Student Management</h2></div>
      <div className='ee'>
      <div style={{ display: 'flex', justifyContent: 'space-around', }}>
      <div style={{marginLeft:'300px', marginBottom:'400px', backgroundColor: 'red', padding: '60px', borderRadius: '10px', color: 'white' }}>
        <div style={{ fontSize: '2em' }}>{regularStudents}</div>
        <div>Regular Students</div>
      </div>
      <div style={{marginLeft:'20px', marginBottom:'400px', backgroundColor: 'purple', padding: '60px', borderRadius: '10px', color: 'white' }}>
        <div style={{ fontSize: '2em' }}>{remedialStudents}</div>
        <div>Remedial Students</div>
      </div>
      <div style={{marginLeft:'20px', marginBottom:'400px', backgroundColor: 'green', padding: '60px', borderRadius: '10px', color: 'white' }}>
        <div style={{ fontSize: '2em' }}>{paidClubStudents}</div>
        <div>In Paid Clubs</div>
      </div>
      
      </div>
    </div>
   </div>
  );
}

export default Student;