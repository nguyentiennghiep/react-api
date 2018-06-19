import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" >CALL API</a>
                <ul className="nav navbar-nav">
                    <li className="">
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Products</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
