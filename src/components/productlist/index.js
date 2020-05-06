import React, { Component } from 'react';
import './index.css'

class ProdutosDaLista extends Component {

    constructor(props) {
      super(props);
      this.state = {
        edit : false,
        texto: props.produto
      }
  
    
      this.removerProduto = () => {
        if (window.confirm("Deseja realmente remover este produto?")) {
          this.props.removerProduto(this.props.index)
        }
      }
  
      this.editarProduto = () => {
        this.props.editarProduto(this.props.index, this.state.texto);
        this.setState({edit: false})
      }
  
      this.abrirForm = () => {
        this.setState({edit: true})
      }
  
      this.fecharForm = () => {
        this.setState({edit: false})
      }
  
      this.onChange = (ev) => {
        this.setState({texto: ev.target.value})
      }
    }
  
    render() {
      if (!this.state.edit) {
        return (
          <div className="listaProdutos">
            <div className="produto">
              <p className="dadosItem">{this.props.produto}</p>
              <button onClick = {this.abrirForm} className="alterarDados">Alterar</button>
              <button onClick = {this.removerProduto} className="excluirProduto">Excluir</button>
            </div>
          </div>
        )
      }
      return(
        <div className="listaProdutos">
          <div className="produto alteracao">
            <input value={this.state.texto} onChange={this.onChange} className="inputAlt"></input>
            <button onClick = {this.editarProduto} className="salvarDados">Salvar</button>
            <button onClick = {this.fecharForm} className="calcelAlt">Cancelar</button>
          </div>
        
        </div>
      )
    }
  }

export default ProdutosDaLista;