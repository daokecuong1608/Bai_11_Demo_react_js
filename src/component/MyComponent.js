// Có 2 cách định nghĩa component
//1. Sử dụng function
//2. Sử dụng class

import React from "react";
import UserInfor from "./UserInfor";
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

    //Dry : don't repeat yourself
    //tập hơp những khối HTML chuyển thành giao diện
    //Cú pháp JSX (JavaScript XML) là một phần của React, nó cho phép chúng ta viết HTML trong JavaScript
    render() {

        return (
            <div>

                <UserInfor />
                <br></br>
                <DisplayInfor
                    listUser={this.state.listUser}
                />
            </div>
        );
    }
}
//SD class
export default MyComponent;