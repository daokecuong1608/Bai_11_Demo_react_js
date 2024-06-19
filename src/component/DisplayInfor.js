import React from "react";
class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { listUser } = this.props;
        console.log(listUser);
        //tự động truyền từ cha xuống con thông qua 
        //pops => property
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr />
                        </div>
                    );
                })
                }
                {/* <idv>My name's {name}</idv>
                <div>My age's {age}</div>
                <hr />
                <idv>My name's {name}</idv>
                <div>My age's {age}</div>
                <hr />
                <idv>My name's {name}</idv>
                <div>My age's {age}</div>
                <hr /> */}
            </div>
        );
    }
}
export default DisplayInfor;