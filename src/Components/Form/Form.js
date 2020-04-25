import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Spinner from '../Spinner/Spinner.js';
import { Row, Col, Button, Form } from 'react-bootstrap'
import Modal from '../Modal/Modal.js';
import './Form.css'
import { Spring } from 'react-spring/renderprops'


class Former extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Age: '',
            Sex: '1',
            Cp: '1',
            Trestbps: '',
            Chol: '',
            Fbs: '',
            Restecg: '0',
            Thalach: '',
            Exang: '1',
            OldPeak: '',
            Slope: '1',
            Ca: '',
            Thal: '3',
        }
    }

    AgeChange = event => {
        this.setState({ Age: event.target.value });
    }

    SexChange = event => {
        
        this.setState({ Sex: event.target.value });
        console.log(this.state.Sex);
    }

    CpChange = event => {
        this.setState({ Cp: event.target.value });
    }

    TrestbpsChange = event => {
        this.setState({ Trestbps: event.target.value });
    }

    CholChange = event => {
        this.setState({ Chol: event.target.value });
    }

    FbsChange = event => {
        this.setState({ Fbs: event.target.value });
    }

    EcgChange = event => {
        this.setState({ Restecg: event.target.value });
    }

    ThalChange = event => {
        this.setState({ Thalach: event.target.value });
    }

    ExangChange = event => {
        this.setState({ Exang: event.target.value });
    }

    PeakChange = event => {
        this.setState({ OldPeak: event.target.value });
    }

    SlopeChange = event => {
        this.setState({ Slope: event.target.value });
    }

    CaChange = event => {
        this.setState({ Ca: event.target.value });
    }

    ThalChange = event => {
        this.setState({ Thal: event.target.value });
    }


    onSubmit = (event) => {

        this.setState({ clicked: 'p' });
        console.log(this.state);
        event.preventDefault();
        this.forceUpdate();

        fetch("https://agile-waters-41004.herokuapp.com/Predict", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Age: this.state.Age,
                Sex: this.state.Sex,
                Cp: this.state.Cp,
                Trestbps: this.state.Trestbps,
                Chol: this.state.Chol,
                Fbs: this.state.Fbs,
                Restecg: this.state.Restecg,
                Thalach: this.state.Thalach,
                Exang: this.state.Exang,
                OldPeak: this.state.OldPeak,
                Slope: this.state.Slope,
                Ca: this.state.Ca,
                Thal: this.state.Thal
            })
        }).then(response => response.json())
            .then(user => {
                this.setState({ clicked: 'd' })
                this.setState({ Output: user[0] });
                console.log(this.state.Output);
                console.log(user[0]);
                this.forceUpdate();
            });

    }




    render() {


        let OutputShow = null;
        if (this.state.clicked === 'p') {
            OutputShow = <Spinner />
        }


        if (this.state.clicked === 'd') {
            OutputShow = <Modal title={this.state.Output} content="Thanks for Using Our Services" />
        }


        return (

            <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 1000 }}>
                {props => <div style={props}>
                    <Jumbotron className="Jumbo2">
                        <Container>
                            <Row>
                                <Col>
                                    <Form className="FormGY" actions="#">

                                        <Form.Group controlId="Age">
                                            <Form.Row>
                                                <Form.Label size = "sm" className="bt">Age</Form.Label>
                                                <Form.Control column="sm" size="sm" type="text" placeholder="Enter Your Age Here" onChange={this.AgeChange} />
                                            </Form.Row>

                                        </Form.Group>

                                        <Form.Group controlId="Sex">
                                            <Form.Row>
                                                <Form.Label className="bt">Sex</Form.Label>
                                               
                                                    <Form.Control column="sm" size="sm" onChange={this.SexChange} as ="select">
                                                        <option value="1">Male</option>
                                                        <option value="0">Female</option>
                                                    </Form.Control>
                                              

                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Cp">
                                            <Form.Row>
                                                <Form.Label className="bt">Chest pain type</Form.Label>
                                             
                                                    <Form.Control column="sm" size="sm" onChange={this.CpChange} as="select">
                                                        <option value="1">Typical Angina</option>
                                                        <option value="2">Atypical Angina</option>
                                                        <option value="3">Non-Anginal Pain</option>
                                                        <option value="4">Asymptotic</option>
                                                    </Form.Control>
                                         
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Trestbps">
                                            <Form.Row>
                                                <Form.Label className="bt">Resting Blood Pressure</Form.Label>
                                               
                                                    <Form.Control column="sm" size="sm" type="text" placeholder="(In mm Hg)" onChange={this.TrestbpsChange} />
                                            
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Chol">
                                            <Form.Row>
                                                <Form.Label className="bt">Serum Cholestrol</Form.Label>
                                             
                                                    <Form.Control column="sm" size="sm" type="text" placeholder="Choloestrol Here" onChange={this.CholChange} />
                                           
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Fbs">
                                            <Form.Row>
                                            <Form.Label className="bt">Fasting Blood Pressure</Form.Label>
                                          
                                                <Form.Control column="sm" size="sm" type="text" placeholder="Fbs Here" onChange={this.FbsChange} />
                                          
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Restecg">
                                            <Form.Row>
                                                <Form.Label className="bt" >Resting ECG</Form.Label>
                                             
                                                    <Form.Control column="sm" size="sm" onChange={this.EcgChange} as="select">
                                                        <option value="0">Normal</option>
                                                        <option value="1">ST-T Wave Abnormality</option>
                                                        <option value="2">Left ventricular Hyperthrophy</option>
                                                    </Form.Control>
                                            
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="thalach">
                                            <Form.Row>
                                                <Form.Label className="bt">Max. Heart Rate Achieved</Form.Label>
                                             
                                                    <Form.Control column="sm"  size="sm" type="text" placeholder="Thalach Here" onChange={this.ThalChange} />
                                             
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Exang">
                                            <Form.Row>
                                                <Form.Label className="bt">Exercise Induced Angina</Form.Label>
                                         
                                                    <Form.Control column="sm" size="sm" onChange={this.ExangChange} as="select">
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </Form.Control>
                                        
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="OldPeak">
                                            <Form.Row>
                                                <Form.Label className="bt">Old Peak</Form.Label>
                                    
                                                    <Form.Control column="sm"  size="sm" type="text" placeholder="OldPeak Here" onChange={this.PeakChange} />
                                             
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Slope">
                                            <Form.Row>
                                                <Form.Label className="bt">Slope</Form.Label>
                                                
                                                    <Form.Control column="sm" size="sm" onChange={this.SlopeChange} as="select">
                                                        <option value="1">Upslopping</option>
                                                        <option value="2">Flat</option>
                                                        <option value="3">Downslopping</option>
                                                    </Form.Control>
                                            
                                            </Form.Row>
                                        </Form.Group>


                                        <Form.Group controlId="Ca">
                                            <Form.Row>
                                                <Form.Label className="bt">No. of major vessels</Form.Label>
                                              
                                                    <Form.Control column="sm"  size="sm" type="text" placeholder="Ca Here" onChange={this.CaChange} />
                                             
                                            </Form.Row>
                                        </Form.Group>

                                        <Form.Group controlId="Thal">
                                            <Form.Row>
                                                <Form.Label className="bt">Thalassemia</Form.Label>
                                            
                                                    <Form.Control column="sm"  size="sm" onChange={this.ThalChange} as="select">
                                                        <option value="3">Normal</option>
                                                        <option value="6">Fixed Defect</option>
                                                        <option value="7">Reversible Defect</option>
                                                    </Form.Control>
                                            
                                            </Form.Row>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.onSubmit} >
                                            Submit
                                    </Button>
                                    </Form>
                                    <br></br>
                                    <h1>{OutputShow}</h1>
                                </Col>

                            </Row>

                        </Container>
                    </Jumbotron>

                </div>}
            </Spring>

        );

    }

}

export default Former;
