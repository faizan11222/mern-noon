import { useEffect, useState } from "react";
import { getAllStudents } from "../../api/studentapi";
import StudentCard from "../components/StudentCard";

const HomePage = () => {
    //hook for getting students data
    const [students, setStudents] = useState([]);
    //hook for loading state
    const [loading, setLoading] = useState(false);
    //hook for error handling
    const [error, setError] = useState(null);

    //function to get all students data
    const fetchStudents = async() => {
        try{
            setLoading(true);
            setError(null);
            const data = await getAllStudents()
            //passing the data to hook useState
            setStudents(data.data)
        }catch(error){
            setError('could not find Student!')
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    //using useEffect to render the data automatically
    useEffect(() => {
        fetchStudents()
    },[])
    return (
        <div>
            <h1>All Students Data</h1>
            {/*loop*/}
            {students.map(s => (
                <StudentCard student={s} />
            ))}
        </div>
    )
}
export default HomePage;