import React, {Component} from 'react';
import {View, Image,Text} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class BestGrid extends Component {
  render() {
    return (
      <Grid>
    <Col>
        <Text>1</Text>
    </Col>
    <Col>
        <Row>
            <Text>2</Text>
        </Row>
        <Row>
            <Text>3</Text>
        </Row>
    </Col>
</Grid>
    );
  }
}
