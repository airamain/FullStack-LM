import React from "react";

// destructuring
function Header(props) {

    // destructuring
    const { titulo } = props;



    return (
        <>
            <div className="container">
                <h1>{titulo}</h1>
            </div>
        </>
    )
}

export default Header;