import React from 'react';
import { Link } from 'react-router-dom';

function FifthSem() {
    return (
        <div>
            <h2>Fifth Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Principles of Machine Learning(T)</button></Link>
            <Link to="/subject2"><button>Web Application Developement using PHP(T)</button></Link>
            <Link to="/subject3"><button>Programming in JAVA</button></Link>
            <Link to="/subject4"><button>IT and Environment</button></Link>
            <Link to="/subject5"><button>Projrct Minor - Phase I</button></Link>
            <Link to="/subject6"><button>Software Lab (Java & PHP)</button></Link>
        </div>
    );
}

export default FifthSem;