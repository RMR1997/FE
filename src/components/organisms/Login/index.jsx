import React, {useState} from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atoms/Button'
import axios from 'axios'

export default function Login() {
  const handleLogin = (event) => {
    // event.preventDefault();= buat mencegah halaman merefresh pada saat mensubmit suatu form
    event.preventDefault();
    //consolo.log yg ke 1
    console.log("terklik login");
    //event.target.email.value buat ngambil value yang ada di input form
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    //buat nge redirect ke hal lain

    alert("Login Succes!!");
    window.location.href = "/dashboard"
  };

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  //   const handleLogin = async(event) => {
  //       event.preventDefault();
  //       try {
  //         const {data} = await axios.post("http://localhost:3050/auth/login", {
  //           email:email,
  //           password:password,
  //         })

  //         localStorage.setItem("token", data.token)
  //         window.location.href = "/dashboard"
  //       } catch (error) {
  //         console.log(error);
  //       }
  //   };

  return (
    // <form onSubmit={handleLogin}>
    //           <InputForm 
    //   label="Email" 
    //   name="email" 
    //   value={email}
    //   onChange={(e) => {
    //     setEmail(e.target.value)
    //   }}
    //   type="email"
    //   placeholder="Email" 
    //   />

    //   <InputForm
    //     label="Password"
    //     type="password"
    //     name="password"
    //     value={password}
    //     onChange={(e) => {
    //       setPassword(e.target.value)
    //     }}
    //     placeholder="Masukkan password"
    //   />
    //     <Button color="bg-blue-600" text="text-white">
    //         Masuk
    //     </Button>
    // </form>
      <form onSubmit={handleLogin}>
        <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
        <InputForm label="Password" type="password" name="password" placeholder="Masukkan password" />
        <Button color="bg-blue-600" text="text-white">
          Masuk
        </Button>
      </form>
  );
}
