import React, {Component} from 'react';
import {Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';

export const Planet = ({name, dens, telescope, img, year}) => {
    return (
        <Grid>
            <Row>
                <Col smOffset={2} sm={8}>
                    <Thumbnail src={img} alt="242x200">
                        <h3>{name}</h3>
                        <p>{dens}</p>
                        <p>Discovered in {year} with {telescope}</p>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
    );
}