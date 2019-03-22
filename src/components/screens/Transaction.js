import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Transaction extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      transactions:[],
      moneyValue: "",
      desc:"",
    };
    this.getTransationsLocalStorage();
  }

  getTransationsLocalStorage() {
    if(localStorage.getItem('transactions') !== null && localStorage.getItem('transactions').length > 0){
      this.state.transactions = JSON.parse(localStorage.getItem('transactions'));
    }
  }

  saveTransationToLocalStorage(userData) {
    this.getTransationsLocalStorage();
    this.state.transactions.push(userData);
    localStorage.setItem('transactions', JSON.stringify(this.state.transactions));
  }
  
  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const transaction = {
      moneyValue: this.state.moneyValue.slice(),
      desc: this.state.desc.slice(),
      dateTransaction: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    };

    this.saveTransationToLocalStorage(transaction);

    this.setState({
      transaction:[],
      moneyValue: "",
      desc:""
    });
  }

  render() {
    return (
      <Container>
          <Row>
            <Col>
              <div className="headerClient marginFix">Nova Transação</div>
            </Col>
          </Row>

        <div>
          <input type="text" placeholder="Valor" value={this.state.moneyValue} onChange={e => this.updateInput("moneyValue", e.target.value)}/>
          <input type="text" placeholder="Descrição" value={this.state.desc} onChange={e => this.updateInput("desc", e.target.value)}/>
          <button onClick={() => this.addItem()} disabled={!this.state.moneyValue.length || !this.state.desc.length}>
            Fazer transação
          </button>
        </div>
      </Container>
    );
  }
}

 
export default Transaction;