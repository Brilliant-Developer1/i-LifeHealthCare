import React from 'react';
import { Button, Container } from 'react-bootstrap';

const AppointmentForm = () => {

    return (
        <Container className="mt-5 pt-5 mb-5">
            <h2 className="mt-5">Select Your Prefred Time</h2>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
                08:00 AM - 09:00 AM
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
            09:00 AM - 10:00 AM
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
            10:00 AM - 01:00 PM
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
            02:00 PM - 05:00 PM
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
            05:00 PM - 09:00 PM
            </label>
            </div>
            <Button className="mt-5 mb-5">Book Now</Button>
        </Container>
    );
};

export default AppointmentForm;