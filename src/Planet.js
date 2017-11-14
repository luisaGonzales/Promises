import React, {Component} from 'react';
import {Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';


export const Planet = ({name, dens, telescope, img}) => {
    return (
        <Thumbnail src={img} alt="242x200">
            <h3>{name}</h3>
            <p>{dens}</p>
            <p>{telescope}</p>
        </Thumbnail>           
    );
} 