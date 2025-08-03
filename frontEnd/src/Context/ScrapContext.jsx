import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ScrapContext=createContext()

const ScrapContextProvider=(props)=>{
    const navigate=useNavigate()
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [token,setToken]=useState(localStorage.getItem('token')? localStorage.getItem('token'):'')
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || '');
      const [user,setUser]=useState([])

      useEffect(()=>{
        const fetchUser=async()=>{
          const response=await axios.get(`${backendUrl}/user/profile`,{headers:{token}})
          // console.log(response.data.user)
          setUser(response.data.user)
         
        }
        fetchUser()
       
      },[])
    
    useEffect(() => {
      // whenever userRole changes, store it
      if (userRole) {
        localStorage.setItem('userRole', userRole);
      }
    }, [userRole]);
  

    useEffect(()=>{
        console.log(backendUrl)
    },[])



    const value={navigate, backendUrl, token, setToken,userRole, setUserRole, user,setUser }


    return(
        <ScrapContext.Provider value={value}>
            {props.children}
        </ScrapContext.Provider>
    )
}

export default ScrapContextProvider