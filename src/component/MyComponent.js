// Có 2 cách định nghĩa component
//1. Sử dụng function
//2. Sử dụng class

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            {
                id: 1,
                name: 'cuong',
                age: 18
            },
            {
                id: 2,
                name: 'huy',
                age: 20
            },
            {
                id: 3,
                name: 'thanh',
                age: 60
            }
        ]
    }

    handleAddNewUser = (event) => {
        this.setState({
            listUser: [event, ...this.state.listUser]
        })

        // let listUserClone = this.state.listUser//copy mảng listUser
        // listUserClone.unshift(event);//thêm phần tử vào mảng
        // this.setState({
        //     listUser: listUserClone//cập nhật lại state
        // })
    }

    handleDeleteUser = (id) => {
        let listUserClone = this.state.listUser.filter((user) => {
            return user.id !== id;
        })
        this.setState({
            listUser: listUserClone
        })
    }

    //Dry : don't repeat yourself
    //tập hơp những khối HTML chuyển thành giao diện
    //Cú pháp JSX (JavaScript XML) là một phần của React, nó cho phép chúng ta viết HTML trong JavaScript
    render() {

        const test = { name: 'Hello world', age: 19 }
        return (
            //Fragment
            <>
                {JSON.stringify(test)}
                <div>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br></br>
                    <DisplayInfor
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
            </>
        );
    }
}
//SD class
export default MyComponent;