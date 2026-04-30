import { Container, Form } from "react-bootstrap"

const AddStudentPage = () => {
    return(
        <div>
         <Container>
            <h1>Add Student Data</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Please enter your full name
        </Form.Text>
      </Form.Group>
      </Form>
      </Container>
        </div>
    )
}
export default AddStudentPage