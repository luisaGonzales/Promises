import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col} from 'react-bootstrap';
import {search} from './Actions'

const App = ({items}) =>  {
  return (
    <Grid>
      <Row>
        <Col md={12}>
        <button onClick={() => search()}>holi</button>
          <div>{ items.length!=0 ? 
                  items[0].pl_name
                  :
                  <br/>
                }</div>
        </Col>
      </Row>
    </Grid>
  );
}

const mapToPlay = ({items}) => ({items})
export default connect(mapToPlay)(App);
