import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const url = `http://localhost:5000/checkouts?email=${user.email}`
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Bookings;