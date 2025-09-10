import React from 'react'
import VehicleCard from './VehicleCard'

const VehiclePanel = ({ setVehiclePanelOpen, setPanelOpen, setConfirmRidePanel }) => {
    return (
        <>
            <div className='flex items-center justify-between mb-5'>
                <h3 className='text-xl font-semibold'>Choose Your Ride</h3>
                <h5
                    onClick={() => {
                        setVehiclePanelOpen(false)
                        setPanelOpen(true)
                    }}
                ><i className="ri-arrow-go-back-line"></i></h5>
            </div>
            <VehicleCard setConfirmRidePanel={setConfirmRidePanel}  />
        </>
    )
}

export default VehiclePanel