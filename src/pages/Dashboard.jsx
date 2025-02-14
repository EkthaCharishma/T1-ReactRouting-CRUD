import React, {useState} from 'react'
import Styles from "./form.module.css";

const Dashboard = () => {
  // return(
  //   <div>DashBoard</div>
  // )
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState('');
  const [country, setCountry] = useState('');

  return (
    <div className='{Styles.formBlock}'>
      <input type="text" placeholder='enter username'/><br/>
      <input type="email" placeholder='enter email'/><br/>
      <input type="password" placeholder='enter password'/><br/>
      <input type="radio" name='gender'/><label htmlFor=''>Male</label>
      <input type="radio" name='gender'/><label htmlFor=''>Female</label>
      <input type="radio" name='gender'/><label htmlFor=''>Others</label>
      <br/>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      <br/>
      <input type="file"/><br/>
      <select name="" id="">
        <option value="">---Select Country---</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="china">China</option>
      </select>
      <button type="submit" value="Signup"></button>
    </div>
  )
}

export default Dashboard
