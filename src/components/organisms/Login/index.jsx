import { useState } from "react";

//import InputForm from "../../molecules/InputForm";
import axios from "axios";
import Button from "../../atoms/Button";
import swal from "sweetalert";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3006/login", {
        email: email,
        password: password,
      })

      localStorage.setItem("token", data.token)
      setLoginError(false);
      swal("Berhasil", "Login Berhasil", "success").then(() => {
        window.location.href = "/dashboard";
      });
    } catch (error) {
      setLoginError(true);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>

      <div className="mb-6 h-52">

        <div className="mb-6 ">
          <label className=" font-bold" htmlFor="">Email</label>
          <input className='mt-2 w-96 text-sm border border-gray-400 rounded-md w-full py-2 px-3 text-slate-700 placeholder:text-slate-400'
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="Email" />
        </div>

        <div>
          <label className="font-bold" htmlFor="">Password</label>
          <input className='mt-2 text-sm border border-gray-400 rounded-md w-full py-2 px-3 text-slate-700 placeholder:text-slate-400'
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password" />
        </div>
      </div>

      <Button color="bg-green-600 p-2" text="text-white">
        <p className="p-2">Masuk</p>
      </Button>

      {loginError && (
        <div className="text-red-500 mt-2">Username atau password tidak ditemukan</div>
      )}
    </form>
  );
}