import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

//functional component (stateless component)

// class DisplayInfor extends React.Component {
//     //State là một đối tượng JavaScript chứa thông tin quan trọng mà một thành phần cần lưu trữ và thay đổi theo thời gian.

//     render() {
//         console.log(' call me render ')
//         //destructuring array/object
//         const { listUser } = this.props;
//         //console.table(listUser);
//         //tự động truyền từ cha xuống con thông qua 
//         //pops => property
//         //template + logic + js
//         return (
//             <div className='display-infor-container'>
//                 {/* <img src={logo} ></img> */}

//                 {true &&
//                     <div>
//                         {listUser.map((user) => {

//                             return (
//                                 <div key={user.id} className={user.age < 20 ? "red" : "green"}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>


//                                     <hr />
//                                 </div>



//                             );
//                             // if (user.age < 20) {
//                             //     return (
//                             //         <div key={user.id} className="red">
//                             //             <div>My name's {user.name}</div>
//                             //             <div>My age's {user.age}</div>
//                             //             <hr />
//                             //         </div>
//                             //     );
//                             // } else {
//                             //     return (
//                             //         <div key={user.id} className="green">
//                             //             <div>My name's {user.name}</div>
//                             //             <div>My age's {user.age}</div>
//                             //             <hr />
//                             //         </div>
//                             //     );
//                             // }
//                         })
//                         }
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

//class component (stateful component)
const DisplayInfor = (props) => {
    const { listUser } = props;
    //destructuring array/object
    //console.table(listUser);
    //tự động truyền từ cha xuống con thông qua 
    //pops => property
    //template + logic + js

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        //  alert('click me')
        setShowHideListUser(!isShowHideListUser)
    }
    return (
        <div className='display-infor-container'>
            {/* <img src={logo} ></img> */}
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {(isShowHideListUser === true ? "Hide list user" : "Show list user")}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUser.map((user) => {

                        return (
                            <div key={user.id} className={user.age < 20 ? "red" : "green"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>


                                <hr />
                            </div>



                        );
                    })
                    }
                </div>
            }
        </div>
    );
}

export default DisplayInfor;