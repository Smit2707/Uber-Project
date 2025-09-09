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

  return (
    <div className='relative h-screen'>
      <h3 className='text-3xl absolute text-white pt-[6%] pl-[6%] font-[500] tracking-wider'>Uber</h3>
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="/uber_map2.png" alt="" />
      </div>
      <div className='absolute flex flex-col justify-end top-0 h-screen w-full'>
        <div className='h-[30%] p-6 bg-white'>
          {panelOpen ?
            <h5 onClick={() => setPanelOpen(false)} className='absolute top-6 right-5 text-xl px-2 font-bold text-white bg-black rounded-full'>
              <i className="ri-arrow-down-wide-fill"></i>
            </h5>
            :
            <h5 onClick={() => setPanelOpen(true)} className='absolute top-6 right-5 text-xl px-2 font-bold bg-white rounded-full'>
              <i className="ri-arrow-up-wide-line"></i>
            </h5>}

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
        <div ref={panelRef} className='h-[0%] bg-green-600'>
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  )
}

export default Home