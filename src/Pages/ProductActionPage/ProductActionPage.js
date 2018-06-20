import React, { Component } from 'react';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name: '',
            price: 0,
            status: true

        };

    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value; 
        this.setState({[name] : value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }


    render() {
        //console.log(this.props.data.params.id)
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text"
                            className="form-control"
                            onChange={this.onChange}
                            name="name"
                            value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text"
                            className="form-control"
                            onChange={this.onChange}
                            name="price"
                            checked={this.state.price} />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                onChange={this.onChange}
                                name="status"
                                checked={this.state.status} />
                            In Stock
                   </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>

        );
    }


}

export default ProductActionPage;
