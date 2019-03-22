import React, { Component } from "react";
import List from "../List";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CurrencyInput from 'react-currency-input';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      transactions:[],
    };
    this.getTransationsLocalStorage();
  }

  getTransationsLocalStorage() {
    if(localStorage.getItem('transactions') !== null && localStorage.getItem('transactions').length > 0){
      this.state.transactions = JSON.parse(localStorage.getItem('transactions'));
      for (let index = 0; index < this.state.transactions.length; index++) {
        this.state.balance += parseFloat(this.state.transactions[index].moneyValue.replace(/[^0-9.-]+/g,""));
      }
    }
  }


  render() {
    return (
      <Container>
          <Row>
            <Col style={{ padding: "0"}}>
              <div className="headerClient marginFix">Detalhes das transações</div>
              <List />
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "0"}}>
              <div className="headerClient marginFix">Saldo total das transações</div>
              <CurrencyInput className="noTransa pinkColor" prefix="R$ " value={this.state.balance} disabled={true}/>
            </Col>
          </Row>
      </Container>
    );
  }
}
 
export default Dashboard;