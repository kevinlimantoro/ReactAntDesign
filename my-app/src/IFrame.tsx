import * as React from 'react';

interface IframeType{
  type: number;
}

class Iframe extends React.Component<IframeType,{}> {
  private URL1 : string = "http://localhost:59539/admin/account?token=";
  private URL2 : string = "http://localhost:59539/admin/functionmanagement?brandid=2&token=";
  private URL3 : string = "http://localhost:59539/market/vip?token=";
  private token : string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1MzEyODQ1MDQsInN1YiI6IntcIlBlcm1pc3Npb25GdW5jdGlvbklEXCI6XCJCT1lVXCIsXCJJc1ZhbGlkXCI6ZmFsc2UsXCJBY2NvdW50SURcIjpcImJveXVyb290XCIsXCJCcmFuZElEXCI6OTk5LFwiQ3VycmVuY3lJRFwiOlwiMlwiLFwiTGFuZ3VhZ2VDb2RlXCI6XCJ6aC10d1wifSJ9.IlYZgq4bs2Acb3LmjpcURDr3GOvleQBFpE49WfEhD1ncQERuGfyJlkTwe0d_okVCzFqURxkDkQQeIJF6iFz4gA";
  private MainURL : string;
  constructor(props:IframeType){
    super(props);
    this.MainURL = this.props.type === 3 ? this.URL3 : this.props.type === 1 ? this.URL1 : this.URL2;
    this.MainURL += this.token;
  }
      public render() {
          return (
            <div className="components">
            <iframe width="1600" height="900" src={this.MainURL}/>
            </div>
          );
        }
  }
  
  export default Iframe;