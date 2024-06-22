import React, { useState } from "react";

// class AddUserInfor extends React.Component {

//     state = {
//         name: '',
//         age: '',
//         address: ''
//     }

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//         //  console.log(event.target.value);
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//         //  console.log(event.target.value);
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         // alert('Submit');
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }


//     render() {
//         return (
//             <div>
//                 <h1>My name is {this.state.name}</h1>
//                 <h2>I am {this.state.age} years old</h2>
//                 <h3>I am living in {this.state.address}</h3>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <div>
//                         <label> Your name : </label>
//                         <input type="text"
//                             value={this.state.name}
//                             onChange={(event) => this.handleOnChangeInput(event)}></input>
//                     </div>
//                     <div>
//                         <label> Your age : </label>
//                         <input type="text"
//                             value={this.state.age}
//                             onChange={(event) => this.handleOnChangeAge(event)}></input>
//                     </div>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        // alert('Submit');
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }

    return (

        <div>
            <h1>My name is {name}</h1>
            <h2>I am {age} years old</h2>
            <h3>I am living in {address}</h3>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <div>
                    <label> Your name : </label>
                    <input type="text"
                        value={name}
                        onChange={(event) => handleOnChangeInput(event)}></input>
                </div>
                <div>
                    <label> Your age : </label>
                    <input type="text"
                        value={age}
                        onChange={(event) => handleOnChangeAge(event)}></input>
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}

export default AddUserInfor;