import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {search} from './Actions';
import {Planet} from './Planet';

const App = ({items}) =>  {
  return (
    <Grid>
      <Row>
        <Col md={12}>
        <button onClick={() => search()}>holi</button>
          <div>{ items.length!=0 ? 
            // <div>
            //   <h1>{items[0].name}</h1>
            //   <h1>{items[0].dens}</h1>
            //   <h1>{items[0].telescope}</h1></div>  
            <Planet name={items[0].name} dens={items[0].dens} telescope={items[0].telescope} img={items[0].img} />
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
