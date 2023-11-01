import './index.css';
import { useState } from 'react';

const Login = () =>{
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  console.log(name);
  const clickHandler = () => {
    alert('Login successful');
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }
  const onChangePwHandler = (e) => {
    setPwd(e.target.value);
  }
  return (
    <div className="login">
        <div>username:<input onChange={onChangeNameHandler}/></div>
        <div>password:<input type="password" onChange={onChangePwHandler}/></div>
        <div><button onClick={clickHandler}>login</button></div>
    </div>
  );
}

export default Login;
