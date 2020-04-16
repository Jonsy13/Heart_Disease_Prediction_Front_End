import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Spinner from '../Spinner/Spinner.js';
import { Row, Col, Button, Form} from 'react-bootstrap'
import Modal from '../Modal/Modal.js';
import './Form.css'
import { Spring } from 'react-spring/renderprops'


class Former extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Age: '',
            Sex: '',
            Cp: '',
            Trestbps: '',
            Chol: '',
            Fbs: '',
            Restecg: '',
            Thalach: '',
            Exang: '',
            OldPeak: '',
            Slope: '',
            Ca: '',
            Thal: 'nc',
        }
    }

    AgeChange = event => {
        this.setState({ Age: event.target.value });
    }

    SexChange = event => {
        this.setState({ Sex: event.target.value });
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
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="Age">
                                                    <Form.Label>Enter Your Age Here :</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Your Age Here" onChange={this.AgeChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="Sex">
                                                    <Form.Label>Enter Your Sex Here :</Form.Label>
                                                    <Form.Control type="text" placeholder="Your Sex" onChange={this.SexChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="Cp">
                                                    <Form.Label>Enter Your Cp Here : </Form.Label>
                                                    <Form.Control type="text" placeholder="Cp Here" onChange={this.CpChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="Trestbps">
                                                    <Form.Label>Enter Your Trestbps Here : </Form.Label>
                                                    <Form.Control type="text" placeholder="(In mm Hg)" onChange={this.TrestbpsChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="Chol">
                                                    <Form.Label>Enter Your Cholestrol Here </Form.Label>
                                                    <Form.Control type="text" placeholder="Choloestrol Here" onChange={this.CholChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="Fbs">
                                                    <Form.Label>Enter Your Fbs Here :</Form.Label>
                                                    <Form.Control type="text" placeholder="Fbs Here" onChange={this.FbsChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="Restecg">
                                                    <Form.Label>Enter Your RestEcg Here</Form.Label>
                                                    <Form.Control type="text" placeholder="Restecg Here" onChange={this.EcgChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="thalach">
                                                    <Form.Label>Enter Your Thalach Here :</Form.Label>
                                                    <Form.Control type="text" placeholder="Thalach Here" onChange={this.ThalChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="Exang">
                                                    <Form.Label>Enter Your Exang Here :</Form.Label>
                                                    <Form.Control type="text" placeholder="Exang Here" onChange={this.ExangChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="OldPeak">
                                                    <Form.Label>Enter Your OldPeak Here :</Form.Label>
                                                    <Form.Control type="text" placeholder="OldPeak Here" onChange={this.PeakChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="Slope">
                                                    <Form.Label>Enter Your Slope :</Form.Label>
                                                    <Form.Control type="text" placeholder="Slope Here" onChange={this.SlopeChange} />
                                                </Form.Group>

                                            </Col>
                                            <Col>
                                                <Form.Group controlId="Ca">
                                                    <Form.Label>Enter Your Ca : </Form.Label>
                                                    <Form.Control type="text" placeholder="Ca Here" onChange={this.CaChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group controlId="Thal">
                                            <Form.Label>Enter Your Thal : </Form.Label>
                                            <Form.Control type="text" placeholder="Thal Here " onChange={this.ThalChange} />
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