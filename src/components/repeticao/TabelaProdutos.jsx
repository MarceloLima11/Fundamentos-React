import React from "react";

import './TabelaProdutos.css'
import produtos from '../../Data/produtos';

export default props => {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    };
    return (
        <div className="TabelaProdutos">
            <table border="1">
                <tr>
                    <th>Código</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                {getLinhas()}
            </table>
        </div>
    )
}