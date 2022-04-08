import { useState } from 'react';
import React from 'react'
export const Form = () => {

  const [name, setName] = useState('');
  const [lname, setlname] = useState('');
  const [country, setcountry] = useState('');


  return (

    <div className="create">
      <h2>Add Details</h2>
      <form>
        <label>firstname</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Last name</label>
        <textarea
          required
          value={lname}
          onChange={(e) => setlname(e.target.value)}
        />
        <label>country</label>
        <select
          value={country}
          onChange={(e) => setcountry(e.target.value)}
        >
          <option value="USA">USA</option>
          <option value="India">India</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form
