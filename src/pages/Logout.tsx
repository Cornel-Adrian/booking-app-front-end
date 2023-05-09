import { useSignOut } from 'react-auth-kit'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'





function Logout() {
    const signOut = useSignOut()
    const navigate = useNavigate();

    useEffect(() => {
        signOut();
        navigate('/login');
    }, [])
    return (
        <div>Logout</div>
    )
}

export default Logout