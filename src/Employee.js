import React, { Component } from 'react'

export default class Employee extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
         name:"udhay",
         employees:[
             {name:"Akhil"},
             {name:"Chaitu"}
         ]   
        }
    }
    
    render() {
     setTimeout(()=>
      this.setState({Name:"sandhya"})
     ,5000)

        return (
            <div>
          <h1>{this.state.employees[1].name}</h1>
          <h2>{this.state.name}</h2>      
            </div>
        )
    }
}
