
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Consult.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Consult = () => {

  useEffect(() => {
    async function ConsultDoctor() {
      const DroductData = await axios.get("http://localhost:8000/doctors");
      setDoctor(DroductData.data);
    }
    ConsultDoctor();
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [doctor, setDoctor] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();    
    console.log('Appointment submitted:', { name, email, doctor, date, time });
  };

  return (
    <><div className="container bg-warning mt-5">
      <div className='col-md-12' id='backgImage'>
      <h2 className=" mb-4">Doctor Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">
            Doctor
          </label>
          <select
            className="form-select"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="">Select a doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
      </form>
      </div>
     
    </div>
    
    <div className="container mt-5">
        <h2 className="mb-4">Doctor Appointment</h2>
        
        
        <div className="row mt-5">
          {doctor.map((doctor) => (
            <><div className="col-md-4  mb-4" key={doctor.id}>
              <div className="card">
              <div className="bg-body pt-1">
                  <img
                    src={doctor.image}
                    className="card-img-top "
                    style={{ width: "40%" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">{doctor.specialization}</p>
                  <p className="card-text">{doctor.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Rating: {doctor.rating}</small>
                  {/* <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary">
                  Book Appointment
                </button>
                </form> */}
                </div>
                
             
              </div>
            </div></>
          ))}
        </div>
      </div></>
  );
};

export default Consult;