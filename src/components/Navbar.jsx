import React from 'react';

const Navbar = () => {
    const total = 25000; 
    const token = false; 

    return (
        <div>
            {}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a> {}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">🍕Home</a> {}
                            </li>
                            {token ? (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔓Profile</a> {}
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔒Logout</a> {}
                                    </li>
                                </>
                            ) : ( 
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔐Login</a> {}
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔐Register</a> {}
                                    </li>
                                </>
                            )}
                        </ul>
                        {}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {}
                                {}
                                <button className="btn btn-outline-light" disabled> {}
                                    Total: ${total.toLocaleString('es-CL', { minimumFractionDigits: 0 })} {}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
