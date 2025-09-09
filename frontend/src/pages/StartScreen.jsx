import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const StartScreen = () => {
  return (
    <div className='h-screen w-full'>
      <div className='bg-[url("https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1344/height=896/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hM2NmODU2NC1lMmE2LTQxOGMtYjliMC02NWRkMjg1YzEwMGIuanBn")] bg-cover bg-center h-[80%] w-full'>
        {/* <img src="https://imgs.search.brave.com/PFUVRSLMkJrpRUDx0GRSiqhB8nUIr7GKfiwHneacgxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy91/YmVyLXRheGktd2hp/dGUtbG9nby1oZC1w/bmctNzAxNzUxNjk0/NzA3MjEzYXJzYWpn/bmVidS5wbmc" className='h-20' alt="" /> */}
        <h3 className='text-3xl text-black pt-[6%] pl-[6%] font-[600] tracking-wider'>Uber</h3>
      </div>
      <div className='flex flex-col flex-1 h-[20%] text-black px-4 pt-4'>
        <h2 className='text-2xl font-semibold'>Get Started With Uber</h2>
        <Link
          to="/login"
          className='w-full flex items-center justify-center gap-3 bg-black rounded font-[400] text-lg mt-3 text-white text-center py-1'
        >
          Continue
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  )
}

export default StartScreen