import React, { useContext, useRef, useState } from 'react'
import { userDataContext } from '../context/UserContext'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const data = useContext(userDataContext);
  // console.log(data);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const driverFoundRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [driverFound, setDriverFound] = useState(false);
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

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [vehicleFound]);
  
  useGSAP(() => {
    if (driverFound) {
      gsap.to(driverFoundRef.current, {
        transform: "translateY(0)"
      })
    }
    else {
      gsap.to(driverFoundRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [driverFound]);

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
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 bg-white py-5 w-full px-3 translate-y-full'>
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 bg-white py-5 w-full px-3 translate-y-full'>
        <LookingForDriver setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      <div
        ref={driverFoundRef}
        className='fixed z-10 bottom-0 bg-white py-5 w-full px-3 translate-y-full'
      >
        <WaitingForDriver
          setVehicleFound={setVehicleFound}
          setDriverFound={setDriverFound}
        />
      </div>
    </div>
  )
}

export default Home