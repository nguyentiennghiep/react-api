import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';
import ProductActionPage from '../Pages/ProductActionPage/ProductActionPage';

class ProductActionContainer extends Component {

    onSubmit = (product) => {
        this.props.addProductRequest(product);
    }

    render() {
        return (
            <div>
                <ProductActionPage onSubmit={this.onSubmit}  data = {this.props.match} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProductRequest: (product) => {
            dispatch(actions.addProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionContainer);
