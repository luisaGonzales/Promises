import React, { Component } from 'react';
import './css/main.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {search} from './Actions';
import {Planet} from './Planet';

const App = ({items}) =>  {
  const allPlanets = items.map((planet, index) => {
    return(
      <li key={index}>
        <Planet name={planet.name} dens={planet.dens} telescope={planet.telescope} img={planet.img} year={planet.year} />
      </li>
    );
  })
  search();
  return (
    <Grid >
      <Row className="planets">
        <Col smOffset={2} sm={6}>
          <div className="planets__title">
            <h1>Exoplanet Explorer</h1>
            <p>Lean more about planets around other starts! <br /> All planets with one click! </p>
          </div>
        </Col>
      </Row>
      <Row className="list">
        <Col sm={12}>
          <div>{ items.length!=0 ? 
            <ul>{allPlanets}</ul>
                  :
                  <br/>
                }
            </div>    
        </Col>
      </Row>
    </Grid>
  );
}

const mapToPlay = ({items}) => ({items})
export default connect(mapToPlay)(App);
