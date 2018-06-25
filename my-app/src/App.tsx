
import { Col,Row } from 'antd';
import Button from 'antd/lib/button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// import AntComponents from './AntComponents';
// import AntDatepicker from './AntDatepicker';
// import Clock from './Clock';
import logo from './logo.svg';
import MainContent from './MainContent';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <br/>
          {/* <Clock Name="test" Age={26}/>
          <AntDatepicker/>
          <AntComponents/> */}
          <Col span={6} >
          <Row><Button type="primary"><Link to='/clock'>Clock</Link></Button></Row>
          <Row><Button type="danger"><Link to='/DatePicker'>DatePicker</Link></Button></Row>
          <Row><Button type="primary"><Link to='/Components'>Components</Link></Button></Row>
          <Row><Button type="danger"><Link to='/Table'>Table</Link></Button></Row>
          </Col>
          <Col span={18}>
          <Row type="flex" justify="center">
            <MainContent/>
            </Row>
          </Col>
        </p>
      </div>
    );
  }
}

