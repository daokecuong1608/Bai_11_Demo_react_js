// Có 2 cách định nghĩa component
//1. Sử dụng function
//2. Sử dụng class

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    //tập hơp những khối HTML chuyển thành giao diện
    //Cú pháp JSX (JavaScript XML) là một phần của React, nó cho phép chúng ta viết HTML trong JavaScript
    render() {
        const myAge = 30;
        const myInfo = ['ab', 'cd', 'ef']
        return (
            <div>

                <UserInfor />
                <br></br>
                <DisplayInfor name='cuong' age='18' />
                <DisplayInfor name='cuong' age={myAge} myInfo={myInfo} />
            </div>
        );
    }
}
//SD class
export default MyComponent;