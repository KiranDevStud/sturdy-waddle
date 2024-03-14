import React from 'react';
import { Link } from 'react-router-dom';

function SecondSem() {
    return (
        <div>
            <h2>Second Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Second Language</button></Link>
            <Link to="/subject2"><button>Object Oriented Programming Using C++</button></Link>
            <Link to="/subject3"><button>Data Structures Using C++</button></Link>
            <Link to="/subject4"><button>Operating Systems</button></Link>
            <Link to="/subject5"><button>Mathematics - II</button></Link>
            <Link to="/subject6"><button>Software Lab - II</button></Link>
        </div>
    );
}

export default SecondSem;