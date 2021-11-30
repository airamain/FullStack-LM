import React from "react";

// destructuring
function Header({ titulo, creador, equipo }) {


    // destructuring


    return (
        <>
            <div className="container">
                <div className="card" >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                    </div>
                </div>

                <h2>{creador}</h2>
                <h2>{equipo}</h2>
            </div>
        </>
    )
}

export default Header;