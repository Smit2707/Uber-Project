import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../../context/CaptainContext'
import axios from "../../api/Axios"
import { toast } from 'react-toastify'

const CaptainRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const payload = {
      fullName: {
        firstName: data.firstname,
        lastName: data.lastname
      },
      email: data.email,
      password: data.password,
      vehicle: {
        color: data.vehicleColor,
        capacity: Number(data.vehicleCapacity),
        plate: data.vehiclePlate,
        vehicleType: data.vehicleType
      },
      status: data.status, // added status here
      location: {
        latitude: data.latitude ? Number(data.latitude) : undefined,
        longitude: data.longitude ? Number(data.longitude) : undefined
      }
    }
    try {
      const response = await axios.post("/api/captain/register", payload, { withCredentials: true })
      console.log(response)
      if (response.status == 201) {
        toast.success("Captain Registered Successfully.")
        navigate("/captain-login");
        // setCaptain(payload);
        reset();
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || "Registration failed.")
    }
    // reset()
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full px-6 py-10 max-w-md mx-auto">
        <h3 className="text-3xl font-bold mb-7 text-black">Uber</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
          {/* Name */}
          <div>
            <label className="text-lg font-semibold mb-2 block">What's our captain's name</label>
            <div className="flex gap-3">
              <input
                {...register('firstname', { required: true, minLength: 2 })}
                type="text"
                placeholder="First name"
                className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-1/2 outline-none"
              />
              <input
                {...register('lastname', { required: true, minLength: 2 })}
                type="text"
                placeholder="Last name"
                className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-1/2 outline-none"
              />
            </div>
            {(errors.firstname || errors.lastname) && (
              <span className="text-red-500 text-xs font-light mt-2 block">
                Both fields required, min 2 characters
              </span>
            )}
          </div>
          {/* Email */}
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
          {/* Password */}
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
          {/* Vehicle Details: 2-column grid */}
          <div>
            <label className="text-lg font-semibold mb-2 block">Vehicle Details</label>
            <div className="grid grid-cols-2 gap-4">
              {/* Color */}
              <div>
                <input
                  {...register('vehicleColor', { required: true, minLength: 3 })}
                  type="text"
                  placeholder="Color"
                  className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
                />
                {errors.vehicleColor && (
                  <span className="text-red-500 text-xs font-light mt-2 block">
                    At least 3 characters
                  </span>
                )}
              </div>
              {/* Capacity */}
              <div>
                <input
                  {...register('vehicleCapacity', {
                    required: true,
                    valueAsNumber: true,
                    min: 1
                  })}
                  type="number"
                  placeholder="Capacity"
                  className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
                />
                {errors.vehicleCapacity && (
                  <span className="text-red-500 text-xs font-light mt-2 block">
                    Must be at least 1
                  </span>
                )}
              </div>
              {/* Plate */}
              <div>
                <input
                  {...register('vehiclePlate', { required: true, minLength: 3 })}
                  type="text"
                  placeholder="Plate"
                  className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
                />
                {errors.vehiclePlate && (
                  <span className="text-red-500 text-xs font-light mt-2 block">
                    At least 3 characters
                  </span>
                )}
              </div>
              {/* Type */}
              <div>
                <select
                  {...register('vehicleType', { required: true })}
                  className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
                  defaultValue="car"
                >
                  <option value="car">Car</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="auto">Auto</option>
                </select>
                {errors.vehicleType && (
                  <span className="text-red-500 text-xs font-light mt-2 block">
                    Select vehicle type
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Status */}
          <div>
            <label className="text-lg font-semibold mb-2 block">Status</label>
            <select
              {...register('status', { required: true })}
              className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
              defaultValue="inactive"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && (
              <span className="text-red-500 text-xs font-light mt-2 block">
                Please select status.
              </span>
            )}
          </div>
          {/* Location (Optional, not required) */}
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="text-lg font-semibold mb-2 block">Latitude</label>
              <input
                {...register('latitude', { pattern: /^-?\d+(\.\d+)?$/ })}
                type="text"
                placeholder="Latitude"
                className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="text-lg font-semibold mb-2 block">Longitude</label>
              <input
                {...register('longitude', { pattern: /^-?\d+(\.\d+)?$/ })}
                type="text"
                placeholder="Longitude"
                className="bg-[#EEEEEE] text-base font-medium px-4 py-2 rounded w-full outline-none"
              />
            </div>
          </div>
          {/* Submit Button */}
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
