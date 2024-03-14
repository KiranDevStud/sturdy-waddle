import React from 'react';
import { Link } from 'react-router-dom';

function FourthSem() {
    return (
        <div>
            <h2>Fourth Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Subject 1</button></Link>
            <Link to="/subject2"><button>Subject 2</button></Link>
            <Link to="/subject3"><button>Subject 3</button></Link>
            <Link to="/subject4"><button>Subject 4</button></Link>
            <Link to="/subject5"><button>Subject 5</button></Link>
            <Link to="/subject6"><button>Subject 6</button></Link>
        </div>
    );
}

export default FourthSem;