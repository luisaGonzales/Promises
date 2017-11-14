import React, {Component} from 'react';
import {Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';

export const Planet = ({name, dens, telescope, img, year}) => {
    return (
        <Thumbnail src={img} className="list__img">
            <h3>{name}</h3>
            <p>Density {dens}</p>
            <p>Discovered in {year} with {telescope}</p>
        </Thumbnail>
    );
}