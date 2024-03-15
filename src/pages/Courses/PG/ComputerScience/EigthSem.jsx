import React from 'react';
import { Link } from 'react-router-dom';

function EigthSem() {
    return (
        <div>
            <h2>Eigth Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Elective</button></Link>
            <Link to="/subject2"><button>Advanced Deep Learning techniques</button></Link>
            <Link to="/subject3"><button>Digital Image Processing</button></Link>
            <Link to="/subject4"><button>Elective</button></Link>
            <Link to="/subject5"><button>Software Lab - DIP using Python</button></Link>
            <Link to="/subject6"><button>Software Lab - Deep Learning using R/Python</button></Link>
        </div>
    );
}

export default EigthSem;