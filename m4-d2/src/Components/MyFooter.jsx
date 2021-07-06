import {Card,Button} from 'react-bootstrap'


const MyFooter = (props) =>{
    return(
        <Card className="text-center" bg="dark" variant="dark">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Footer</Button>
        </Card.Body>
      </Card>
    )
}

export default MyFooter 