// Có 2 cách định nghĩa component
//1. Sử dụng function
//2. Sử dụng class

import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    //tập hơp những khối HTML chuyển thành giao diện
    //Cú pháp JSX (JavaScript XML) là một phần của React, nó cho phép chúng ta viết HTML trong JavaScript
    render() {
        return (
            <div>

                <UserInfor />
            </div>
        );
    }
}
//SD class
export default MyComponent;