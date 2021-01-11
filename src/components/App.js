import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: 'Kasymjan'
    }
    this.changeName = this.changeName.bind(this)
  }
  changeName(name){
    this.setState({
     name: name 
    })
  }
  render() {
    return (
      <div>
        <Select changeName={this.changeName}/>
        <Name  name={this.state.name} />
      </div>
    );
  }
}

