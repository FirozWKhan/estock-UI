import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import SearchCompanies from './SearchCompanies'
export class ShowCompanies extends Component {
constructor(props) {
    super(props)

    this.state = {
         stockList:[{stockPrice:1222, stardate:"20/2/2021",time:"12:12:12"},
         {stockPrice:1222, stardate:"20/2/2021",time:"12:12:13"},
         {stockPrice:1222, stardate:"20/2/2021",time:"12:12:14"}
        
    ]
    }
}


    render() {
        let details ="No Details Found"
        if (this.state.stockList.length > 0) {
            details = this.state.stockList.map(it => <tr key={it.time}><td>{it.stockPrice}</td>
                <td>{it.stardate}</td> <td> {it.time}</td></tr>)
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
                    <tr><td>Min</td><td>12222</td></tr>
                    <tr><td>Max</td><td>12222</td></tr>
                    <tr><td>Avg</td><td>12222</td></tr>

                    </table>
            </div>
        )
    }
}

export default ShowCompanies
