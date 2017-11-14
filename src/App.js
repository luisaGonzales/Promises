import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {search, getPlanets} from './Actions';
import {Planet} from './Planet';



const App = ({items}) =>  {
  const allPlanets = items.map((planet) => {
    return(
      <Planet name={planet.name} dens={planet.dens} telescope={planet.telescope} img={planet.img} />
    );
  })
  return (
    <Grid>
      <Row>
        <Col md={12}>
        <button onClick={() => search()}>holi</button>

          <div>{ items.length!=0 ? 
            {allPlanets}
            // <Planet name={items[0].name} dens={items[0].dens} telescope={items[0].telescope} img={items[0].img} />
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
