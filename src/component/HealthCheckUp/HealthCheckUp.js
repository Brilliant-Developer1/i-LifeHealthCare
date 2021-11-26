import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HealthCheckUp.css';
const HealthCheckUp = () => {
    return (
        <Container className="healthCheckUp">
        <Row>
        <Col sm={8}>
            <h2>Health Check-up</h2>
            <p>Frequent healthcare check-ups are of utmost importance in maintaining your health. They will allow you to detect, analyze and control the diseases you might contract due to sudden weather change or minute changes in food habits.</p>
            <h5>Significance of healthcare packages:</h5>
            <p>They detect your wellness problems even before showing symptoms. Regular health check-ups drastically increase your chances for treatment and cure. The screenings depend on your age, health and family history, and lifestyle choices such as what you eat, how active you are, and whether you smoke or not. Being healthy is not only about eating right and exercising but also about getting screened by a healthcare professional regularly.

            We’re here to be your regular healthcare providers with the most efficient and affordable medical packages.</p>
            
        </Col>
        <Col sm={4}>
        <img className="img-fluid" src={"https://image.freepik.com/free-photo/closeup-shot-boy-getting-checkup-by-doctor_181624-34747.jpg"} alt="" />
    </Col>
    </Row>
        <div className="mt-5">
            <h4>We offer the following health packages:</h4>
            <ul>
                <li>Royal</li>
                <li>Privilege</li>
                <li>Premium</li>
                <li>Comprehensive</li>
                <li>Women's Checkup</li>
            </ul>
            </div>
        <div>
            <h4>Guidelines for health checkup</h4>
            <ul>
                <li>Minimum of 10 to 12 hrs fasting is essential prior to the check-up, you may drink water.</li>
                <li>Complete abstinence from alcohol at least 24 hours prior to check-up.</li>
                <li>Please carry your regular medication when you come for check-up.</li>
                <li>Wear loose clothing, no jewellery & easily removable footwear if possible.</li>
                <li>Report at reception between 8.30 am to 9.30 am.</li>
                <li>During the course of investigation breakfast will be provided.</li>
                <li>Bring all your past medical records if any.</li>
                <li>If you are wearing lenses please remove them two days prior to the Health Check-Up.</li>
                <li>Additional test if required apart from package will be charged separately.</li>
                <li>Duration of Check-up may range from 3 to 6 hours depending upon the package selected.</li>
                <li>After completion of the check-up, we would appreciate if you could fill the feed-back form.</li>
                <li>Second consultation with Physician the next working day along with reports will be at no additional cost.</li>
                <li>In case of non-availability of certain tests on that particular day the patients will be called at next convenient date.</li>
                <li>P.H.Medical reserves the right to modify any content of Health check-up without any prior notice.</li>
                <li>All reports can be viewed on the internet with the user ID and password provided on the receipt.</li>
                <li>We also provide customized Health Package for Corporates at very attractive group rates which is very specific and tailored made to the company's requirement.</li>
            </ul>
            </div>
        </Container>
    );
};

export default HealthCheckUp;