import React, { Component } from 'react';
import Products from './../../Components/ProductList/Products'
import Product from './../../Components/ProductItem/Product'

class ProductListPage extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info mb-10">Add products</button>
                <Products>
                    {this.showProductItem}
                </Products>
            </div>
        );
    }

    showProductItem = (products) =>{
        var result = '';
        result = products.map((item,index) => {
            return <Product key = {index}
            product  = {item} 
            />
        })
        return result;
    }
}

export default ProductListPage;
