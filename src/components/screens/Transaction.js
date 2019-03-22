import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import CurrencyInput from 'react-currency-input';



class Transaction extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      transactions:[],
      moneyValue: "",
      desc:"",
      show: false,
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
    this.setState({ show: false })
    this.setState({ [key]: value });
  }

  addItem() {
    const transaction = {
      moneyValue: this.state.moneyValue.slice(),
      desc: this.state.desc.slice(),
      dateTransaction: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    };

    this.saveTransationToLocalStorage(transaction);
    this.setState({ show: true })
    this.setState({
      transaction:[],
      moneyValue: "",
      desc:""
    });
  }

  handleHide() { this.setState({ show: false })};


  render() {
    return (
      <Container>
          <Row>
            <Col>
              <div className="headerClient marginFix">Nova Transação</div>
            </Col>
          </Row>

          <Row>
            <Col md>
              <CurrencyInput className="form-control" prefix="R$ " ref="myinput" value={this.state.moneyValue} onChangeEvent={e => this.updateInput("moneyValue", e.target.value)}/>
            </Col>
            <Col md>
              <input className="form-control" type="text" maxLength="20" placeholder="Descrição" value={this.state.desc} onChange={e => this.updateInput("desc", e.target.value)}/>
            </Col>
            <Col md className="centerBtn">
            <button className="btn btn-secondary" onClick={() => this.addItem()} disabled={!this.state.moneyValue.length || !this.state.desc.length}>
              Fazer transação
            </button>
            </Col>
          </Row>
          <Alert onClick={() => this.handleHide()} show={this.state.show} variant="success">Transação Adicionada!</Alert>
      </Container>
    );
  }
}

 
export default Transaction;