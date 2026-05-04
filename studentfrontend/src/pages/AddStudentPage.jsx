import { Button, Container, Form } from "react-bootstrap"

const AddStudentPage = () => {
    return(
        <div>
         <Container>
            <h1>Add Student Data</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Please enter your full name
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Please enter your valid email
        </Form.Text>
      </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course:</Form.Label>
        <Form.Select name="course">
          <option value="">--- Select any Course ---</option>
        </Form.Select>
      </Form.Group> 


       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Marks (0-100):</Form.Label>
         <Form.Control type="number" name="marks" placeholder="Enter marks" min={0} max={100} />
      </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City:</Form.Label>
         <Form.Control type="text" name="city" placeholder="Enter your city" />
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