import React from "react";
class DisplayInfor extends React.Component {

    state = {
        isShowIsUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowIsUser: !this.state.isShowIsUser
        })
    }

    render() {
        //destructuring array/object
        const { listUser } = this.props;
        console.log(listUser);
        //console.table(listUser);
        //tự động truyền từ cha xuống con thông qua 
        //pops => property
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowIsUser === true ? "Hide list users." : "Show list users."}
                    </span>
                </div>
                {this.state.isShowIsUser &&
                    <div>
                        {listUser.map((user) => {

                            return (
                                <div key={user.id} className={user.age < 20 ? "red" : "green"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            );


                            // if (user.age < 20) {
                            //     return (
                            //         <div key={user.id} className="red">
                            //             <div>My name's {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     );
                            // } else {
                            //     return (
                            //         <div key={user.id} className="green">
                            //             <div>My name's {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     );
                            // }

                        })
                        }
                    </div>
                }
            </div>
        );
    }
}
export default DisplayInfor;