import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "../../api/Axios"
import { userDataContext } from '../../context/UserContext'

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const navigate = useNavigate();

  const { userdata, setUserdata } = useContext(userDataContext);

  const onSubmit = async (userData) => {
    console.log(userData);
    try {
      const response = await axios.post("/api/auth/login", userData, { withCredentials: true });
      // console.log(response)
      if (response.status == 200) {
        toast.success("Login Successfull");
        navigate("/home");
        localStorage.setItem("token", response.data.token);
        setUserdata(userData);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    reset();
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full px-6 py-10 max-w-md mx-auto">
        <h3 className="text-3xl font-bold mb-7 text-black">Uber</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
          <div>
            <label className="text-lg font-semibold mb-2 block" htmlFor="email">What's your email address?</label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs font-light mt-2 block">This field is required</span>
            )}
          </div>
          <div>
            <label className="text-lg font-semibold mb-2 block" htmlFor="password">Enter Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              name="password"
              className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs font-light mt-2 block">This field is required</span>
            )}
          </div>
          <button
            className={`bg-black text-white w-full py-2 rounded font-semibold text-lg transition-opacity disabled:opacity-50`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-5 text-center text-sm font-medium">
          Don't have an account? <Link to="/register" className="text-blue-600 underline">Register</Link>
        </p>
        <Link
          to="/login-captain"
          className="bg-[#276EF1] block text-center text-sm w-full text-white px-4 py-2 rounded font-semibold mt-4"
        >
          Login As Captain
        </Link>
        <p className="mt-8 text-xs text-gray-600 text-left leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}
export default Login
