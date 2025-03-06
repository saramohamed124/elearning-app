import { createContext, useEffect, useState } from "react";
import { getToken } from "../services/authServices";
import { api } from "../api/api";

export const INSTRUCTOR_INFO_ID = (id) => `Instructors/${id}`

export const InstructorProvider = createContext();

const InstructorInfoProvider = ({children}) => {
    const [instructor, setInstructor] = useState(null);
    const { id } = getToken();
    
    useEffect(() => {
        const fetchInstructorInfo = async() => {
            if(!id) return;
            try{
                const res = await api.get(INSTRUCTOR_INFO_ID(id))
                setInstructor(res.data.data);
            }catch(err){
                console.error("Fetching data Error.");
            }
        }
        
        fetchInstructorInfo();
    },[id])

  return (
    <InstructorProvider.Provider value={{instructor}}>
        {children}
    </InstructorProvider.Provider>
  )
}

export default InstructorInfoProvider
