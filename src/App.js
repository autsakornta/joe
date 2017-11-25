import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    var { data } = this.state;
    var listData = [];
    data.map((item, i) => {
      listData.push(<div key={i}>{item}</div>);
    });
    return listData;
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.value} onChange={(e)=>this.onSubject(e.target.value)} />
        <button onClick={()=>this.addData()}>Add</button>
        {this.renderSubject()}
      </div>
    );
  }
}

export default App;
