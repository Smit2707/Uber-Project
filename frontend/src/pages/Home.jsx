import React, { useContext, useRef, useState } from 'react'
import { userDataContext } from '../context/UserContext'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const data = useContext(userDataContext);
  // console.log(data);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%"
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: "0%"
      })
    }
    gsap.to(panelRef.current, {
      ease: "elastic.inOut",
      duration: 2
    })
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehiclePanelOpen]);

  return (
    <div className='relative h-screen overflow-hidden'>
      <h3 className='text-3xl absolute text-white pt-[6%] pl-[6%] font-[500] tracking-wider'>Uber</h3>
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="/uber_map2.png" alt="" />
      </div>
      <div className='absolute flex flex-col justify-end top-0 h-screen w-full'>
        <div className='h-[30%] p-6 bg-white'>
          {
            !vehiclePanelOpen && (
              panelOpen ?
                <h5 onClick={() => setPanelOpen(false)} className='absolute top-6 right-5 text-xl px-2 font-bold text-white bg-black rounded-full'>
                  <i className="ri-arrow-down-wide-fill"></i>
                </h5>
                :
                <h5 onClick={() => setPanelOpen(true)} className='absolute top-6 right-5 text-xl px-2 font-bold bg-white rounded-full'>
                  <i className="ri-arrow-up-wide-line"></i>
                </h5>
            )
          }

          <h4 className='text-2xl font-semibold'>Find A Trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }}>
            <input
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] outline-none px-10 py-2 rounded-lg text-sm w-full mt-5 mb-2'
              type="text"
              placeholder='Add Your Pick-Up Location'
            />
            <input
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] outline-none px-10 py-2 rounded-lg text-sm w-full'
              type="text"
              placeholder='Add Your Destination Name'
            />
          </form>
        </div>
        <div ref={panelRef} className='h-[0%] bg-white'>
          <LocationSearchPanel vehiclePanelOpen={vehiclePanelOpen} setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 bg-white py-5 w-full px-3 translate-y-full'>
        <div className='flex items-center justify-between mb-5'>
          <h3 className='text-xl font-semibold'>Choose Your Ride</h3>
          <h5
            onClick={() => {
              setVehiclePanelOpen(false)
              setPanelOpen(true)
            }}
          ><i className="ri-arrow-go-back-line"></i></h5>
        </div>
        <div className='flex justify-between items-center bg-zinc-100 mb-3 rounded-xl w-full hover:border hover:border-black hover:bg-white duration-200 ease-in-out transition-all hover:scale-[1.015] cursor-pointer'>
          <img className='h-15' src="https://mobile-content.uber.com/launch-experience/ride.png" alt="" />
          <div className='flex flex-col text-sm w-1/2 p-2 leading-tight'>
            <h4 className='font-semibold'>UberGo <span><i className="ri-user-3-line font-medium"></i></span> 4</h4>
            <h5>2 mins a way</h5>
            <p className='text-xs text-gray-500'>Affordable, Compact Rides</p>
          </div>
          <h2 className='font-semibold text-xl pr-3'>Rs. 193</h2>
        </div>
        <div className='flex justify-between items-center bg-zinc-100 mb-3 rounded-xl w-full hover:border hover:border-black hover:bg-white duration-200 ease-in-out transition-all hover:scale-[1.015] cursor-pointer'>
          <img className='h-15' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png" alt="" />
          <div className='flex flex-col text-sm w-1/2 p-2 leading-tight'>
            <h4 className='font-semibold'>UberGo <span><i className="ri-user-3-line font-medium"></i></span> 4</h4>
            <h5>2 mins a way</h5>
            <p className='text-xs text-gray-500'>Affordable, Compact Rides</p>
          </div>
          <h2 className='font-semibold text-xl pr-3'>Rs. 193</h2>
        </div>
        <div className='flex justify-between items-center bg-zinc-100 mb-3 rounded-xl w-full hover:border hover:border-black hover:bg-white duration-200 ease-in-out transition-all hover:scale-[1.015] cursor-pointer'>
          <img className='h-10' src="https://imgs.search.brave.com/nf8BaJ2DzS-3XVL3_VQzPJo-Z0UYemmBssGvlLIkyEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDg0/MzE3NzMvYXNzZXRz/LzFkL2RiOGM1Ni0w/MjA0LTRjZTQtODFj/ZS01NmExMWEwN2Zl/OTgvb3JpZ2luYWwv/VWJlcl9BdXRvXzU1/OHgzNzJfcGl4ZWxz/X0Rlc2t0b3AucG5n" alt="" />
          <div className='flex flex-col text-sm w-1/2 p-2 leading-tight'>
            <h4 className='font-semibold'>UberGo <span><i className="ri-user-3-line font-medium"></i></span> 4</h4>
            <h5>2 mins a way</h5>
            <p className='text-xs text-gray-500'>Affordable, Compact Rides</p>
          </div>
          <h2 className='font-semibold text-xl pr-3'>Rs. 193</h2>
        </div>
      </div>
    </div>
  )
}

export default Home