import React from 'react';
import { Link } from 'react-router-dom';

function TenthSem() {
    return (
        <div>
            <h2>Tenth Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Major Project</button></Link>
            <Link to="/subject2"><button>Comprehensive Viva Vocs</button></Link>
        </div>
    );
}

export default TenthSem;