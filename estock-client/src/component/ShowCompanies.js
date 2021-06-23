import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import SearchCompanies from './SearchCompanies'
export class ShowCompanies extends Component {
constructor(props) {
    super(props)
   
    this.state = {
         stockList:[]
        
    
    }
}
convertDateToLocalDate=(date)=>{
    let d = new Date(date),
    mnth = ("0" + (d.getMonth() + 1)).slice(-2),
    day = ("0" + d.getDate()).slice(-2);
  return [d.getFullYear(), day,mnth].join("-");

}

getTime=(date)=>{
    let d = new Date(date)
return d.toLocaleTimeString()
}


    render() {
        let data = this.props.data;
        
        let details ="No Details Found"
        if (data.stock.length > 0) {
            details = data.stock.map(it => <tr key={this.convertDateToLocalDate(it.stockDate)}><td>{it.stockPrice}</td>
                <td>{this.convertDateToLocalDate(it.stockDate)}</td> <td> {this.getTime(it.stockDate)}</td></tr>)
        }

        return (
            <div>

              
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th width="170">Stock Price</th>
                            <th width="170">Start Date</th>
                            <th width="170">Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details}
                    </tbody>
                </Table>

                <table bordered>
                    <tr><td>Min</td><td>{this.props.data.min}</td></tr>
                    <tr><td>Max</td><td>{this.props.data.max}</td></tr>
                    <tr><td>Avg</td><td>{this.props.data.avg}</td></tr>

                    </table>
            </div>
        )
    }
}

export default ShowCompanies
