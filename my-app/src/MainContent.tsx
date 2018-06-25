
import * as React from 'react';
import { Route,Switch } from 'react-router-dom';
import AntComponents from './AntComponents';
import AntDatepicker from './AntDatepicker';
import AntTable from './AntTable';
import Clock from './Clock';
class MainContent extends React.Component {
    public render() {
        return (
            <Switch>
            <Route path='/clock' render={this.renderClock}/>
            <Route path='/DatePicker' component={AntDatepicker}/>
            <Route path='/Components' component={AntComponents}/>
            <Route path='/Table' component={AntTable}/>
          </Switch>
        );
      }

     private renderClock = () => {
         return <Clock Name="Kevin" Age={26}/>
     };
}

export default MainContent;