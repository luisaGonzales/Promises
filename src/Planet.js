import React, {Component} from 'react';
import {Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';

export const Planet = ({name, dens, telescope, img, year}) => {
    return (
        <Grid>
            <Row>
                <Col smOffset={5} sm={5}>
                    <Thumbnail src={img}>
                        <h3>{name}</h3>
                        <p>{dens}</p>
                        <p>Discovered in {year} with {telescope}</p>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
    );
}