import React from 'react';
import { Link } from 'react-router-dom';

function SixthSem() {
    return (
        <div>
            <h2>Sixth Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Linux and Shell Programming</button></Link>
            <Link to="/subject2"><button>Cmputer Networks(T)</button></Link>
            <Link to="/subject3"><button>Advanced Machine learning Techniques</button></Link>
            <Link to="/subject4"><button>Elective 1</button></Link>
            <Link to="/subject5"><button>Project Minor Phase II</button></Link>
            <Link to="/subject6"><button>Software Lab - Machine Learning Techniques</button></Link>
        </div>
    );
}

export default SixthSem;