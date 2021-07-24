import { Component } from "react";
import horror from './json/horror.json'
import {Col,Container,Row} from 'react-bootstrap'

const LatestRelease=(props)=>{

        return(
            <Container className='fluid d-flex justify-content-center'>
                <Row>
                <h1 className='text-white'>{props.title}</h1>
               
                {horror.slice(0,3).map(fan=>(
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
export default LatestRelease