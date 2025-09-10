import React from 'react'

const VehicleCard = ({ setConfirmRidePanel }) => {
    let vehicleData = [
        {
            vehicleType: "UberGo",
            vehicleCapacity: 4,
            src: "https://mobile-content.uber.com/launch-experience/ride.png",
            time: "2 mins a way",
            price: "Rs. 193",
            afford: "Affordable, Compact Rides"
        },
        {
            vehicleType: "Moto",
            vehicleCapacity: 1,
            src: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png",
            time: "2 mins a way",
            price: "Rs. 81",
            afford: "Affordable, Compact Rides"
        },
        {
            vehicleType: "UberAuto",
            vehicleCapacity: 2,
            src: "https://imgs.search.brave.com/nf8BaJ2DzS-3XVL3_VQzPJo-Z0UYemmBssGvlLIkyEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE2NDg0/MzE3NzMvYXNzZXRz/LzFkL2RiOGM1Ni0w/MjA0LTRjZTQtODFj/ZS01NmExMWEwN2Zl/OTgvb3JpZ2luYWwv/VWJlcl9BdXRvXzU1/OHgzNzJfcGl4ZWxz/X0Rlc2t0b3AucG5n",
            time: "2 mins a way",
            price: "Rs. 105",
            afford: "Affordable, Compact Rides"
        },
    ]
    // console.log(vehicleData);
    return (
        <>
            {
                vehicleData.map((elem, index) => {
                    return (
                        <div
                            onClick={() => {
                                setConfirmRidePanel(true);
                            }}
                            key={index}
                            className='flex justify-between items-center bg-zinc-100 mb-3 rounded-xl w-full hover:border hover:border-black hover:bg-white duration-200 ease-in-out transition-all hover:scale-[1.015] cursor-pointer'
                        >
                            <img className='h-15' src={elem.src} alt={elem.vehicleType} />
                            <div className='flex flex-col text-sm w-1/2 p-2 leading-tight'>
                                <h4 className='font-semibold'>{elem.vehicleType} <span><i className="ri-user-3-line font-medium"></i></span> {elem.vehicleCapacity}</h4>
                                <h5>{elem.time}</h5>
                                <p className='text-xs text-gray-500'>{elem.afford}</p>
                            </div>
                            <h2 className='font-semibold text-xl pr-3'>{elem.price}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default VehicleCard;