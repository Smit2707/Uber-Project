import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from "../../api/Axios"
import { CaptainDataContext } from '../../context/CaptainContext'
import { toast } from 'react-toastify'
const CaptainLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate();

  const onSubmit = async (captainData) => {
    console.log(captainData);
    try {
      const response = await axios.post("/api/captain/login", captainData, { withCredentials: true });
      console.log(response);
      if (response.status == 200) {
        toast.success("Captain Login Successfully.")
        navigate("/captain-home");
        localStorage.setItem("captainToken", response.data.token);
        // setCaptain(response.data.captain);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-white">
      <div className="w-full h-full flex flex-col items-center justify-center px-6 py-10">
        <h3 className="text-3xl font-bold mb-7 text-black">Uber</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full max-w-md mx-auto"
        >
          <div>
            <label className="text-lg font-semibold mb-2 block" htmlFor="email">
              What's your email address?
            </label>
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
            <label className="text-lg font-semibold mb-2 block" htmlFor="password">
              Enter Password
            </label>
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
            {isSubmitting ? "Logging in..." : "Captain Login"}
          </button>
        </form>
        <p className="mt-5 text-center text-sm font-medium">
          Don't have an account? <Link to="/register-captain" className="text-blue-600 underline">Register</Link>
        </p>
        <Link
          to="/login"
          className="bg-[#579A21] block text-center text-sm w-full max-w-md mx-auto text-white px-4 py-2 rounded font-semibold mt-4"
        >
          Login As User
        </Link>
        <p className="mt-8 text-xs text-gray-600 text-left leading-tight max-w-md mx-auto">
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainLogin;
