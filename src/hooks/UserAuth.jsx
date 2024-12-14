import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const UserAuth = ()=>{
    const context = useContext(AuthContext);
    return context;
}

export default UserAuth;