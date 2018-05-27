import React, { Component } from 'react'
import {Row,Col, Input, Icon, Button} from "react-materialize";

class Form extends Component {
  handleName(e){
    this.props.handleChangeName(e.target.value)
  }

  handleAge(e){
    this.props.handleChangeAge(e.target.value)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(e.target.name.value, e.target.age.value)
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <Row>
            <Input s={12} label="Name" name="name" value={this.props.NameVal} onChange={this.handleName.bind(this)} validate type="text" required pattern ={"[A-Za-z]{1,12}"} title="Maximum 12 Character"><Icon>account_circle</Icon></Input>
            <Input s={12} label="Age" name="age" value={this.props.AgeVal} onChange={this.handleAge.bind(this)} validate type="text" required pattern={"^[0-9]{1,2}$"} title="Min 1 digits and Max 2 digits"><Icon>cake</Icon></Input>
        </Row>
        <Row>
            <Col s={12} m={8}>
            <Button waves='light' className="red">Add to<Icon right>fast_forward</Icon></Button>
            </Col>
        </Row>
      </form>
    )
  }
}

export default Form;
