import React, { Component } from 'react';

class Product extends Component {
    render() {
        var {product} = this.props;
        var status = product.status;
        var statusClass = status ? 'warning' : 'danger';
        return (
            <tr>
                <td>{this.props.key +1}</td>
                <td>{product.number}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>

                    <span className={`label label-${statusClass}`}>In stock</span>

                </td>
                <td>

                    <button type="button" className="btn btn-warning">Add</button>

                    <button type="button" className="btn btn-danger ml-10">Delete</button>

                </td>
            </tr>
        );
    }
}

export default Product;
