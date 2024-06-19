import React from "react";
class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { name, age } = this.props;
        //tự động truyền từ cha xuống con thông qua 
        //pops => property
        return (
            <div>
                <h1>My name is {this.props.name}</h1>
                <p>My age is {this.props.age}</p>
            </div>
        );
    }
}
export default DisplayInfor;