import React from 'react';
import { Link } from 'react-router-dom';

function ThirdSem() {
    return (
        <div>
            <h2>Third Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Advanced Computational Techniques</button></Link>
            <Link to="/subject2"><button>Programming In Python</button></Link>
            <Link to="/subject3"><button>R Programming and Mathematics for Artificial Inteligence</button></Link>
            <Link to="/subject4"><button>Computer Organization and Architecture</button></Link>
            <Link to="/subject5"><button>Digital Electronics</button></Link>
            <Link to="/subject6"><button>Software Lab III (Python and R programming)</button></Link>
        </div>
    );
}

export default ThirdSem;