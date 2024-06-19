// Có 2 cách định nghĩa component
//1. Sử dụng function
//2. Sử dụng class

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Cuong',
        address: 'Ha Noi',
        age: 18
    };

    handleClick = (event) => {
        alert('Hello');
        console.log(event.target);
        this.setState({
            name: 'AAAA'
        })

        this.setState({
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMoveOver(event) {
        console.log(event.target);
    }

    //tập hơp những khối HTML chuyển thành giao diện
    //Cú pháp JSX (JavaScript XML) là một phần của React, nó cho phép chúng ta viết HTML trong JavaScript
    render() {
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
                <h2>I am {this.state.age} years old</h2>
                <h3>I am living in {this.state.address}</h3>
                <button onMouseOver={this.handleOnMoveOver}>Click me</button>
                <button onClick={this.handleClick}>Click me</button>

            </div>
        );
    }
}
//SD class
export default MyComponent;