import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const CaptainRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      fullname: {
        firstname: data.firstname,
        lastname: data.lastname
      },
      email: data.email,
      password: data.password
    }
    console.log(payload)
    reset()
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full px-6 py-10 max-w-md mx-auto">
        <h3 className="text-3xl font-bold mb-7 text-black">Uber</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
          <div>
            <label className="text-lg font-semibold mb-2 block">What's our captain's name</label>
            <div className="flex gap-3">
              <input
                {...register('firstname', { required: true })}
                type="text"
                placeholder="First name"
                className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-1/2 outline-none"
              />
              <input
                {...register('lastname', { required: true })}
                type="text"
                placeholder="Last name"
                className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-1/2 outline-none"
              />
            </div>
            {(errors.firstname || errors.lastname) && (
              <span className="text-red-500 text-xs font-light mt-2 block">
                Both fields are required
              </span>
            )}
          </div>
          <div>
            <label className="text-lg font-semibold mb-2 block">What's our captain's email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="email@example.com"
              className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-xs font-light mt-2 block">This field is required</span>
            )}
          </div>
          <div>
            <label className="text-lg font-semibold mb-2 block">Enter Password</label>
            <input
              {...register('password', { required: true, minLength: 6 })}
              type="password"
              placeholder="password"
              className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
            />
            {errors.password && errors.password.type === "required" && (
              <span className="text-red-500 text-xs font-light mt-2 block">This field is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-500 text-xs font-light mt-2 block">Password must be at least 6 characters</span>
            )}
          </div>
          <button
            className={`bg-black text-white w-full py-2 rounded font-semibold text-lg transition-opacity disabled:opacity-50`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register As Captain"}
          </button>
        </form>
        <p className="mt-5 text-center text-sm font-medium">
          Already have an account? <Link to="/login-captain" className="text-blue-600 underline">Login</Link>
        </p>
        <Link
          to="/login"
          className="bg-[#579A21] block text-center text-sm w-full text-white px-4 py-2 rounded font-semibold mt-4"
        >
          Login As User
        </Link>
        <p className="mt-8 text-xs text-gray-600 text-left leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}
export default CaptainRegister
