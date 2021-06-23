import React, { Component } from 'react'

export class AddCompany extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    
    render() {
        return (
            <div>
               <button onClick={()=>{this.setState({show: true})}}>Add Company</button>
           
            </div>
        )
    }
}

export default AddCompany
