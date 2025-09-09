import React, { Children, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "../../api/Axios"
import { CaptainDataContext } from '../../context/CaptainContext';
const CaptainAuthWrapper = ({ children }) => {

    const token = localStorage.getItem("captainToken");
    const [loading, setLoading] = useState(true);
    const { captain, setCaptain } = useContext(CaptainDataContext)

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login-captain");
            return;
        }

        let isMounted = true;
        axios.get("/api/captain/profile", { withCredentials: true })
            .then(res => {
                if (!isMounted) return;
                if (res.status == 200) {
                    setCaptain(res.data.captain)
                }
            })
            .catch(err =>{
                console.log(err);
                navigate("/login-captain")
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false };
    }, [token, navigate, setCaptain]);

    if(loading){
        return <div className='w-full h-screen text-center font-semibold'>
            Loading...
        </div>
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default CaptainAuthWrapper