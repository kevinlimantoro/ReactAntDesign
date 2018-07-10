
import * as React from 'react';
import { Route,Switch } from 'react-router-dom';
import AntComponents from './AntComponents';
import AntDatepicker from './AntDatepicker';
import AntTable from './AntTable';
import Clock from './Clock';
import Iframe from './IFrame';
class MainContent extends React.Component {
    public render() {
        return (
            <Switch>
            <Route path='/clock' render={this.renderClock}/>
            <Route path='/DatePicker' component={AntDatepicker}/>
            <Route path='/Components' component={AntComponents}/>
            <Route path='/Table' component={AntTable}/>
            <Route path='/Iframe' component={this.renderIframe}/>
            <Route path='/Iframe2' component={this.renderIframe2}/>
            <Route path='/Iframe3' component={this.renderIframe3}/>
          </Switch>
        );
      }

      private renderIframe = () => {
        return <Iframe type={1}/>
    };
    private renderIframe2 = () => {
      return <Iframe type={2}/>
  };
  private renderIframe3 = () => {
    return <Iframe type={3}/>
};
     private renderClock = () => {
         return <Clock Name="Kevin" Age={26}/>
     };
}

export default MainContent;