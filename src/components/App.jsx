//below allows for using Component instead of react.Component
import React, { Component } from "react";

function App() {
  return (
    <div>
      <h1>
        Hello, react--from Wombat!
      </h1>
      <Table />
    </div>
  )
}

function Row(props){
  return (
    <tr>
      {props.cellNumbers.map(cell =>
      <td> {cell} </td>
      )}
    </tr>
  )
}


function Table() {
  return (
    <table>
      <Row cellNumbers = {[0,1,2]}/>
      <Row cellNumbers = {[3,4,5]}/>
      <Row cellNumbers = {[6,7,8]}/>
    </table>
  )
}

export default App;