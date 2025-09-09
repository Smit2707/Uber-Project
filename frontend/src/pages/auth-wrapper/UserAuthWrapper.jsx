import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAuthWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token])
    return (
        <>
            {children}
        </>
    )
}

export default UserAuthWrapper;