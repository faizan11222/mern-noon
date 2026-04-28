import { Card, Button, Badge } from "react-bootstrap";
const StudentCard = ({ student }) => {
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{student.email}</Card.Subtitle>
        <div className="card-text">
          <div><strong>Course:</strong>{student.course}</div>
          <div><strong>City:</strong>{student.city}</div>
          <div><strong>Marks: </strong><Badge>{student.marks}</Badge></div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="success">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
      </Card.Footer>
    </Card>
    )
}
export default StudentCard;