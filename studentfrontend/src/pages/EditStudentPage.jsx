import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../../api/studentapi";

//array of courses
const COURSES = ['MERN','React','Android','AI','Graphic'];
const EditStudentPage = () => {
    //reads id from URL
    const {id} = useParams();
    const navigate = useNavigate();

    //hook that captures the input field values and update them
   const [formData, setFormData] = useState({
    name:'',
    email:'',
    course:'',
    marks:'',
    city:''
   });
    //hook for error handling
    const [error, setError] = useState({});
    //hook for handling the messages
    const [message, setMessage] = useState(null);
    //hook for fetching the student data
    const [fetchingStudent, setFetchingStudent] = useState(true);
    //hook for submitting the data
    const [submitting, setSubmitting] = useState(false);
    //hook for fetching the errors
    const [fetchError, setFetchError] = useState(null);

    //fetching the student data once
    useEffect(() => {
        const fetchStudent = async() => {
            try{
                setFetchingStudent(true);
                const data = await getStudentById(id);
                setFormData({
                    name: data.data.name,
                    email: data.data.email,
                    course: data.data.course,
                    marks: data.data.marks,
                    city: data.data.city,
                })
            }catch(err){
                setFetchError('Could not fetch the student')
            }finally{
                setFetchingStudent(false)
            }
        }
        fetchStudent()
    },[id])

    const handleChange = (e) => {
      const {name,value} = e.target;
      //passing my all input fields values into hook
      setFormData(prev => ({...prev,[name]:value}))
      console.log('updated data: ',{...formData,[name]:value})
    }

     //function that will run when user click the submit button of form
    const handleSubmit = async(e) => {
      //prevent button for refreshing the page
       e.preventDefault();
      try{
      setSubmitting(true);
      //calling the backend API
      const data = await updateStudent(id,{...formData});
      //redirecting to main page
      setTimeout(() => navigate('/'),2000)
      }catch(err){
        console.log(err);
      }finally{
        setSubmitting(false);
      }
    }
    return(
        <div>
            <Container>
                <h1>Edit Student Record</h1>
                <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control value="{formData.name}" onChange={handleChange} type="text" name="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Please enter your full name
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Please enter your valid email
        </Form.Text>
      </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course:</Form.Label>
        <Form.Select value={formData.course} onChange={handleChange} name="course">
          <option value="">--- Select any Course ---</option>
          { COURSES.map(c => <option value={c}>{c}</option>) }
        </Form.Select>
      </Form.Group> 


       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Marks (0-100):</Form.Label>
         <Form.Control value={formData.marks} onChange={handleChange} type="number" name="marks" placeholder="Enter marks" min={0} max={100} />
      </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City:</Form.Label>
         <Form.Control value={formData.city} onChange={handleChange} type="text" name="city" placeholder="Enter your city" />
      </Form.Group> 

      <div className="d-flex gap-2">
        <Button type="submit" variant="primary">Save Student</Button>
      </div>
      </Form>
            </Container>
        </div>
    )
}
export default EditStudentPage;