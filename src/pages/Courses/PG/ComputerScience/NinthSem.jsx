import React from 'react';
import { Link } from 'react-router-dom';

function NinthSem() {
    return (
        <div>
            <h2>Ninth Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Elective</button></Link>
            <Link to="/subject2"><button>Advanced Concepts in AI</button></Link>
            <Link to="/subject3"><button>Natural Language Processing</button></Link>
            <Link to="/subject4"><button>Elective</button></Link>
            <Link to="/subject5"><button>Software Lab - NLP using R/Python</button></Link>
            <Link to="/subject6"><button>case Study and Minor project</button></Link>
        </div>
    );
}

export default NinthSem;