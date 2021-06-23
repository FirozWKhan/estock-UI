import React, { Component } from 'react'

import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ShowCompanies from './ShowCompanies';
import axios from 'axios';
import Dropdown from './DropDown';




export class SearchCompanies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            startDate: "",
            endDate :"",
            companyCode:"",
            companyName:"",
            companies:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8090/v1.0/market/company/getall").then(res=>{
            console.log(res);
            this.setState({companies: res.data})
        })
    }
    handleStartDarteChange =(date)=> {
        this.setState({
          startDate: date
        })
      }

      handleEndDarteChange=(date)=> {
        this.setState({
          endDate: date
        })
      }


      handleSearch =()=>{
        
      }
    render() {
        let options ="";
        if( this.state.companies.length>0){
            options= this.state.companies.map(it=>{
            return {key: it.companyCode, text:it.name}
        })
    }

        return (
            <div>
                
               
                
                <table>
                   


                    <tr><td> <Dropdown options={options} /></td><td>From</td><td>Start Date</td><td></td>
                    
                <DatePicker
                  selected={ this.state.startDate }
                  onChange={ this.handleStartDarteChange.bind() }
                  name="startDate"
                  dateFormat="MM/dd/yyyy"
              />
                <td>End Date</td><td>
                <DatePicker
                  selected={ this.state.endDate }
                  onChange={ this.handleEndDarteChange.bind() }
                  name="startDate"
                  dateFormat="MM/dd/yyyy"
              />        
                </td>
                <td><button>Search</button></td>
                </tr>

                    <tr><td>Comapny Code</td><td>{this.state.companyCode}</td></tr>
                    <tr><td>Company Name</td><td>{this.state.companyName}</td></tr>
                </table>
                <ShowCompanies/>
            </div>
        )
    }
}

export default SearchCompanies



 
