import React from 'react';

const Navbar = () => {
    const total = 25000; // Variable representing the total of the purchase [cite: 20]
    const token = false; // Variable indicating if the user is logged in [cite: 17]

    return (
        <div>
            {/* Added 'navbar-dark' for light text and 'bg-dark' for black background */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a> {/* Displaying brand name based on design [cite: 16] */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Using 'me-auto' to push the total button to the right on larger screens */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">🍕Home</a> {/* Home button, always shown [cite: 12, 23] */}
                            </li>
                            {token ? ( // If token is true (user logged in) [cite: 18]
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔓Profile</a> {/* Profile button shown when logged in [cite: 18] */}
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔒Logout</a> {/* Logout button shown when logged in [cite: 18] */}
                                    </li>
                                </>
                            ) : ( // If token is false (user not logged in) [cite: 18]
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔐Login</a> {/* Login button shown when not logged in [cite: 18] */}
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🔐Register</a> {/* Register button shown when not logged in [cite: 18] */}
                                    </li>
                                </>
                            )}
                        </ul>
                        {/* Separate ul for the total button to control its alignment */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* The total should be displayed in a button [cite: 12] */}
                                {/* Formatted with thousands separator using toLocaleString() [cite: 21, 22] */}
                                <button className="btn btn-outline-light" disabled> {/* Added btn-outline-light for light text on dark background */}
                                    Total: ${total.toLocaleString('es-CL', { minimumFractionDigits: 0 })} {/* 'es-CL' for Chilean locale formatting, no decimals [cite: 21] */}
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