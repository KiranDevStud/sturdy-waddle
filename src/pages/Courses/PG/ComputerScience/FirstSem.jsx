import React from 'react';
import { Link } from 'react-router-dom';

function FirstSem() {
    return (
        <div>
            <h2>First Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>English Paper 1</button></Link>
            <Link to="/subject2"><button>Programming in C</button></Link>
            <Link to="/subject3"><button>Introduction to Computers</button></Link>
            <Link to="/subject4"><button>Database Management System</button></Link>
            <Link to="/subject5"><button>Mathematics - I</button></Link>
            <Link to="/subject6"><button>Software Lab - I</button></Link>
        </div>
    );
}

export default FirstSem;