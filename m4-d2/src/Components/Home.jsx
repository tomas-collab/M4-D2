import { Component } from "react";
import {Card,Container,Row,Col} from 'react-bootstrap'
import fantasy from './json/fantasy.json'
import history from './json/history.json'
import horror from './json/horror.json'
import scifi from './json/scifi.json'
import romance from './json/romance.json'

class Home extends Component{
    // state = {
    //     selectBook = null
    // }
    render(){
        return(
            <Container className='fluid d-flex justify-content-center'>
                <Row>
                {fantasy.map(fan=>(
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4 space-between">
                    {/* <Card style={{ width: '16rem' ,height:'26rem' }}> */}
                    <div className='text-white'>
                    <img variant="top" src={fan.img} roundedCircle
                      style={{
                        resizeMode: "contain",
                        height: 200,
                        width: 200
                      }}/>
                     <div>
                    <p>{fan.title}</p>
                     <h4>{fan.price}$</h4>
                    </div>
                </div>
                </Col>    
                ))}      
     </Row>
</Container>
        )
    }
}

export default Home

