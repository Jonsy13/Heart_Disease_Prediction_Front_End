import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <Jumbotron className="Jumbo4" fixed="bottom" fluid>
                <Container>
                    <h5>
                        Every Question Have A Solution..We Just Have to Find It Out @2020
                    </h5>

                </Container>
            </Jumbotron>
        </div>
    );

}

export default Footer;