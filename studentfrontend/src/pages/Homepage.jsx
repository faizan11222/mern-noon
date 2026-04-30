import { useEffect, useState } from "react";
import { deleteStudent, getAllStudents } from "../../api/studentapi";
import StudentCard from "../components/StudentCard";
import { Alert, Col, Row } from "react-bootstrap";

const HomePage = () => {
    //hook for getting students data
    const [students, setStudents] = useState([]);
    //hook for loading state
    const [loading, setLoading] = useState(false);
    //hook for error handling
    const [error, setError] = useState(null);
    //hook for handling the messages
    const [message, setMessage] = useState(null);

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

     //function that delete the student data
     const handleDelete = async(id) => {
        try{
            const data = await deleteStudent(id)
            //filtering the data after delete and then passing it to useState hook
            setStudents(prev => prev.filter(s => s._id !== id));
            setMessage({variant:'success', text:data.message})
        }catch(err){
            setMessage({variant:'danger', text:'Could not delete the Student'});
        }
        //removing the message after 3 seconds
        setTimeout(() => setMessage(null),3000)
     }
    return (
        <div>
            <h1>All Students Data</h1>
            {message && (
                <Alert variant={message.variant}>{message.text}</Alert>
            )}
            {/*loop*/}
            <Row xs={1} md={2} lg={3}>
            {students.map(s => (
                <Col>
                <StudentCard student={s} onDelete={handleDelete}/>
                </Col>
            ))}
            </Row>
        </div>
    )
}
export default HomePage;