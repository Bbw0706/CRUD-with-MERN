import React, { Component } from 'react'
import {Table} from "react-materialize";

class TableData extends Component {
  render() {
    const {data} = this.props;

    const tableList = data.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>
    ));
    return (
      <div>
        <Table hoverable={true} responsive={true}>
            <thead>
              <tr>
                <th data-field="name">Name</th>
                <th data-field="age">Age</th>
              </tr>
            </thead>

            <tbody>
              {tableList}
            </tbody>
        </Table>
      </div>
    )
  }
}

export default TableData;
