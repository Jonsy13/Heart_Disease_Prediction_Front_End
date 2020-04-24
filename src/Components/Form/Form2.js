import React from 'react';
import { Row, Col, Button,Container,Image} from 'react-bootstrap'
import './Form2.css';
import pic1 from './1.jpg';

class Form1 extends React.Component{
    render(){
        return(
            <div>
                <Row xs={6} md={4} class = "Bb">
                    <Col>
                    <p>Heart disease detection System helps us the person to check whether their body system is working properly;yes or not</p>
                    </Col>
                    <Col  xs={6} md={8}>
                    <p>Hii</p>

                    </Col>
                </Row>
                
            </div>
        );
    }
} 

export default Form1;