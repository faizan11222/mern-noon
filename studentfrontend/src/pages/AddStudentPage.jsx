import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"

//array of courses
const COURSES = ['MERN','React','Android','AI','Graphic'];

const AddStudentPage = () => {
   //hook that captures the input field values and update them
   const [formData, setFormData] = useState();
   //hook for loading state
    const [loading, setLoading] = useState(false);
    //hook for error handling
    const [error, setError] = useState({});
    //hook for handling the messages
    const [message, setMessage] = useState(null);

    const handleChange = () => {
      console.log('hi');
    }
    return(
        <div>
         <Container>
            <h1>Add Student Data</h1>
        <Form>
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