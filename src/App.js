import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {search} from './Actions'

const Planet = ({name, dens, telescope}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{dens}</h2>
      <h3>{telescope}</h3>
    </div>
  );
} 

const App = ({items}) =>  {
  return (
    <Grid>
      <Row>
        <Col md={12}>
        <button onClick={() => search()}>holi</button>
          <div>{ items.length!=0 ? 
            <div>
              <h1>{items[0].name}</h1>
              <h1>{items[0].dens}</h1>
              <h1>{items[0].telescope}</h1></div>  
            // <Planet name={items[0].pl_name} dens={items[0].pl_dens} telescope={items[0].pl_telescope} />
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
