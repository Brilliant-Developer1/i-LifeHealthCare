import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Doctors.css';

const Doctors = () => {
    return (
        <Container>
            <h1 className="text-center mt-5 mb-5">Meet the Doctors
            </h1>
            <Row xs={1} md={2} className="g-4">
            <Col>
            <Card className="doctor-card">
                <Card.Img variant="top" src="https://image.freepik.com/free-photo/international-medical-student-man-blue-uniform-doctor-with-stethoscope_1157-43739.jpg" />
                <Card.Body>
                <Card.Title>Dr. Zohaib Shaikh</Card.Title>
                <Card.Text>
                MD (Medicine) DN (Cardiology) <br />
                (Consultant and interventional Cardiology) <br />
                Timing : Mon to Sat 7.45 to 8.30 Morning
                9869286469
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="doctor-card">
                <Card.Img variant="top" src="https://image.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" />
                <Card.Body>
                <Card.Title>Dr. Rafayel Lisa</Card.Title>
                <Card.Text>
                MBBS, DMRE
                (Radiologist, Sonologist ) <br />
                timing :- Mon To Fri 10 to 11 (morning)
                Sat 10 to 11 (Morning )
                Mon To Fri 6 to 7 (evening)
                9820941312
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="doctor-card">
                <Card.Img variant="top" src="https://image.freepik.com/free-photo/woman-with-stethoscope-holding-clipboard_1098-2502.jpg" />
                <Card.Body>
                <Card.Title>Dr. Atiya Noor</Card.Title>
                <Card.Text>
                DNB (Ortho), D.Ortho,MBBS
                Consultant Orthopedic surgeon <br />
                Mon to Sat- 12 to 3pm 
                In case of emergency available on call 24hrs <br />
                Call : +91 9833346496
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="doctor-card">
                <Card.Img variant="top" src="https://image.freepik.com/free-photo/portrait-attractive-male-doctor_329181-622.jpg" />
                <Card.Body>
                <Card.Title>Dr. Ismael Khan</Card.Title>
                <Card.Text>
                D.Ortho,MBBS
                Consultant Orthopedic surgeon Sonologist
                Mon to Sat- 10 to 3pm <br />
                In case of emergency available on <br /> call 24hrs
                Call : +91 9858346418
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </Container>
    );
};

export default Doctors;