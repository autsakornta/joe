import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: [], value:''};
  }
  onSubject = (value) => {
    this.setState({value});
  }
  addData = async () => {
    var { data, value } = this.state;
    await data.push(value);
    this.setState({ data, value:"" });
  }
  renderSubject = () => {
    var { value } = this.state;
    return <div>{this.fibo2(value)}</div>;
  }


  fibo = (number) => {
    if(number<3){
      return 1;
    }else {
      return this.fibo(number-1) + this.fibo(number-2);
    }
  }

  fibo2 = (number) => {
    var a = 1, b = 1, y = 0;
    if( number < 3) {
      return 1;
    }
    for(var i = 3; i <= number; i++){
      y = a + b;
      a = b;
      b = y;
    }
    return y;
  }

  render() {
    return (
      <div className="App">
        <TextField hintText="Enter number" 
          value={this.state.value} 
          onChange={(e)=>this.onSubject(e.target.value)} />
        <FlatButton label="Add" primary={true} onClick={()=>this.addData()} />
        {this.renderSubject()}
      </div>
    );
  }
}

export default App;
