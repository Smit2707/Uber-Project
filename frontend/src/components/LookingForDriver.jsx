import React from 'react'

const LookingForDriver = ({setConfirmRidePanel, setVehicleFound}) => {
    return (
        <>
            <div className='flex items-center justify-between mb-5'>
                <h3 className='text-xl font-semibold'>Looking For A Driver</h3>
                <h5
                    onClick={() => {
                        setConfirmRidePanel(true)
                        setVehicleFound(false)
                    }}
                ><i className="ri-arrow-go-back-line"></i></h5>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-center items-center'>
                    <img className='h-30 animate-pulse' src="https://mobile-content.uber.com/launch-experience/ride.png" alt="" />
                </div>
                <div className='w-full'>
                    <div className='flex justify-start items-center gap-3 border-t p-3 border-t-[#1111116b]'>
                        <i className="ri-map-pin-line"></i>
                        <div>
                            <h3 className='font-semibold text-base'>Street No. 15, Rajendranagar</h3>
                            <p className='text-[#555] text-sm'>New Delhi, India</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 border-t p-3 border-t-[#1111116b]'>
                        <i className="ri-map-pin-range-line"></i>
                        <div>
                            <h3 className='font-semibold text-base'>Third Wave Coffee</h3>
                            <p className='text-[#555] text-sm'>Near Law Garden, West Delhi, India</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 border-t p-3 border-t-[#1111116b]'>
                        <i className="ri-wallet-3-fill"></i>
                        <div>
                            <h3 className='font-semibold text-base'>$30</h3>
                            <p className='text-[#555] text-sm'>Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LookingForDriver