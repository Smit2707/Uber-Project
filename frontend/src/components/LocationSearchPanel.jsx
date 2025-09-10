import React from 'react'

const LocationSearchPanel = ({ vehiclePanelOpen, setVehiclePanelOpen, setPanelOpen }) => {
    console.log(vehiclePanelOpen)
    const location = [
        "24B-Kapoor's Cafe Sheriyans Coding School, Bhopal",
        "24B-Mahavirnagar, Himmatnagar, Gujarat",
        "Nyay Mandir Krishnanagar, Ahmedabad, Gujarat",
        "Sector-30, Gandhinagar, Gujarat",
    ]
    return (
        <div className='px-3 overflow-auto'>
            {
                location.map((elem, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setVehiclePanelOpen(true)
                                setPanelOpen(false)
                            }}
                            className='flex items-center my-3 w-full justify-start md:justify-center border-2 active:scale-95 border-[#eee] ease-in-out duration-150 p-3 rounded-xl gap-4'
                        >
                            <h2 className='bg-[#eee] h-8 w-8 p-2 flex justify-center items-center rounded-full'><i className="ri-map-pin-2-line"></i></h2>
                            <h4 className='text-sm font-semibold'>{elem}</h4>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default LocationSearchPanel