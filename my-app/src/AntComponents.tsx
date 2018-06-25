import { Button, TimePicker } from 'antd';
import * as React from 'react';

class AntComponents extends React.Component {
      public render() {
          return (
            <div className="components">
            <Button type="primary">Play With antd</Button>
            <Button type="danger">Play With antd2</Button>
            <Button type="danger" icon="user">Play With antd3</Button>
            <Button type="danger" shape="circle" icon="download"/>
            <TimePicker/>
            </div>
          );
        }
  }
  
  export default AntComponents;