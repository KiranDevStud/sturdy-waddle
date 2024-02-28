import React from 'react';
import { Link } from 'react-router-dom';

function ComputerScience() {
    return (
        <div>
            <h1>Computer Science</h1>
            <div className="years">
                <Link to="/first-year" className="year-button">
                    First Year
                </Link>
                <Link to="/second-year" className="year-button">
                    Second Year
                </Link>
                <Link to="/third-year" className="year-button">
                    Third Year
                </Link>
                <Link to="/fourth-year" className="year-button">
                    Fourth Year
                </Link>
                <Link to="/fifth-year" className="year-button">
                    Fifth Year
                </Link>
            </div>
        </div>
    );
}

export default ComputerScience;