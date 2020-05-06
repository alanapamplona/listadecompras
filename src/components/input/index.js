import React, { Component } from 'react';
import './index.css'
import ProdutosDaLista from '../productlist/index'




//INPUT produto
class InputItem extends Component{
  constructor(){
    super();
    this.state = {
      produtos:[],
      inputProduto:"",
      inputQtd:"",
      erroDados:""
    };

    this.addProduto = (ev) => {
      if(this.state.inputProduto === "" || this.state.inputQtd === ""){
        this.setState({erroDados:"Ops... você precisa preencher todos os dados"})
        ev.preventDefault();
      }else{
        ev.preventDefault();
        const produtos = this.state.produtos.slice();
        produtos.push(`${this.state.inputProduto} - ${this.state.inputQtd}`);
        this.setState({
          produtos: produtos,
          inputProduto: "",
          inputQtd: "",
          erroDados:""
        })
      }
      
    };

    this.editarProduto = (index,valor) => {
      const produtos = this.state.produtos.slice();
      produtos[index] = valor;
      this.setState({produtos});
    }

    this.removerProduto = (index) => {
      const produtos = this.state.produtos.slice();
      produtos.splice(index, 1);
      this.setState({produtos});
    }

    this.onChange = (ev) => {
      ev.preventDefault();
      const state = Object.assign({}, this.state);
      state[ev.target.name] = ev.target.value;
      this.setState(state);
    }
  }

  render(){
    return(
      <div>
        <FormProdutos
          produtos = {this.state.produtos}
          inputProduto = {this.state.inputProduto}
          inputQtd = {this.state.inputQtd}
          onChange = {this.onChange}
          addProduto = {this.addProduto}
          removerProduto = {this.removerProduto}
          editarProduto = {this.editarProduto}
          erroDados = {this.state.erroDados}
          
        />
      </div>
      )
  }
}

const FormProdutos = (props) => (
  <div>
    <form id="inputItemForm" className="inputItem">
      <input name="inputProduto" value={props.inputProduto} onChange={props.onChange} type='text' placeholder="Produto" className="inputProduto" />
      <input name="inputQtd" value={props.inputQtd} onChange={props.onChange} type='text' placeholder="Qtd" className="inputQtd" />
      <button onClick={props.addProduto} className="buttonAdd">Add</button>
    </form>  

    <p id="erroDados">{props.erroDados}</p>
    

    {/* loop que passa por todos os produtos */}
       {
         props.produtos.map((produto, index) => (
            <ProdutosDaLista 
              produto={produto}
              index={index}
              removerProduto = {props.removerProduto}
              editarProduto = {props.editarProduto}
            />
         ))
       }
  </div>
)


export default InputItem;
