import { DatePicker, LocaleProvider, message } from 'antd';
// The default locale is en-US, but we can change it to other language
// import frFR from 'antd/lib/locale-provider/fr_FR';
import en_US from 'antd/lib/locale-provider/en_US';
import * as Moment from 'moment';
// import 'moment/locale/fr';
// Activate FR by uncomment
import * as React from 'react';
interface IObject{
    date:string;  
}
class AntDatepicker extends React.Component<{},IObject> {
    constructor(props:any){
      super(props);
      this.state = {
        date: '',
      };
    }
    public handleChange = (date: Moment.Moment) => {
        message.info('selected Date: ' + (date ? date.toString() : ''));
        this.setState({ date : date.toString() });
    }
      public render() {
          return (
            <LocaleProvider locale={en_US}>
              <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={this.handleChange} />
                <div style={{ marginTop: 20 }}>Date: {this.state.date && this.state.date.toString()}</div>
              </div>
            </LocaleProvider>
          );
        }
  }
  
  export default AntDatepicker;