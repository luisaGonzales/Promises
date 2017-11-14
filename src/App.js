import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {search, getPlanets} from './Actions';
import {Planet} from './Planet';

const App = ({items}) =>  {
  const allPlanets = items.map((planet, index) => {
    return(
      <li key={index}>
        <Planet name={planet.name} dens={planet.dens} telescope={planet.telescope} img={planet.img} year={planet.year} />
      </li>
    );
  })
  return (
    <Grid>
      <Row>
        <Col sm={12}>
        </Col>
        <Col sm={12}>
        <button onClick={() => getPlanets()}>Search</button>
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
