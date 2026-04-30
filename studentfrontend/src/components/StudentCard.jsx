import { Card, Button, Badge } from "react-bootstrap";
const StudentCard = ({ student, onDelete }) => {

  //creating a function that give us pop-up ofr confirmation
  const handleDelete = () => {
    if(window.confirm(`Are you sure you want to delete:  ${student.name}`)){
      onDelete(student._id);
    }
  }
    return( 
      <Card style={{ width: '28rem', marginBottom:'2rem' }}>
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
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Footer>
    </Card>
    )
}
export default StudentCard;