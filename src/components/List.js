import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactions:[],
    };
    this.getTransationsLocalStorage();
  }

  getTransationsLocalStorage() {
    if(localStorage.getItem('transactions') !== null && localStorage.getItem('transactions').length > 0){
      this.state.transactions = JSON.parse(localStorage.getItem('transactions'));
    }
  }

  render() {
    return (
        <ReactTable
          data={this.state.transactions}
          columns={[
            {
              Header: "Valor", 
              accessor: "moneyValue",
              Cell: props => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.value)
            },
            {
              Header: "Descrição", accessor: "desc"
            },
            {
              Header: "Data transação", accessor: "dateTransaction"
            }
          ]}
          defaultSorted={[
            {
              id: "dateTransaction",desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight ReactTable"
          showPagination={false}
          minRows = {0}
          NoDataComponent={() => <div className="noTransa">Nenhuma transação</div>}
        />
    );
  }
}

export default List;