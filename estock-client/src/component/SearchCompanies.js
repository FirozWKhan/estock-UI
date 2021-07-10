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
            endDate: "",
            companyCode: "",
            companyName: "",
            companies: [],
            stock: [],
            avg:"",
            min:"",
            max:""
        }
    }

    componentDidMount() {
        axios.get("https://inzi76a84h.execute-api.ap-south-1.amazonaws.com/ApiZuulStock/company").then(res => {
            console.log(res);
            this.setState({ companies: res.data })
        })
        //http://13.235.57.104:8083/company/v1.0/market/company/getall
        //https://inzi76a84h.execute-api.ap-south-1.amazonaws.com/ApiZuulStock/company
       
    }
    handleStartDarteChange = (date) => {
        this.setState({
            startDate: date
        })
    }

    handleEndDarteChange = (date) => {
        this.setState({
            endDate: date
        })
    }

    onChangeHandler = (event) => {

        var selectedIndex = event.target.options.selectedIndex;
        var code = event.target.options[selectedIndex].getAttribute('name');
        this.setState({companyCode:code})
        this.setState({companyName:event.target.value})
        
    }
    handleSearch = () => {

    
    let startDate=this.convert( this.state.startDate.toString());
    let endDate=this.convert(this.state.endDate.toString());
    //http://13.235.57.104:8083/stock/v1.0/market/stock/get/
//
        axios.get("https://inzi76a84h.execute-api.ap-south-1.amazonaws.com/ApiZuulStock/stock/" + this.state.companyCode +
         "/" + startDate+ "/" + endDate).then(
            res => {
                console.log(res.data)
                this.setState({avg:res.data.avg,
                    min:res.data.min,
                    max:res.data.max
                })
                this.setState({ stock: res.data.domain })
            }
        )
    }

     convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }
    render() {
        let options = "";
        if (this.state.companies.length > 0) {
            options = this.state.companies.map(it => {
                return { key: it.companyCode, text: it.name }
            })
        }

        return (
            <div>

                <table>

                    <tr><td> <Dropdown options={options} onChange={this.onChangeHandler} /></td><td>From</td><td>Start Date</td><td></td>

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleStartDarteChange.bind()}
                            name="startDate"
                            dateFormat="yyyy-dd-MM"
                        />
                        <td>End Date</td><td>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleEndDarteChange.bind()}
                                name="startDate"
                                dateFormat="yyyy-dd-MM"
                            />
                        </td>
                        <td><button onClick={this.handleSearch}>Search</button></td>
                    </tr>

                    <tr><td>Comapny Code</td><td>{this.state.companyCode}</td></tr>
                    <tr><td>Company Name</td><td>{this.state.companyName}</td></tr>
                </table>
                <ShowCompanies data={this.state}/>
            </div>
        )
    }
}

export default SearchCompanies




