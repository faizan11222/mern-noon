import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { addStudent } from "../../api/studentapi";
import { useNavigate } from 'react-router-dom';

//array of courses
const COURSES = ['MERN','React','Android','AI','Graphic'];

const AddStudentPage = () => {
  //using navigator to redirect the page
  const navigate = useNavigate();
   //hook that captures the input field values and update them
   const [formData, setFormData] = useState({
    name:'',
    email:'',
    course:'',
    marks:'',
    city:''
   });
   //hook for loading state
    const [loading, setLoading] = useState(false);
    //hook for error handling
    const [error, setError] = useState({});
    //hook for handling the messages
    const [message, setMessage] = useState(null);

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
      //calling the backend API
      const data = await addStudent({...formData});
      //redirecting to main page
      setTimeout(() => navigate('/'),2000)
    }

    //function that handle form validations
    const validateForm = () => {
      const newErrors = {};
      if(!formData.name){
        newErrors.name = 'Please enter your Full name!'
      }
      if(!formData.email){
        newErrors.email = 'Please enter your Email!'
      }
      if(!formData.course){
        newErrors.course = 'Please select your course!'
      }
      if(formData.marks === ''){
        newErrors.marks = 'Marks field is required. Enter marks!'
      }
      if(!formData.city){
        newErrors.city = 'Please enter your City!'
      }
      //passing all the errors to Hook
      setError(newErrors)
      
    }
    return(
        <div>
         <Container>
            <h1>Add Student Data</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Please enter your full name
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Please enter your valid email
        </Form.Text>
      </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course:</Form.Label>
        <Form.Select onChange={handleChange} name="course">
          <option value="">--- Select any Course ---</option>
          { COURSES.map(c => <option value={c}>{c}</option>) }
        </Form.Select>
      </Form.Group> 


       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Marks (0-100):</Form.Label>
         <Form.Control onChange={handleChange} type="number" name="marks" placeholder="Enter marks" min={0} max={100} />
      </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City:</Form.Label>
         <Form.Control onChange={handleChange} type="text" name="city" placeholder="Enter your city" />
      </Form.Group> 

      <div className="d-flex gap-2">
        <Button type="submit" variant="primary">Save Student</Button>
      </div>
      </Form>
      </Container>
        </div>
    )
}
export default AddStudentPage