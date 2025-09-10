import React from 'react'

const WaitingForDriver = ({ setVehicleFound, setDriverFound }) => {
    return (
        <>
            <div className='flex items-center justify-between mb-5'>
                <h3 className='text-xl font-semibold'>Driver Details</h3>
                <h5
                    onClick={() => {
                        setVehicleFound(true)
                        setDriverFound(false)
                    }}
                ><i className="ri-arrow-go-back-line"></i></h5>
            </div>
            <div className='flex flex-col gap-2'>
                <div className="flex items-center gap-3 mb-3">
                    {/* Profile photo (placeholder) */}
                    <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white flex-shrink-0">
                        {/* Insert driver's profile image here */}
                        <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    {/* Car Image (placeholder) */}
                    <div className="w-20 h-14 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {/* Insert vehicle image here */}
                        <img src="https://imgs.search.brave.com/i4J-DPc6hEhvHrYYByz_HzS99AlOuUIfn8amoOkvIcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/TWFydXRpL1MtUHJl/c3NvLzEwMzQ4L01h/cnV0aS1TLVByZXNz/by1MWGkvMTY4NzUx/OTMwNzk0My9mcm9u/dC1sZWZ0LXNpZGUt/NDcuanBnP3RyPXct/NjY0" alt="" />
                    </div>
                    {/* Driver name and edit/back */}
                    <div className="ml-2 flex flex-col flex-1">
                        <div className="flex items-center justify-between">
                            <span className="text-xs uppercase font-semibold tracking-wide text-gray-600">SMIT</span>
                        </div>
                        {/* Vehicle number plate */}
                        <div className="text-2xl font-bold tracking-wider">GJ-07-FY-0007</div>
                        {/* Vehicle model */}
                        <div className="text-sm text-gray-700">White Suzuki S-Presso LXI</div>
                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-1">
                            <span className="text-yellow-500 text-base"><i className="ri-star-s-fill"></i></span>
                            <span className="text-base font-semibold">4.9</span>
                        </div>
                    </div>
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

export default WaitingForDriver