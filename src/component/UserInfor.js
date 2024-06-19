import React from "react";
class UserInfor extends React.Component {

    state = {
        name: 'Cuong',
        address: 'Ha Noi',
        age: 18
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        //  console.log(event.target.value);
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
        //  console.log(event.target.value);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        alert('Submit');
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
                <h2>I am {this.state.age} years old</h2>
                <h3>I am living in {this.state.address}</h3>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <div>
                        <label> Your name : </label>
                        <input type="text"
                            value={this.state.name}
                            onChange={(event) => this.handleOnChangeInput(event)}></input>
                    </div>
                    <div>
                        <label> Your age : </label>
                        <input type="text"
                            value={this.state.age}
                            onChange={(event) => this.handleOnChangeAge(event)}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;