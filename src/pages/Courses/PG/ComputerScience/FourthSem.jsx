import React from 'react';
import { Link } from 'react-router-dom';

function FourthSem() {
    return (
        <div>
            <h2>Fourth Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>English II- Language Skills for Academic Purpose</button></Link>
            <Link to="/subject2"><button>Microprcessors</button></Link>
            <Link to="/subject3"><button>Data Mining</button></Link>
            <Link to="/subject4"><button>Software Engineering</button></Link>
            <Link to="/subject5"><button>Basics of Artificial Inteligence</button></Link>
            <Link to="/subject6"><button>Lab(Digital Electronics & Software Lab)</button></Link>
        </div>
    );
}

export default FourthSem;