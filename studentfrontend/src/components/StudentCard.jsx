import { Card, Button, Badge } from "react-bootstrap";
const StudentCard = () => {
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Faizan Sohail</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">faizan@gmail.com</Card.Subtitle>
        <Card.Text>
          <div><strong>Course:</strong>React</div>
          <div><strong>City:</strong>Lahore</div>
          <div><strong>Marks: </strong><Badge>80</Badge></div>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="success">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
      </Card.Footer>
    </Card>
    )
}
export default StudentCard;