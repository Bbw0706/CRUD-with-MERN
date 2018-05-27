import React, { Component } from 'react';
import '../styles/App.css';
import {Row,Col} from "react-materialize";

import Form from "./list/Form";
import TableData from "./list/Table";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data : [],
      name : "", 
      age : ""
    }
  }
  

  componentDidMount(){
    fetch("/api")
    .then(res => res.json())
    .then(data => this.setState({data}));
  }

  handleSubmit(name,age){

    fetch("/api", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({name: name, age : age})
    })
    .then(res => res.json())
    .then(data => {
      const updatedData = this.state.data.concat(data);
      this.setState({
        data : updatedData,
        name : "",
        age : ""
      })
    })
  }

  handleChangeAge(e){
    this.setState({
      age : e
    })
  }

  handleChangeName(e){
    this.setState({
      name : e
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Row>
          <Col s={12}>
            <p className="red-text flow-text">An Absention Website</p>
          </Col>
        </Row>

        <Row>
          <Col s={12} m={4}>
            <Form handleSubmit={this.handleSubmit.bind(this)}
            handleChangeName={this.handleChangeName.bind(this)}
            handleChangeAge={this.handleChangeAge.bind(this)}
            NameVal={this.state.name}
            AgeVal={this.state.age}
            />
          </Col>

          <Col s={12} m={6}>
            <TableData data={this.state.data}/>
          </Col>
        </Row>
        
        </div>
      </div>
    );
  }
}

export default App;
